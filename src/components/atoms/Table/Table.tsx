type Props = {
  children: React.ReactNode;
  headList?: string[];
};

const Table = ({ children, headList }: Props) => {
  return (
    <table className="w-full table table-zebra">
      {headList && (
        <thead>
          <tr>
            {headList.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
