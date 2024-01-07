import { useUser } from "../features/authentication/useUser";
import { formatTime } from "../utils/common";

function Message({ message }) {
  const { user } = useUser();

  return (
    <div
      className={`${
        message?.sender_id === user.id
          ? "self-end rounded-br-none bg-darkViolet text-white dark:bg-darkViolet-dark"
          : "rounded-bl-none bg-mediumSlate dark:bg-mediumSlate-dark"
      } w-fit max-w-[80%] rounded-2xl px-4 py-2 `}
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
