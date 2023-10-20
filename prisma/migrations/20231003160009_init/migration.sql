/*
  Warnings:

  - You are about to drop the column `Kelas` on the `Materi` table. All the data in the column will be lost.
  - You are about to drop the column `Subject` on the `Materi` table. All the data in the column will be lost.
  - Added the required column `KelasID` to the `Materi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SubjectID` to the `Materi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Materi" DROP COLUMN "Kelas",
DROP COLUMN "Subject",
ADD COLUMN     "KelasID" TEXT NOT NULL,
ADD COLUMN     "SubjectID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Kelas" (
    "KelasID" TEXT NOT NULL,
    "Kelas" TEXT NOT NULL,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("KelasID")
);

-- CreateTable
CREATE TABLE "Subject" (
    "SubjectID" TEXT NOT NULL,
    "Subject" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("SubjectID")
);

-- AddForeignKey
ALTER TABLE "Materi" ADD CONSTRAINT "Materi_KelasID_fkey" FOREIGN KEY ("KelasID") REFERENCES "Kelas"("KelasID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materi" ADD CONSTRAINT "Materi_SubjectID_fkey" FOREIGN KEY ("SubjectID") REFERENCES "Subject"("SubjectID") ON DELETE RESTRICT ON UPDATE CASCADE;
