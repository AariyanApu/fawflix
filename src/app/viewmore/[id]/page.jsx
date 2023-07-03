'use client';
import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';
import { useUser } from '@/utils/GetDataApi';

export default async function ViewMore({ params }) {
  const id = params.id;
  const { data, isLoading, isError } = useUser();
  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title={`All ${id}`} link="http://localhost:3000" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {data?.reverse().map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles=" movie_card w-[230px] h-[350px]  my-2"
            imageStyles=" h-[330px] w-[210px] image_hover "
          />
        ))}
      </div>
    </div>
  );
}
