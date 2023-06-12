import Feed from '@/component/Feed';
import MovieList from '@/component/MovieList';

const Home = () => {
  return (
    <section className="flex  flex-col">
      <Feed />
      <MovieList />
    </section>
  );
};

export default Home;
