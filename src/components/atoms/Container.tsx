type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex justify-center p-2 min-h-screen">
      <div className="md:w-9/12">{children}</div>
    </div>
  );
};

export default Container;
