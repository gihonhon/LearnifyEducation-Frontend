/*
  Warnings:

  - You are about to drop the column `Video_Content` on the `Video` table. All the data in the column will be lost.
  - Added the required column `File_name` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Url_path` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "Video_Content",
ADD COLUMN     "File_name" TEXT NOT NULL,
ADD COLUMN     "Url_path" TEXT NOT NULL;
