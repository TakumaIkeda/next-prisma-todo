type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      className="input input-bordered focus:input-primary"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
