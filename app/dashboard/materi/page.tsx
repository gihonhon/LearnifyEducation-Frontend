import prisma from "@/lib/prisma";
import AddMateri from "./addMateri";
import Link from "next/link";
import EditMateri from "./editMateri";

const getMateri = async () => {
  const res = await prisma.materi.findMany({
    select: {
      MateriID: true,
      Materi_Title: true,
      Kelas: true,
      Subject: true,
    },
  });
  return res;
};

const getKelas = async () => {
  const res = await prisma.kelas.findMany();
  return res;
};

const MateriPage = async () => {
  const [materi, kelas] = await Promise.all([getMateri(), getKelas()]);
  return (
    <div className="py-10 px-10">
      <div>
        <div className="mb-2">
          <AddMateri kelas={kelas} />
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Materi Title</th>
              <th>Kelas</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {materi.map((item, index) => (
              <tr key={item.MateriID}>
                <td>{index + 1}</td>
                <td>{item.Materi_Title}</td>
                <td>Kelas {item.Kelas.Kelas}</td>
                <td>{item.Subject.Subject}</td>
                <td className="flex space-x-1">
                  <Link
                    href={`/dashboard/materi/${item.MateriID}`}
                    className="btn btn-primary"
                  >
                    Video List
                  </Link>
                  <EditMateri kelas={kelas} materi={item} />
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

export default MateriPage;
