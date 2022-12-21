import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de nodeJS",
      duration: 500,
      description: "curso de nodeJS 20 Aulas",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Daniela Leão Evangelista",
          },
          create: {
            name: "Daniela Leão Evangelista",
          },
        },
      },
    },
  });
  return result;
}

main();
