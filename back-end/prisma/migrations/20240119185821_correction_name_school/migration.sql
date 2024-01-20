/*
  Warnings:

  - You are about to drop the column `scholeSubject_id` on the `Lectures` table. All the data in the column will be lost.
  - Added the required column `schoolSubject_id` to the `Lectures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_scholeSubject_id_fkey";

-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "scholeSubject_id",
ADD COLUMN     "schoolSubject_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_schoolSubject_id_fkey" FOREIGN KEY ("schoolSubject_id") REFERENCES "SchoolSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
