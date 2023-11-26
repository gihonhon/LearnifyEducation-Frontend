"use client";
import { Kelas } from "@prisma/client";
import { KelasItem } from "./kelas-item";

interface KelasProps {
  items: Kelas[];
}

export const KelasFil = ({ items }: KelasProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <KelasItem key={item.id} label={item.name} value={item.id} />
      ))}
    </div>
  );
};
