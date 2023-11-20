import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    const publishChapters = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });
    const publishedChapterId = publishChapters.map((chapter) => chapter.id);
    const validCompletedChapter = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterId,
        },
        isCompleted: true,
      },
    });
    const progressPercentage =
      (validCompletedChapter / publishedChapterId.length) * 100;
    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
};
