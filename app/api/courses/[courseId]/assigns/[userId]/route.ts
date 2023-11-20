import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string; userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const values = await req.json();
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newAssign = await db.assign.create({
      data: {
        userId: params.userId,
        courseId: params.courseId,
        ...values,
      },
    });

    return NextResponse.json(newAssign);
  } catch (error) {
    console.log("[CHECKOUT_COURSE_ID]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
