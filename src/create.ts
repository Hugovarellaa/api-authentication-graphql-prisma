import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCourse() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de NodeJS",
      duration: 100,
      description: "Curso fundamentos do Prisma",
    },
  });
  return result;
}

createCourse();
