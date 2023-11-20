import { getCourses } from "@/actions/get-course";
import { CoursesList } from "@/components/course-list";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const CourseSearch = async ({ params }: { params: { course: string } }) => {
  const session = await getServerSession(authOptions);
  const courses = await getCourses({
    userId: session?.user.id ?? "",
    title: params.course,
  });
  return (
    <div className="mx-6 mt-4 px-6 w-auto h-auto">
      <h1 className="py-2 my-1">Search &apos;{params.course}&apos;</h1>
      <CoursesList items={courses} />
    </div>
  );
};

export default CourseSearch;
