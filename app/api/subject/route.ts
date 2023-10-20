import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Subject } from "@prisma/client";

// Get All List Subject
export const GET = async (req: Request) => {
  try {
    // const body: Kelas = await req.json();
    const subjectList = await prisma.subject.findMany({
      select: {
        SubjectID: true,
        Subject: true,
        kelas: true,
        materis: true,
      },
    });
    return NextResponse.json(subjectList, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};

// Create Subject
export const POST = async (request: Request) => {
  try {
    const body: Subject = await request.json();
    const subject = await prisma.subject.create({
      data: {
        Subject: body.Subject,
        KelasID: body.KelasID,
      },
    });
    return NextResponse.json(subject, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};
