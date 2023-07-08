'use client';
import {
  BanglaMovie,
  BollywoodMovie,
  DubbingMovie,
  HollywoodMovie,
  HotList,
  Slide,
  TollywoodMovie,
  WebSeries,
} from '@/components';

const Home = () => {
  return (
    <section className="sm:px-16 px-3">
      <Slide />
      <HotList />
      <WebSeries />
      <BanglaMovie />
      <BollywoodMovie />
      <HollywoodMovie />
      <TollywoodMovie />
      <DubbingMovie />
    </section>
  );
};

export default Home;
