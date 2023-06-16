import BanglaMovieList from '@/component/BanglaMovieList';
import EnglishMovieList from '@/component/EnglishMovieList';
import HotList from '@/component/HotList';
import Slide from '@/component/Slide';
import WebSeriesList from '@/component/WebSeriesList';

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
