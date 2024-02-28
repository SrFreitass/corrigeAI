/*
  Warnings:

  - Added the required column `course_id` to the `UsersLectureHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsersLectureHistory" ADD COLUMN     "course_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UsersLectureHistory" ADD CONSTRAINT "UsersLectureHistory_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
