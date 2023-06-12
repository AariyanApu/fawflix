import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function MovieList() {
  return (
    <div className="mt-12 ">
      <Title
        title="Hot Cake"
        link="http://localhost:3000"
        linkName="View More"
      />
      <div className=" flex flex-row flex-wrap sm:justify-between items-center justify-center ">
        {movePoster.map((movie) => (
          <MovieCard key={movie.imageLink} movie={movie} />
        ))}
      </div>
    </div>
  );
}
