"use client";

import MovieCard from "@/components/MovieCard";
import useUser from "@/utils/GetDataApi";
import { filterPrompts } from "@/utils/data";

export default function SearchResultFeed({ params }) {
  const { data, isLoading, isError } = useUser();
  const id = params.id;
  const dataFromUrl = filterPrompts(id, data);
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row sm:justify-between sm:px-4">
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
