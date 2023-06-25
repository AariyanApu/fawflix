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
    <div className="sm:mt-16 mt-8">
      <Title
        title="Bangla Movie"
        link="http://localhost:3000/viewmore/bangla-movie"
        linkName="View More"
      />
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper sm:w-[1280px] w-96 h-fit   "
      >
        {movePoster.map((movie) => (
          <SwiperSlide key={movie.imageLink} className=" movie_card_portrait">
            <MovieCard
              movie={movie}
              customStyles="movie_card h-fit sm:w-[275px] w-72 mx-auto"
              imageStyles="portrait_img "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
