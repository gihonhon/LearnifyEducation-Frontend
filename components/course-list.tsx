import { Course, Kelas, Subject, User } from "@prisma/client";
import { CourseCard } from "./course-card";

type Courses = Course & {
  subjects: Subject | null;
  chapters: { id: string }[];
  progress: number | null;
  kelas: Kelas | null;
  users: User | null;
};

interface CoursesListProps {
  items: Courses[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            progress={item.progress}
            subject={item?.subjects?.name!}
            kelas={item.kelas?.name!}
            owner={item.users?.name!}
          />
        ))}
      </div>
    </div>
  );
};
