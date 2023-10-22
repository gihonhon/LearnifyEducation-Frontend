// Ensure you have "next" and "react" types installed in your project
// npm install @types/next @types/react

"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [materi, setMateri] = useState("");

  const handleSearch = async () => {
    router.push(`/search/${materi}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <input
      type="search"
      placeholder="Belajar apa hari ini.."
      className="input input-bordered w-full md:w-auto"
      value={materi}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setMateri(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
