export const TextInput = ({ id, type, value, onChange, placeholder }) => {
  return (
    <input
      className="border-none py-2 px-4 text-black shadow"
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    ></input>
  );
};
