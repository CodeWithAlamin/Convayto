import { useUser } from "../features/authentication/useUser";
import { formatTime } from "../utils/common";

function Message({ message }) {
  const { user } = useUser();

  return (
    <div
      className={`${
        message?.sender_id === user.id
          ? "self-end rounded-br-none bg-violet-900"
          : "rounded-bl-none bg-gray-700"
      } w-fit max-w-[80%] rounded-2xl bg-gray-700 px-4 py-2`}
    >
      <p>
        {message?.content}
        <span className="float-right ml-2 mt-2 select-none text-xs opacity-70">
          {formatTime(message?.created_at)}
        </span>
      </p>
    </div>
  );
}

export default Message;
