export const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="bg-asphalt-grey px-4 py-2 flex justify-center items-center text-2xl"
    >
      {children}
    </button>
  );
};
