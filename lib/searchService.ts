import { Materi } from "@prisma/client";
import prisma from "./prisma";

export const searchMateri = async (query: string): Promise<Materi[]> => {
  const materis = await prisma.materi.findMany({
    where: {
      OR: [{ Materi_Title: { contains: query, mode: "insensitive" } }],
    },
  });

  return materis;
};
