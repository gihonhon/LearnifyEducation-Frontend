import prisma from "@/lib/prisma";
import type { Kelas } from "@prisma/client";
import { NextResponse } from "next/server";

// Get All List Kelas
export const GET = async (req: Request) => {
  try {
    // const body: Kelas = await req.json();
    const kelasList = await prisma.kelas.findMany({
      select: {
        KelasID: true,
        Kelas: true,
      },
    });
    return NextResponse.json(kelasList, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};

// Create Kelas
export const POST = async (request: Request) => {
  try {
    const body: Kelas = await request.json();
    const kelas = await prisma.kelas.create({
      data: {
        Kelas: body.Kelas,
      },
    });
    return NextResponse.json(kelas, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};
