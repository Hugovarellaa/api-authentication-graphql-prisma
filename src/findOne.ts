import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOne() {
  //SELECT FROM * FROM COURSES LIMIT 1
  //Trás o primeiro registro cadastrado
  // const result = await prisma.courses.findFirst();

  //SELECT FROM * FROM COURSES ORDER BY ID DESC LIMIT 1
  //Trás o registro mais recente
  const result = await prisma.courses.findFirst({
    take: -1,
  });

  return result;
}

findOne();
