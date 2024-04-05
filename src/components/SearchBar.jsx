"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [searchText, setSearchText] = useState({ title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchText.title}`);
    setSearchText({ title: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a Movie or TV show..."
        value={searchText.title}
        onChange={(e) =>
          setSearchText({ ...searchText, title: e.target.value })
        }
        required
        className="focus:border-red peer mt-6 h-8 w-36 rounded-md border border-red-600 bg-gray-900 py-2.5 pl-1 pr-2.5 text-sm font-medium text-red-600 shadow-lg placeholder:text-red-600 focus:outline-none focus:ring-red-600 sm:h-12 sm:w-96 sm:pl-5 sm:pr-12"
      />
    </form>
  );
}
