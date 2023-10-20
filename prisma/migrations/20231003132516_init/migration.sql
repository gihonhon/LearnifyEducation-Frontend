-- CreateTable
CREATE TABLE "Materi" (
    "MateriID" SERIAL NOT NULL,
    "Materi_Title" TEXT NOT NULL,
    "Kelas" TEXT NOT NULL,
    "Subject" TEXT NOT NULL,

    CONSTRAINT "Materi_pkey" PRIMARY KEY ("MateriID")
);

-- CreateTable
CREATE TABLE "Video" (
    "VideoID" SERIAL NOT NULL,
    "MateriID" INTEGER NOT NULL,
    "Video_Content" BYTEA NOT NULL,
    "Title_Video" TEXT NOT NULL,
    "Short_Desc" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("VideoID")
);

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_MateriID_fkey" FOREIGN KEY ("MateriID") REFERENCES "Materi"("MateriID") ON DELETE RESTRICT ON UPDATE CASCADE;
