'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();

  const [searchText, setSearchText] = useState({ title: ' ' });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchText.title}`);
    setSearchText({ title: '' });
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
        className="sm:w-96 sm:h-12 w-36 h-8 mt-6 rounded-md border text-red-600 border-red-600 placeholder:text-red-600 bg-gray-900 py-2.5 pl-1 pr-2.5 sm:pl-5 sm:pr-12 text-sm shadow-lg font-medium focus:border-red focus:outline-none focus:ring-red-600 peer"
      />
    </form>
  );
}
