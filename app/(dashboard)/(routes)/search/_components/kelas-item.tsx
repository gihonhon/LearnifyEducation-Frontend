"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface KelasItemProps {
  label: string;
  value?: string;
}

export const KelasItem = ({ label, value }: KelasItemProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubjectId = searchParams.get("subjectId");
  const currentKelasId = searchParams.get("kelasId");
  const currentTitle = searchParams.get("title");
  const isSelected = currentKelasId === value;
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathName,
        query: {
          title: currentTitle,
          subjectId: isSelected ? null : currentSubjectId,
          kelasId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
};
