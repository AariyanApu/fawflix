'use client';

import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';
import { notFound, useParams } from 'next/navigation';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function ViewMore() {
  const { id } = useParams();
  const data = await getData();

  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title={`All ${id}`} link="http://localhost:3000" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {data.map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles="movie_card md:w-[300px] h-fit w-72 my-2"
            imageStyles="h-96 w-[290px] hover:scale-105 transition duration-500 ease-in-out p-2 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
