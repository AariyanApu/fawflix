'use client';

import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slideImages } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function WebSeriesList() {
  return (
    <div className="sm:mt-16 mt-8">
      <Title
        title="Web Series"
        link="http://localhost:3000"
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper sm:w-[1280px] h-fit w-96 "
      >
        {slideImages.map((movie) => (
          <SwiperSlide
            key={movie.imageLink}
            className="text-center text-lg bg-gray-950 flex justify-center items-center rounded-lg"
          >
            <MovieCard
              movie={movie}
              customStyles="movie_card h-fit sm:w-[400px] w-96 sm:mx-1"
              imageStyles="h-[190px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
