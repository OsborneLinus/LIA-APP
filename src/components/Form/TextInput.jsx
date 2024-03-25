export const TextInput = ({ id, type, value, onChange, placeholder }) => {
  return (
    <input
      className="py-2 px-4 text-black"
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};
