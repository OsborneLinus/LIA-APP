export const CheckBoxContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 bg-input-grey text-black py-2 px-4 shadow-3xl">
      {children}
    </div>
  );
};
