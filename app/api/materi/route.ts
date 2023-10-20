import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Materi, Video } from "@prisma/client";

// Get All Materi
export const GET = async (req: Request) => {
  try {
    // const body: Kelas = await req.json();
    const subjectList = await prisma.materi.findMany({
      select: {
        MateriID: true,
        Materi_Title: true,
        videos: {
          select: {
            VideoID: true,
            MateriID: false,
            Url_path: true,
            Title_Video: true,
            Short_Desc: true,
          },
        },
        Kelas: true,
        Subject: true,
      },
    });
    return NextResponse.json(subjectList, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};

// Create Materi
export const POST = async (req: Request) => {
  try {
    const body: Materi = await req.json();
    const createdMateri = await prisma.materi.create({
      data: {
        Materi_Title: body.Materi_Title,
        KelasID: body.KelasID,
        SubjectID: body.SubjectID,
      },
    });

    return NextResponse.json(createdMateri, { status: 201 });
  } catch (error) {
    console.error("Error creating Materi with Videos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
