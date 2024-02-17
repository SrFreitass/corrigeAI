/*
  Warnings:

  - You are about to drop the column `essay` on the `Essays` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Essays` table. All the data in the column will be lost.
  - You are about to drop the column `theme` on the `Essays` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Essays` table. All the data in the column will be lost.
  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entity` to the `Essays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `essay_img` to the `Essays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Essays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Essays` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_lecture_id_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Essays" DROP CONSTRAINT "Essays_user_id_fkey";

-- AlterTable
ALTER TABLE "Essays" DROP COLUMN "essay",
DROP COLUMN "points",
DROP COLUMN "theme",
DROP COLUMN "user_id",
ADD COLUMN     "entity" TEXT NOT NULL,
ADD COLUMN     "essay_img" TEXT NOT NULL,
ADD COLUMN     "texts" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Answers";

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "answer" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "EnemSubject_id" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswersLectures" (
    "id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "lecture_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "option" INTEGER NOT NULL,

    CONSTRAINT "AnswersLectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EssaysUsers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "theme" TEXT NOT NULL,
    "essay" TEXT NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "EssaysUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_EnemSubject_id_fkey" FOREIGN KEY ("EnemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswersLectures" ADD CONSTRAINT "AnswersLectures_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lectures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswersLectures" ADD CONSTRAINT "AnswersLectures_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lessons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswersLectures" ADD CONSTRAINT "AnswersLectures_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EssaysUsers" ADD CONSTRAINT "EssaysUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
