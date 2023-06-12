import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';

export default function MovieList() {
  return (
    <div className="mt-5 flex flex-row flex-wrap justify-between">
      {movePoster.map((movie) => (
        <MovieCard key={movie.imageLink} movie={movie} />
      ))}
    </div>
  );
}
