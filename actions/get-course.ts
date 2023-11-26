import { Course, Kelas, Subject, User } from "@prisma/client";

import { getProgress } from "./get-progress";

import { db } from "@/lib/db";

type CourseWithProgressWithSubject = Course & {
  subjects: Subject | null;
  kelas: Kelas | null;
  users: User | null;
  chapters: {
    id: string;
  }[];
  progress: number | null;
};

type GetCourses = {
  userId: string;
  title?: string;
  subjectId?: string;
  kelasId?: string;
};

export const getCourses = async ({
  userId,
  title,
  subjectId,
  kelasId,
}: GetCourses): Promise<CourseWithProgressWithSubject[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
          mode: "insensitive",
        },
        subjectId,
        kelasId,
      },
      include: {
        subjects: true,
        kelas: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        assigns: {
          where: {
            userId,
          },
        },
        users: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const coursesWithProgress: CourseWithProgressWithSubject[] =
      await Promise.all(
        courses.map(async (course) => {
          if (course.assigns.length === 0) {
            return {
              ...course,
              progress: null,
            };
          }
          const progressPercentage = await getProgress(userId, course.id);
          return {
            ...course,
            progress: progressPercentage,
          };
        })
      );

    return coursesWithProgress;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
};
