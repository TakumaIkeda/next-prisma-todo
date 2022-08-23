type Props = {
  children: React.ReactNode;
};

const TableCell = ({ children }: Props) => {
  return <td>{children}</td>;
};

export default TableCell;
