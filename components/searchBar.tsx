"use client";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [materi, setMateri] = useState("");

  const handleSearch = async () => {
    // Perform any search-related actions here
    // For example, you can make an API request using axios

    // After performing the search, navigate to the result page
    router.push(`/search/${materi}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
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
      onChange={(e) => setMateri(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
