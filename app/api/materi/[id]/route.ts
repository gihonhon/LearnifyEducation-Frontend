import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Materi } from "@prisma/client";

// Update
export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body: Materi = await req.json();
    const updateMateri = await prisma.materi.update({
      where: {
        MateriID: params.id,
      },
      data: {
        Materi_Title: body.Materi_Title,
        KelasID: body.KelasID,
        SubjectID: body.SubjectID,
      },
    });
    return NextResponse.json(updateMateri, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 501 });
  }
};
