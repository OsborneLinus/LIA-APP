export const CheckboxInput = ({ id, value, onChange }) => {
  return (
    <input
      type="checkbox"
      value={value}
      id={id}
      name={id}
      className="appearance-none peer w-6 h-6 bg-transparent focus:ring-0"
      onChange={onChange}
    />
  );
};
