export const TextInput = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <input
      className="border-none py-2 px-4 shadow"
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      {...props}
    ></input>
  );
};
