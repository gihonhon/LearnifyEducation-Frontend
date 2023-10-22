import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaList } from "react-icons/fa";

const getMateris = async (materis: string) => {
  try {
    const res = await prisma.materi.findMany({
      where: {
        Materi_Title: {
          contains: materis,
          mode: "insensitive",
        },
      },
      select: {
        MateriID: true,
        Materi_Title: true,
        Kelas: true,
        Subject: true,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getVideos = async (videos: string) => {
  try {
    const res = await prisma.video.findMany({
      where: {
        Title_Video: {
          contains: videos,
          mode: "insensitive",
        },
      },
      select: {
        VideoID: true,
        Title_Video: true,
        Materi: {
          include: {
            Subject: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const SearchPage = async ({ params }: { params: { materi: string } }) => {
  const paramsInput = params.materi;
  const paramsResult = paramsInput.replace(/%20/g, " ");
  console.log(paramsResult);
  const [materi, video] = await Promise.all([
    getMateris(paramsResult),
    getVideos(paramsResult),
  ]);

  return (
    <div className="flex justify-center my-4 lg:my-20 w-full">
      <div className="flex flex-col w-[70%]">
        <h1 className="text-2xl py-2 my-2">
          Result search for:
          <span className="font-semibold px-2">{paramsResult}</span>
        </h1>
        <div className="flex flex-col border-2 mb-8">
          <h1 className="text-xl mt-4 mb-2 mx-4">Materi({materi?.length})</h1>
          <div className="grid grid-cols-1 mx-4 mb-1 divide-y">
            {materi?.slice(0, 6).map((materi) => (
              <Link
                href={`/materi/${materi.MateriID}`}
                key={materi.MateriID}
                className="flex items-center gap-x-4 my-2 py-2 hover:cursor-pointer"
              >
                <span className="text-5xl">
                  <FaList />
                </span>
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg px-2 mb-1">
                    {materi.Materi_Title}
                  </h3>
                  <div className="mt-1">
                    <span className="px-4 py-2 rounded-full text-sm w-auto bg-[#D9D9D9]">
                      {materi.Subject.Subject}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-2">
          <h1 className="text-xl mt-4 mb-2 mx-4">Video({video?.length})</h1>
          <div className="grid grid-cols-1 mx-4 mb-1 divide-y">
            {video?.slice(0, 6).map((videos) => (
              <Link
                key={videos.VideoID}
                href={`/materi/${videos.Materi.MateriID}`}
                className="flex items-center gap-x-4 my-2 py-2 hover:cursor-pointer"
              >
                <span className="text-5xl">
                  <FaList />
                </span>
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg px-2 mb-1">
                    {videos.Title_Video}
                  </h3>
                  <div className="mt-1">
                    <span className="px-4 py-2 rounded-full text-sm w-auto bg-[#D9D9D9]">
                      {videos.Materi.Subject.Subject}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
