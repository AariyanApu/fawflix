import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function HotList() {
  return (
    <div className="sm:mt-16 mt-5 ">
      <Title
        title="Hot Cake"
        link="http://localhost:3000"
        linkName="View More"
      />
      <div className=" flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center ">
        {movePoster.map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles="movie_card md:w-[300px] h-fit w-72 my-2"
            imageStyles="sm:h-96 sm:w-[290px]"
          />
        ))}
      </div>
    </div>
  );
}
