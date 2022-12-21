import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso com professor rodrigo",
      duration: 500,
      teacher: {
        connect: {
          id: "ae618193-9757-42bc-a5c7-842de22c1cd0",
        },
      },
    },
  });
  return result;
}

main();
