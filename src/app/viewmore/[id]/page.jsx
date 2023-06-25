'use client';

import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';
import { movePoster } from '@/utils/data';
import { useParams } from 'next/navigation';

export default function ViewMore() {
  const { id } = useParams();

  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title={`All ${id}`} link="http://localhost:3000" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {movePoster.map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles="movie_card md:w-[300px] h-fit w-72 my-2"
            imageStyles="h-96 w-[290px]"
          />
        ))}
      </div>
    </div>
  );
}
