import type { NextPage } from "next";
import Button from "~/components/atoms/Button";
import Container from "~/components/atoms/Container";
import Input from "~/components/atoms/Input";
import Select from "~/components/atoms/Select";
import Title from "~/components/atoms/Title";
import { RiAddFill } from "react-icons/ri";
import Table from "~/components/atoms/Table/Table";
import TableRow from "~/components/atoms/Table/TableRow";
import TableCell from "~/components/atoms/Table/TableCell";

const Home: NextPage = () => {
  const priorityOptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  return (
    <Container>
      <div className="flex justify-center">
        <Title>Next.js Prisma Todo</Title>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        <Input value="" placeholder="task" onChange={() => {}} />
        <Select options={priorityOptions} value="" onChange={() => {}}></Select>
        <Button color="primary">
          <RiAddFill size={24}></RiAddFill>
        </Button>
      </div>
      <div className="mt-2">
        <Table headList={["Task", "Priority"]}>
          <TableRow>
            <TableCell>aa</TableCell>
            <TableCell>aa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>aa</TableCell>
            <TableCell>aa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>aa</TableCell>
            <TableCell>aa</TableCell>
          </TableRow>
        </Table>
      </div>
    </Container>
  );
};

export default Home;
