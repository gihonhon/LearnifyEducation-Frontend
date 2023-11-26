"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, KeyboardEvent } from "react";

export const SearchInput = () => {
  const router = useRouter();
  const [course, setCourse] = useState("");

  const handleSearch = async () => {
    router.push(`/search/${course}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-purple-600" />
      <Input
        type="search"
        className="w-full lg:w-[500px] md:w-[300px] pl-9 border-2 border-purple-100 rounded-xl bg-purple-50 focus-visible:ring-purple-200"
        placeholder="Search for course..."
        value={course}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCourse(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
