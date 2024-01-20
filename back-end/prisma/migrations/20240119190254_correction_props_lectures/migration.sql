/*
  Warnings:

  - You are about to drop the column `enemSubjects_id` on the `Lectures` table. All the data in the column will be lost.
  - Added the required column `enemSubject_id` to the `Lectures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_enemSubjects_id_fkey";

-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "enemSubjects_id",
ADD COLUMN     "enemSubject_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_enemSubject_id_fkey" FOREIGN KEY ("enemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
