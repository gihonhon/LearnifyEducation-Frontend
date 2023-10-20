import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { Subject } from "@prisma/client";

export const GET = async (
  req: Request,
  { params }: { params: { subject: string } }
) => {
  try {
    const subjectByname = await prisma.subject.findMany({
      where: {
        Subject: params.subject,
      },
    });

    if (!subjectByname) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    return NextResponse.json(subjectByname, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 505 });
  }
};
