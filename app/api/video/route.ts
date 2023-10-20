import prisma from "@/lib/prisma";
import { Video } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Video by Id Materi
export const POST = async (req: Request) => {
  try {
    const body: Video = await req.json();
    const createdVideo = await prisma.video.create({
      data: {
        MateriID: body.MateriID,
        Url_path: body.Url_path,
        Title_Video: body.Title_Video,
        Short_Desc: body.Short_Desc,
      },
    });
    return NextResponse.json(createdVideo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
