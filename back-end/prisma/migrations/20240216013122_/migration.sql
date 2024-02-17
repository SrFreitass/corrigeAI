/*
  Warnings:

  - You are about to drop the column `EnemSubject_id` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `enemSubject_id` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_EnemSubject_id_fkey";

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "EnemSubject_id",
ADD COLUMN     "enemSubject_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_enemSubject_id_fkey" FOREIGN KEY ("enemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
