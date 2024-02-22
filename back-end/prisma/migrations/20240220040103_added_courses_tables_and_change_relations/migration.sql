/*
  Warnings:

  - You are about to drop the column `enemSubject_id` on the `Lectures` table. All the data in the column will be lost.
  - You are about to drop the column `schoolSubject_id` on the `Lectures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_enemSubject_id_fkey";

-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_schoolSubject_id_fkey";

-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "enemSubject_id",
DROP COLUMN "schoolSubject_id";

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "schoolSubject_id" TEXT NOT NULL,
    "enemSubject_id" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_enemSubject_id_fkey" FOREIGN KEY ("enemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_schoolSubject_id_fkey" FOREIGN KEY ("schoolSubject_id") REFERENCES "SchoolSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
