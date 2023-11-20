import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import { redirect } from "next/navigation";
import { Actions } from "./_components/actions";
import { AttachmentForm } from "./_components/attachment-form";
import { SubjectForm } from "./_components/subject-form";
import { ChaptersForm } from "./_components/chapters-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { TitleForm } from "./_components/title-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { KelasForm } from "./_components/kelas-form";

const CourseId = async ({ params }: { params: { courseId: string } }) => {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== "TEACHER") {
    redirect("/");
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId: session.user.id,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
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
  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.subjectId,
    course.kelasId,
    course.chapters.some((chapter) => chapter.isPublished),
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);
  return (
    <>
      {!course.isPublished && (
        <Banner label="Kursus ini tidak dipublikasikan. Itu tidak akan terlihat oleh siswa" />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Pengaturan kursus</h1>
            <span className="text-sm text-slate-700">
              Lengkapi semua bidang {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-2xl">Sesuaikan kursus Anda</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
            <SubjectForm
              initialData={course}
              options={subjects.map((subject) => ({
                label: subject.name,
                value: subject.id,
              }))}
              courseId={course.id}
            />
            <KelasForm
              initialData={course}
              options={kelas.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              courseId={course.id}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-2xl">Bab kursus</h2>
              </div>
              <ChaptersForm initialData={course} courseId={course.id} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={File} />
              <h2 className="text-xl">Lampiran</h2>
            </div>
            <AttachmentForm initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseId;
