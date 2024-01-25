-- CreateTable
CREATE TABLE "UserStatistics" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "lecture_id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "enemSubject_id" TEXT NOT NULL,
    "schoolSubject_id" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserStatistics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserStatistics" ADD CONSTRAINT "UserStatistics_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lectures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStatistics" ADD CONSTRAINT "UserStatistics_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lessons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStatistics" ADD CONSTRAINT "UserStatistics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStatistics" ADD CONSTRAINT "UserStatistics_enemSubject_id_fkey" FOREIGN KEY ("enemSubject_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStatistics" ADD CONSTRAINT "UserStatistics_schoolSubject_id_fkey" FOREIGN KEY ("schoolSubject_id") REFERENCES "SchoolSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
