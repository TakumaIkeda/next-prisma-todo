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
import { useState } from "react";

const Home: NextPage = () => {
  const priorityOptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        priority: priority,
      }),
    });

    console.log(res);
  };

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <Container>
      <div className="flex justify-center">
        <Title>Next.js Prisma Todo</Title>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 mt-5">
          <Input
            value={title}
            name="title"
            placeholder="task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select
            options={priorityOptions}
            value={priority}
            name="priority"
            onChange={(e) => setPriority(e.target.value)}
          ></Select>
          <Button type="submit" color="primary">
            <RiAddFill size={24}></RiAddFill>
          </Button>
        </div>
      </form>
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
