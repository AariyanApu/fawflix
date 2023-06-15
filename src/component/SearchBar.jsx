'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <form className="">
      <input
        type="text"
        placeholder="Search for a movie or TV show..."
        value={searchText}
        onChange={handleSearchChange}
        required
        className="sm:w-96 sm:h-12 w-36 h-8 mt-6 rounded-md border  border-red-600 placeholder:text-red-600 bg-gray-900 py-2.5  pl-5 pr-12 text-sm shadow-lg font-medium focus:border-red focus:outline-none focus:ring-red-600 peer"
      />
    </form>
  );
}
