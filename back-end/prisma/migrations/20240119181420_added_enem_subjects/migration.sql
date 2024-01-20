/*
  Warnings:

  - You are about to drop the `Matter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_matter_id_fkey";

-- DropTable
DROP TABLE "Matter";

-- CreateTable
CREATE TABLE "EnemSubjects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EnemSubjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_matter_id_fkey" FOREIGN KEY ("matter_id") REFERENCES "EnemSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
