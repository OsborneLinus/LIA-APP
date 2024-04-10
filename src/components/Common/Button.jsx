export const Button = ({
  children,
  type,
  size,
  background,
  textColor,
  onClick,
  isDisabled,
}) => {
  const sizeClassNames =
    size === "small"
      ? "font-normal px-2 py-1"
      : size === "who"
      ? "font-normal px-4 py-2 md:px-16 md:py-4 w-custom md:w-[282px]"
      : size === "account"
      ? "font-normal px-4 py-2 md:px-8 md:py-4 md:w-[254px]"
      : "font-normal px-4 py-2 md:px-16 md:py-4";

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
