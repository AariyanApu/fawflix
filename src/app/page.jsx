import BanglaMovieList from '@/components/BanglaMovieList';
import BollywoodMovieList from '@/components/BollywoodMovies';
import DubbingMovieList from '@/components/DubbingMovies';
import HollywoodMovieList from '@/components/HollywoodMovies';
import HotList from '@/components/HotList';
import Slide from '@/components/Slide';
import TollywoodMovieList from '@/components/TollywoodMovies';
import WebSeriesList from '@/components/WebSeries';

const Home = () => {
  return (
    <section className="sm:px-16 px-3">
      <Slide />
      <HotList />
      <WebSeriesList />
      <BanglaMovieList />
      <BollywoodMovieList />
      <HollywoodMovieList />
      <TollywoodMovieList />
      <DubbingMovieList />
    </section>
  );
};

export default Home;
