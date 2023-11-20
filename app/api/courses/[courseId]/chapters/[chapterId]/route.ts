import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { utapi } from "@/server/uploadthing";

//* Delete
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: session.user.id,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });

    if (!chapter) {
      return new NextResponse("Not Found", { status: 404 });
    }
    const extractFileNameFromUrl = (url: string): string | null => {
      const parts = url.split("/");
      const fileName = parts[parts.length - 1];
      return fileName || null;
    };

    const url = chapter.videoUrl;
    const fileName = extractFileNameFromUrl(url!);
    // TODO : Add Check for existing video url and rewrite video url
    if (chapter.videoUrl) {
      const existingMuxData = await db.videoData.findFirst({
        where: {
          chapterId: params.chapterId,
        },
      });
      // TODO : Delete from bucket or upload thing
      if (existingMuxData) {
        await utapi.deleteFiles(fileName!);
        await db.videoData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }
    }

    const deletedChapter = await db.chapter.delete({
      where: {
        id: params.chapterId,
      },
    });

    //! AtLeast one chapter
    const publishedChapterInCourse = await db.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });

    if (publishedChapterInCourse.length) {
      await db.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log("[CHAPTER_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

//* Update
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const { isPublished, ...values } = await req.json();
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: session.user.id,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    //TODO : Handle Video Upload
    //TODO : Rewrite video in database
    if (values.videoUrl) {
      const existingVideoData = await db.videoData.findFirst({
        where: {
          chapterId: params.chapterId,
        },
      });
      const extractFileNameFromUrl = (url: string): string | null => {
        const parts = url.split("/");
        const fileName = parts[parts.length - 1];
        return fileName || null;
      };

      const url: string = values.videoUrl;
      const fileName = extractFileNameFromUrl(url);
      //TODO : Change to bucket or upload thing
      if (existingVideoData) {
        await db.videoData.delete({
          where: {
            id: existingVideoData.id,
          },
        });
      }
      // const asset = await Video.Assets.create({
      //   input: values.videoUrl,
      //   playback_policy: "public",
      //   test: false,
      // });

      // TODO : add to table videoData
      await db.videoData.create({
        data: {
          chapterId: params.chapterId,
          videoTitle: fileName!,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
