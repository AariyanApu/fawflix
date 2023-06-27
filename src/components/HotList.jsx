import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function HotList() {
  const lastTenMovies = movePoster.slice(-10);

  return (
    <div className="sm:mt-16 mt-8 ">
      <Title title="Hot Cake" link="/viewmore/hotlist" linkName="View More" />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4 ">
        {lastTenMovies?.map((movie) => (
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
