export const Button = ({ children, type, size, onClick }) => {
  const sizeClassNames = size === "small" ? "px-2 py-1" : "text-2xl px-4 py-2";

  return (
    <button
      type={type}
      className={`bg-night-sky-blue text-white rounded flex justify-center items-center w-fit ${sizeClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
