import { getCourses } from "@/actions/get-course";
import { CoursesList } from "../_components/course-list-public";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Footer from "@/components/footer";

const CourseSearch = async ({ params }: { params: { course: string } }) => {
  const session = await getServerSession(authOptions);
  const courses = await getCourses({
    userId: session?.user.id ?? "",
    title: params.course,
  });
  return (
    <>
      <div className="mx-6 mt-4 mb-8 py-2 px-6 w-auto h-auto">
        <CoursesList title={params.course} />
      </div>
    </>
  );
};

export default CourseSearch;
