export const CheckBoxContainer = ({ children, rows, cols, gap }) => {
  return (
    <div
      className={`${rows} ${cols} ${gap} w-full grid bg-white text-black py-2 px-4 shadow`}
    >
      {children}
    </div>
  );
};
