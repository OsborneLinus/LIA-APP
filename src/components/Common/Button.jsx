export const Button = ({
  children,
  type,
  size,
  background,
  textColor,
  onClick,
  isDisabled,
  fillWidth,
}) => {
  const sizeClassNames =
    size === "small"
      ? "font-normal px-2 py-1"
      : "font-normal px-4 py-2 md:py-4 md:px-16" +
        (fillWidth ? " w-custom md:w-[282px]" : "");
  const backgroundColor =
    background === undefined ? "night-sky-blue" : background;
  const text = textColor === undefined ? "text-white" : "text-black";

  return (
    <button
      type={type}
      className={`${
        isDisabled ? "bg-gray-500" : `bg-${backgroundColor}`
      } ${text} rounded flex justify-center items-center ${sizeClassNames}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
