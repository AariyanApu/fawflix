import BanglaMovieList from '@/components/BanglaMovieList';
import EnglishMovieList from '@/components/EnglishMovieList';
import HotList from '@/components/HotList';
import Slide from '@/components/Slide';
import WebSeriesList from '@/components/WebSeriesList';

const Home = () => {
  return (
    <section className="sm:px-16 px-6">
      <Slide />
      <HotList />
      <WebSeriesList />
      <BanglaMovieList />
      <EnglishMovieList />
    </section>
  );
};

export default Home;
