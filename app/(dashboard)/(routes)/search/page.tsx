import { getCourses } from "@/actions/get-course";
import { CoursesList } from "@/components/courses-list";
import { SearchInput } from "@/components/search-input";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Subjects } from "./_components/subjects";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { KelasFil } from "./_components/kelas";

interface SearchPageProps {
  searchParams: {
    title: string;
    subjectId: string;
    kelasId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const subjects = await db.subject.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const kelas = await db.kelas.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const courses = await getCourses({
    userId: session.user.id,
    ...searchParams,
  });
  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <KelasFil items={kelas} />
        <Subjects items={subjects} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
