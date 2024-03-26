export const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="bg-sky-950 rounded px-4 py-2 flex justify-center items-center text-white text-2xl w-fit"
    >
      {children}
    </button>
  );
};
