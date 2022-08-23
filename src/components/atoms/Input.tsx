type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: Props) => {
  return (
    <input type="text" className="input" value={value} onChange={onChange} />
  );
};

export default Input;
