import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      description: "Curso de React Web",
      duration: 100,
      tearchersId: "2754f89d-5b14-4fc0-a752-79db55c1d6fd",
    },
  });
  return result;
}

main();
