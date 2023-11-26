import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen, Dot } from "lucide-react";

import { Separator } from "@/components/ui/separator";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  progress: number | null;
  subject: string;
  kelas: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  progress,
  subject,
  kelas,
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
        </div>
      </div>
    </Link>
  );
};
