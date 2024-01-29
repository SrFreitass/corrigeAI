/*
  Warnings:

  - You are about to drop the `UserStatistics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserStatistics" DROP CONSTRAINT "UserStatistics_enemSubject_id_fkey";

-- DropForeignKey
ALTER TABLE "UserStatistics" DROP CONSTRAINT "UserStatistics_schoolSubject_id_fkey";

-- DropForeignKey
ALTER TABLE "UserStatistics" DROP CONSTRAINT "UserStatistics_user_id_fkey";

-- DropTable
DROP TABLE "UserStatistics";

-- CreateTable
CREATE TABLE "Essays" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "essay" TEXT NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "Essays_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Essays" ADD CONSTRAINT "Essays_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
