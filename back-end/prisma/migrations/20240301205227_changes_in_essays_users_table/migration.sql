/*
  Warnings:

  - You are about to drop the column `copetence_1` on the `EssaysUsers` table. All the data in the column will be lost.
  - You are about to drop the column `copetence_2` on the `EssaysUsers` table. All the data in the column will be lost.
  - You are about to drop the column `copetence_3` on the `EssaysUsers` table. All the data in the column will be lost.
  - You are about to drop the column `copetence_4` on the `EssaysUsers` table. All the data in the column will be lost.
  - You are about to drop the column `copetence_5` on the `EssaysUsers` table. All the data in the column will be lost.
  - You are about to drop the column `theme` on the `EssaysUsers` table. All the data in the column will be lost.
  - Added the required column `entity` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theme_id` to the `EssaysUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EssaysUsers" DROP COLUMN "copetence_1",
DROP COLUMN "copetence_2",
DROP COLUMN "copetence_3",
DROP COLUMN "copetence_4",
DROP COLUMN "copetence_5",
DROP COLUMN "theme",
ADD COLUMN     "entity" TEXT NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL,
ADD COLUMN     "result" TEXT NOT NULL,
ADD COLUMN     "theme_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EssaysUsers" ADD CONSTRAINT "EssaysUsers_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "Essays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
