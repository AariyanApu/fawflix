'use client';

import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { movePoster } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function BanglaMovieList() {
  return (
    <div className="mt-16 ">
      <Title
        title="Bangla Movie"
        link="http://localhost:3000"
        linkName="View More"
      />
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper w-[1280px] h-fit  "
      >
        {movePoster.map((movie) => (
          <SwiperSlide
            key={movie.imageLink}
            className="text-center text-lg bg-gray-950 flex justify-center items-center rounded-lg"
          >
            <MovieCard
              movie={movie}
              customStyles="movie_card h-fit w-[295px]"
              imageStyles="h-96 w-[290px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
