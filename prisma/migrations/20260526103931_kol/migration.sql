/*
  Warnings:

  - A unique constraint covering the columns `[externalCode]` on the table `missions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "missions" ADD COLUMN     "externalCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "missions_externalCode_key" ON "missions"("externalCode");
