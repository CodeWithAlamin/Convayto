import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getConversations } from "../../services/apiAuth";
import { useUser } from "../authentication/useUser";
import { useEffect } from "react";
import { subscribeRealtimeConversation } from "../../services/apiRealtime";

let subscriptionConversation;

export function useConversatoins() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const myUserId = user.id;

  const { data, isPending, error } = useQuery({
    queryKey: ["conversations", myUserId],
    queryFn: () => getConversations({ myUserId }),
  });

  useEffect(
    function () {
      if (!myUserId) return;
      // if (myUserId === subscriptionConversation?.subTopic) return;

      if (subscriptionConversation) return;

      // if (subscriptionConversation) {
      //   // subscriptionConversation.unsubscribe();
      // }

      const updateConversation = (payload) => {
        queryClient.setQueryData(["conversations", myUserId], (prevData) => {
          if (payload.eventType === "INSERT") {
            return [...prevData, payload.new];
          } else if (payload.eventType === "UPDATE") {
            const newData = prevData.map((conversation) => {
              if (conversation.id === payload.new.id) {
                return { ...conversation, ...payload.new };
              }
              return conversation;
            });
            return newData;
          }
          // const updatedArray = prevData.filter(
          //   (conversation) => conversation.id !== payload.id
          // );
          // return updatedArray.concat([payload]);
          // const existingConversation = prevData.find(
          //   (conversation) => conversation.id === payload.id
          // );
          // if (existingConversation) {
          //   console.log("existing conversation");
          //   // Update existing conversation
          //   return prevData.map((conversation) =>
          //     conversation.id === payload.id
          //       ? { ...existingConversation, ...payload }
          //       : conversation
          //   );
          // } else {
          //   console.log("new conversation");
          //   // Add new conversation
          //   return [...prevData, payload];
          // }
        });
      };

      subscriptionConversation = subscribeRealtimeConversation({
        myUserId,
        // conversationIds,
        onUpdate: updateConversation,
      });

      return () => {
        // subscriptionConversation?.unsubscribe();
        // console.log("unsubscribed conversations");
      };
    },
    [myUserId, queryClient]
  );

  if (error) {
    console.error("Error fetching conversations:", error.message);
  }

  return { data, isPending };
}
