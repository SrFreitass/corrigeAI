/*
  Warnings:

  - Added the required column `enemSubject_id` to the `SchoolSubjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SchoolSubjects" ADD COLUMN     "enemSubject_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SchoolSubjects" ADD CONSTRAINT "SchoolSubjects_enemSubject_id_fkey" FOREIGN KEY ("enemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
