export const CheckBoxContainer = ({ children, rows, cols, gap }) => {
  return (
    <div
      className={`${rows} ${cols} ${gap} w-full grid bg-input-grey text-black py-2 px-4 shadow-3xl`}
    >
      {children}
    </div>
  );
};
