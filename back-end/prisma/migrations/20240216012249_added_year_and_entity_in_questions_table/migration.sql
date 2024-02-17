/*
  Warnings:

  - Added the required column `entity` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "entity" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
