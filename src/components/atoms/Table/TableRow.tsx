type Props = {
  children: React.ReactNode;
};

const TableRow = ({ children }: Props): JSX.Element => {
  return <tr>{children}</tr>;
};

export default TableRow;
