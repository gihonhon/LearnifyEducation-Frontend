import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Materi } from "@prisma/client";

export const GET = async (
  req: Request,
  { params }: { params: { materis: string } }
) => {
  try {
    const searchMateris = await prisma.materi.findMany({
      where: {
        Materi_Title: {
          contains: params.materis,
          mode: "insensitive",
        },
      },
      select: {
        MateriID: true,
        Materi_Title: true,
        Kelas: true,
        Subject: true,
      },
    });
    return NextResponse.json(searchMateris, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json(error, { status: 500 });
  }
};
