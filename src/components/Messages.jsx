import { useMessages } from "../features/converse/useMessages";
import Message from "./Message";
import { useRef } from "react";
import { sortMessageByTime } from "../utils/common";
import Loader from "./Loader";

function Messages() {
  const { data, isPending } = useMessages();
  const messages = data?.messages.sort(sortMessageByTime);

  const bottomRef = useRef();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 pt-2">
      {isPending && (
        <span className="flex-center mb-4 justify-center">
          <Loader size="medium" text="Loading messages" />
        </span>
      )}

      {messages?.length === 0 && (
        <p className="flex-center mb-4 opacity-70">No messages!</p>
      )}
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}

      {bottomRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      })}
      <span ref={bottomRef}></span>
    </div>
  );
}

export default Messages;
