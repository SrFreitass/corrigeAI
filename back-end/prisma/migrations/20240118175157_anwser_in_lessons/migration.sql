/*
  Warnings:

  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answer` to the `Lessons` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_lesson_id_fkey";

-- AlterTable
ALTER TABLE "Lessons" ADD COLUMN     "answer" INTEGER NOT NULL,
ADD COLUMN     "answer_img_url" TEXT,
ADD COLUMN     "answer_text" TEXT;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "email_verified" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Answers";
