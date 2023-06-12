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
        className="search_input peer"
      />
    </form>
  );
}
