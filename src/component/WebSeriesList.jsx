'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { movePoster } from '@/utils/data';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import Title from './Title';

export default function WebSeriesList() {
  return (
    <div className="mt-16 mb-16">
      <Title
        title="Web Series"
        link="http://localhost:3000"
        linkName="View More"
      />

      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper w-[1280px] h-fit  "
      >
        {movePoster.map((movie) => (
          <SwiperSlide
            key={movie.imageLink}
            className="text-center text-lg bg-gray-950 flex justify-center items-center rounded-lg"
          >
            <MovieCard
              movie={movie}
              customStyles="movie_card h-fit w-[400px] mx-1"
              imageStyles="h-[190px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
