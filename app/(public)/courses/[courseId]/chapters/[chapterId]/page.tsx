import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";
import { CourseEnrollButton } from "./_components/course-enroll";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/priview";
import { File } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }

  const {
    chapter,
    course,
    videoData,
    attachments,
    nextChapter,
    userProgress,
    assigned,
  } = await getChapter({
    userId: session.user.id,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  const isLocked = !assigned;
  const completeOnEnd = !!assigned && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter" />
      )}
      {!assigned && (
        <Banner
          variant="warning"
          label="You need purchase this course to watch this chapter"
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            videoUrl={chapter.videoUrl!}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            playbackId={videoData?.id!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div className="flex flex-col p-4 md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
          {assigned ? (
            <CourseProgressButton
              chapterId={params.chapterId}
              courseId={params.courseId}
              nextChapterId={nextChapter?.id}
              isCompleted={!!userProgress?.isCompleted}
            />
          ) : (
            <CourseEnrollButton
              userId={session.user.id}
              courseId={params.courseId}
            />
          )}
        </div>
        <Separator />
        <div>
          <Preview value={chapter.description!} />
        </div>
        {!!attachments.length && (
          <>
            <Separator />
            <div className="p-4">
              {attachments.map((attachment) => (
                <a
                  href={attachment.url}
                  target="_blank"
                  key={attachment.id}
                  className="flex items-center 
                    p-3 w-full bg-sky-200 text-sky-700 rounded-md hover:underline"
                >
                  <File />
                  <p className="line-clamp-1">{attachment.name}</p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterIdPage;
