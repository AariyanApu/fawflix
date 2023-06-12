import Feed from '@/component/Feed';
import MovieList from '@/component/MovieList';

const Home = () => {
  return (
    <section className="sm:px-16 px-6">
      <Feed />
      <MovieList />
    </section>
  );
};

export default Home;
