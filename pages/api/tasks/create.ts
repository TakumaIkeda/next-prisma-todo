import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Task } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Task | Error>
) => {
  const { title, priority } = req.body;
  const prisma = new PrismaClient();

  try {
    const task = await prisma.task.create({
      data: {
        title,
        priority,
      },
    });
    res.status(201).json(task);
  } catch (e: unknown) {
    const error = e as Error;
    res.status(500).json(error);
  }
};

export default handler;
