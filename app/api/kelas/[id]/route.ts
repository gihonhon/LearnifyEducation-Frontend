import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get By Id
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const kelasById = await prisma.kelas.findMany({
      where: {
        KelasID: params.id,
      },
      select: {
        Kelas: true,
        materis: true,
        subjects: true,
      },
    });
    if (!kelasById) {
      return NextResponse.json({ error: "Materi not found" }, { status: 404 });
    }
    return NextResponse.json(kelasById, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

// Delete
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const delKelas = await prisma.kelas.delete({
      where: {
        KelasID: params.id,
      },
    });
    return NextResponse.json(delKelas, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
