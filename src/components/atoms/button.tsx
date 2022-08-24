type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  color: "primary";
  onClick?: () => void;
};

const Button = ({
  children,
  type = "button",
  color,
  onClick,
}: Props): JSX.Element => {
  const styles = {
    primary: "btn btn-primary",
  };

  return (
    <button type={type} className={styles[color]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
