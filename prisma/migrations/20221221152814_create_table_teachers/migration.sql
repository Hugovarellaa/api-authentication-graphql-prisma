/*
  Warnings:

  - You are about to drop the `modules` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tearchersId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tearchersId` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "tearchersId" TEXT NOT NULL;

-- DropTable
DROP TABLE "modules";

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_tearchersId_key" ON "courses"("tearchersId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_tearchersId_fkey" FOREIGN KEY ("tearchersId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
