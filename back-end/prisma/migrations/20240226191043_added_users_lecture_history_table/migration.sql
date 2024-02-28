-- CreateTable
CREATE TABLE "UsersLectureHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "lecture_id" TEXT NOT NULL,

    CONSTRAINT "UsersLectureHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersLectureHistory" ADD CONSTRAINT "UsersLectureHistory_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lectures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersLectureHistory" ADD CONSTRAINT "UsersLectureHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
