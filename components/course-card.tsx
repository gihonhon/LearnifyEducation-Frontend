import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen, Dot } from "lucide-react";
import { CourseProgress } from "./course-progress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  progress: number | null;
  subject: string;
  kelas: string;
  owner: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  progress,
  subject,
  kelas,
  owner,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="objet-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">by {owner}</p>
          <div className="flex items-center space-x-1">
            <p className="text-xs text-muted-foreground">{subject}</p>
            <Dot />
            <p className="text-xs text-muted-foreground">{kelas}</p>
          </div>

          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span>{chaptersLength} Bab</span>
            </div>
          </div>
          {progress !== null ? (
            <div>
              <CourseProgress
                size="sm"
                value={progress}
                variant={progress === 100 ? "success" : "default"}
              />
            </div>
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              Kamu belum assign kursus ini
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
