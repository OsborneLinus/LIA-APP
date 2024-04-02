export const Button = ({
  children,
  type,
  size,
  background,
  textColor,
  onClick,
}) => {
  const sizeClassNames = size === "small" ? "px-2 py-1" : "text-2xl px-4 py-2";
  const backgroundColor =
    background === undefined ? "night-sky-blue" : background;
  const text = textColor === undefined ? "text-white" : "text-black";

  return (
    <button
      type={type}
      className={`bg-${backgroundColor} ${text} rounded flex justify-center items-center w-fit ${sizeClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
