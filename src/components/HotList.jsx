import { notFound } from 'next/navigation';
import MovieCard from './MovieCard';
import Title from './Title';

export default async function HotList() {
  const data = await getData();

  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title="Hot Cake" link="/viewmore/hotlist" linkName="View More" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {data
          .slice(-10)
          .reverse()
          .map((movie) => (
            <MovieCard
              key={movie.imageLink}
              movie={movie}
              customStyles="movie_card w-[230px] h-[350px]  my-2"
              imageStyles=" h-[330px] w-[210px] hover:scale-105 transition duration-500 ease-in-out p-1 rounded-xl "
            />
          ))}
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch('https://fawflix.vercel.app/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data.slice(-10);
}
