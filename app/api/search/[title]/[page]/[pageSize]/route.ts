import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { title: string; page: string; pageSize: string };
  }
) {
  try {
    const parsedPage = Number(params.page);
    const parsedPageSize = Number(params.pageSize);
    const offset = (parsedPage - 1) * parsedPageSize;
    const [data, totalCount] = await Promise.all([
      db.course.findMany({
        skip: offset,
        take: parsedPageSize,
        where: {
          isPublished: true,

          title: {
            contains: params.title,
            mode: "insensitive",
          },
        },
        include: {
          subjects: true,
          chapters: true,
          kelas: true,
        },
      }),
      db.course.count({
        where: {
          isPublished: true,

          title: {
            contains: params.title,
            mode: "insensitive",
          },
        },
      }),
    ]);
    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.log("[GET_COURSES_PAGINATION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
