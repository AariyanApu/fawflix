import BanglaMovieList from '@/components/BanglaMovieList';
import EnglishMovieList from '@/components/EnglishMovieList';
import HindiMovieList from '@/components/HindiMovieList';
import HotList from '@/components/HotList';
import Slide from '@/components/Slide';
import WebSeriesList from '@/components/WebSeriesList';

const Home = () => {
  return (
    <section className="sm:px-16 px-3">
      <Slide />
      <HotList />
      <WebSeriesList />
      <BanglaMovieList />
      <EnglishMovieList />
      <HindiMovieList />
    </section>
  );
};

export default Home;
