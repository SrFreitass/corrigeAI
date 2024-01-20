/*
  Warnings:

  - Added the required column `scholeSubject_id` to the `Lectures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lectures" ADD COLUMN     "scholeSubject_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SchoolSubjects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SchoolSubjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_scholeSubject_id_fkey" FOREIGN KEY ("scholeSubject_id") REFERENCES "SchoolSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
