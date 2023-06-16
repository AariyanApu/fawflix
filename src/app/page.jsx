import Feed from '@/component/Feed';
import MovieList from '@/component/MovieList';
import WebSeriesList from '@/component/WebSeriesList';

const Home = () => {
  return (
    <section className="sm:px-16 px-6">
      <Feed />
      <MovieList />
      <WebSeriesList />
    </section>
  );
};

export default Home;
