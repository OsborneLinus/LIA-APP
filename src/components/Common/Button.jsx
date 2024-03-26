export const Button = ({ children, type, size }) => {
  const sizeClassNames = size === "small" ? "px-2 py-1" : "text-2xl px-4 py-2";

  return (
    <button
      type={type}
      className={`bg-asphalt-grey text-white rounded flex justify-center items-center ${sizeClassNames}`}
    >
      {children}
    </button>
  );
};
