/*
  Warnings:

  - You are about to drop the column `matter` on the `Lectures` table. All the data in the column will be lost.
  - You are about to drop the column `matter` on the `Lessons` table. All the data in the column will be lost.
  - Added the required column `matter_id` to the `Lectures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "matter",
ADD COLUMN     "matter_id" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Lessons" DROP COLUMN "matter";

-- CreateTable
CREATE TABLE "Matter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Matter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_matter_id_fkey" FOREIGN KEY ("matter_id") REFERENCES "Matter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
