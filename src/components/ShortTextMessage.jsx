function ShortTextMessage({ children, opacity = 60 }) {
  return (
    <span
      className={`slideUpMessage my-4 flex items-center justify-center opacity-${opacity} select-none`}
    >
      {children}
    </span>
  );
}

export default ShortTextMessage;