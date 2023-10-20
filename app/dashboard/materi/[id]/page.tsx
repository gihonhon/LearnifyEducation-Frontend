import React from "react";
import AddVideo from "./addVideo";
import prisma from "@/lib/prisma";

const getVideo = async (id: string) => {
  const res = await prisma.video.findMany({
    where: {
      MateriID: id,
    },
    select: {
      VideoID: true,
      Url_path: true,
      Title_Video: true,
      Short_Desc: true,
    },
  });
  return res;
};

const MateriIdPage = async ({ params }: { params: { id: string } }) => {
  const [video] = await Promise.all([getVideo(params.id)]);
  return (
    <div className="py-10 px-10">
      <div>
        <div className="mb-2">
          <AddVideo id={params.id} />
        </div>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Video Title</th>
              <th>Short Desc</th>
              <th>Url Video</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {video.map((item, index) => (
              <tr key={item.VideoID}>
                <td>{index + 1}</td>
                <td>{item.Title_Video}</td>
                <td className="break-words max-w-[200px]">{item.Short_Desc}</td>
                <td className="break-words max-w-[200px]">
                  {encodeURI(item.Url_path)}
                </td>
                <td className="flex space-x-1">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MateriIdPage;
