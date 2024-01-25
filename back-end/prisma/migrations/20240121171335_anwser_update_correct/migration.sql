/*
  Warnings:

  - Made the column `correct` on table `Answers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Answers" ALTER COLUMN "correct" SET NOT NULL;
