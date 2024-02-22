/*
  Warnings:

  - You are about to drop the column `enemSubject_id` on the `Courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_enemSubject_id_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "enemSubject_id";
