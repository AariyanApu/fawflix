'use client';

import MovieCard from '@/components/MovieCard';
import { useUser } from '@/utils/GetDataApi';
import { useState } from 'react';

export default function SearchResultFeed({ params }) {
  const { data, isLoading, isError } = useUser();
  const id = params.id;

  const [searchText, setSearchText] = useState(' ');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, 'i'); // 'i' flag for case-insensitive search
    return data?.filter(
      (item) =>
        regex.test(item.title) ||
        regex.test(item.desc) ||
        regex.test(item.genre),
    );
  };

  const dataFromUrl = filterPrompts(id);

  return (
    <div className="flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 gap-5">
      {dataFromUrl?.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          customStyles=" movie_card w-[230px] h-[350px]  my-2"
          imageStyles=" h-[330px] w-[210px] image_hover "
        />
      ))}
    </div>
  );
}
