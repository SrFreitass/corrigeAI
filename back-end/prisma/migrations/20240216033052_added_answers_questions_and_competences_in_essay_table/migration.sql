/*
  Warnings:

  - You are about to drop the column `points` on the `EssaysUsers` table. All the data in the column will be lost.
  - Added the required column `copetence_1` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `copetence_2` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `copetence_3` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `copetence_4` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `copetence_5` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EssaysUsers" DROP COLUMN "points",
ADD COLUMN     "copetence_1" INTEGER NOT NULL,
ADD COLUMN     "copetence_2" INTEGER NOT NULL,
ADD COLUMN     "copetence_3" INTEGER NOT NULL,
ADD COLUMN     "copetence_4" INTEGER NOT NULL,
ADD COLUMN     "copetence_5" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AnswersQuestions" (
    "id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "option" INTEGER NOT NULL,

    CONSTRAINT "AnswersQuestions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AnswersQuestions" ADD CONSTRAINT "AnswersQuestions_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswersQuestions" ADD CONSTRAINT "AnswersQuestions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
