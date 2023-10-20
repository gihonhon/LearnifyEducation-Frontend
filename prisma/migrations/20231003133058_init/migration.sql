/*
  Warnings:

  - The primary key for the `Materi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Video` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_MateriID_fkey";

-- AlterTable
ALTER TABLE "Materi" DROP CONSTRAINT "Materi_pkey",
ALTER COLUMN "MateriID" DROP DEFAULT,
ALTER COLUMN "MateriID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Materi_pkey" PRIMARY KEY ("MateriID");
DROP SEQUENCE "Materi_MateriID_seq";

-- AlterTable
ALTER TABLE "Video" DROP CONSTRAINT "Video_pkey",
ALTER COLUMN "VideoID" DROP DEFAULT,
ALTER COLUMN "VideoID" SET DATA TYPE TEXT,
ALTER COLUMN "MateriID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Video_pkey" PRIMARY KEY ("VideoID");
DROP SEQUENCE "Video_VideoID_seq";

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_MateriID_fkey" FOREIGN KEY ("MateriID") REFERENCES "Materi"("MateriID") ON DELETE RESTRICT ON UPDATE CASCADE;
