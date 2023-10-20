/*
  Warnings:

  - Added the required column `KelasID` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "KelasID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_KelasID_fkey" FOREIGN KEY ("KelasID") REFERENCES "Kelas"("KelasID") ON DELETE RESTRICT ON UPDATE CASCADE;
