import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function MovieList() {
  return (
    <div className="mt-16 ">
      <Title
        title="Hot Cake"
        link="http://localhost:3000"
        linkName="View More"
      />
      <div className=" flex flex-row flex-wrap sm:justify-between items-center justify-center ">
        {movePoster.map((movie) => (
          <MovieCard
            key={movie.imageLink}
            movie={movie}
            customStyles="movie_card md:w-[300px] h-fit my-2"
            imageStyles="h-96 w-[290px]"
          />
        ))}
      </div>
    </div>
  );
}
