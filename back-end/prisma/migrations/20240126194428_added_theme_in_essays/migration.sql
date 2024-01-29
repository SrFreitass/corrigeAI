/*
  Warnings:

  - Added the required column `theme` to the `Essays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Essays" ADD COLUMN     "theme" TEXT NOT NULL;
