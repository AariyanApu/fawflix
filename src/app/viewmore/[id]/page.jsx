import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';
import { notFound } from 'next/navigation';

async function getData() {
  const res = await fetch('https://fawflix.vercel.app/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function ViewMore({ params }) {
  const data = await getData();
  const { id } = params;

  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title={`All ${id}`} link="http://localhost:3000" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {data?.reverse().map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles="movie_card w-[230px] h-[350px]  my-2"
            imageStyles="h-[330px] w-[210px] hover:scale-105 transition duration-500 ease-in-out p-1 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
