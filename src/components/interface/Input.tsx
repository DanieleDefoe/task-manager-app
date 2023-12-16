interface Props {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input: React.FC<Props> = ({ name, type, placeholder, value }) => {
  return (
    <input
      className="w-full p-2 border-gray-200 border"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
