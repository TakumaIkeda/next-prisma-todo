import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

const createTask = async (task: Task) => {
  const res = await prisma.task.create({
    data: {
      ...task,
    },
  });
};

export default createTask;
