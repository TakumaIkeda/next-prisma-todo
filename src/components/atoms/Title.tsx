type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props): JSX.Element => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};

export default Title;
