type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
  return <div className="md:w-9/12 p-2 min-h-screen">{children}</div>;
};

export default Container;
