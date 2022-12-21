import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function update() {
  // update -> Atualizar somente 1 registro (1 Coluna)
  // updateMany -> Atualizar uma serie registros (Varias Colunas)
  const result = await prisma.courses.update({
    where: {
      id: "fda8a1bf-5df3-4f20-afff-98e793bace0a",
    },
    data: {
      duration: 200,
    },
  });
  return result;
}

update();
