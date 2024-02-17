/*
  Warnings:

  - Added the required column `description` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "description" TEXT NOT NULL;
