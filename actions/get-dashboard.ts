import { db } from "@/lib/db";
import { Subject, Chapter, Course, Kelas, User } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressWithCategory = Course & {
  subjects: Subject;
  chapters: Chapter[];
  progress: number | null;
  kelas: Kelas | null;
  users: User | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

export const getDashboardCourses = async (
  userId: string
): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await db.assign.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            subjects: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
            kelas: true,
            users: true,
          },
        },
      },
    });

    const courses = purchasedCourses.map(
      (item) => item.course
    ) as CourseWithProgressWithCategory[];

    for (let course of courses) {
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }

    const completedCourses = courses.filter(
      (course) => course.progress === 100
    );
    const coursesInProgress = courses.filter(
      (course) => (course.progress ?? 0) < 100
    );

    return {
      completedCourses,
      coursesInProgress,
    };
  } catch (error) {
    console.log("[GET_DASHBOARD_COURSE]", error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
};
