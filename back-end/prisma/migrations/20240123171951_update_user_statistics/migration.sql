/*
  Warnings:

  - You are about to drop the column `correct` on the `UserStatistics` table. All the data in the column will be lost.
  - You are about to drop the column `lecture_id` on the `UserStatistics` table. All the data in the column will be lost.
  - You are about to drop the column `lesson_id` on the `UserStatistics` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `UserStatistics` table. All the data in the column will be lost.
  - Added the required column `option` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_answers` to the `UserStatistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_correct_answers` to the `UserStatistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_wrong_answers` to the `UserStatistics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserStatistics" DROP CONSTRAINT "UserStatistics_lecture_id_fkey";

-- DropForeignKey
ALTER TABLE "UserStatistics" DROP CONSTRAINT "UserStatistics_lesson_id_fkey";

-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "option" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserStatistics" DROP COLUMN "correct",
DROP COLUMN "lecture_id",
DROP COLUMN "lesson_id",
DROP COLUMN "score",
ADD COLUMN     "total_answers" INTEGER NOT NULL,
ADD COLUMN     "total_correct_answers" INTEGER NOT NULL,
ADD COLUMN     "total_wrong_answers" INTEGER NOT NULL;
