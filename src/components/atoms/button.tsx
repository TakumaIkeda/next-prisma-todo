type Props = {
  children: React.ReactNode;
  color: "primary";
};

const Button = ({ children, color }: Props): JSX.Element => {
  const styles = {
    primary: "btn btn-primary",
  };

  return <button className={styles[color]}>{children}</button>;
};

export default Button;
