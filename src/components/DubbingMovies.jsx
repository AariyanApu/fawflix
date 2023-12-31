'use client';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import useUser from '@/utils/GetDataApi';
import { filterPrompts } from '@/utils/data';
import MovieCard from './MovieCard';
import Title from './Title';

export default function DubbingMovieList() {
  const { data, isLoading, isError } = useUser();
  const movies = filterPrompts('Dubbing', data);

  const lastTenMovies = movies?.slice(-10).reverse();

  return (
    <div className='sm:mt-16 mt-8 '>
      <Title
        title='Dubbing Movies'
        link='/viewmore/dubbing'
        linkName='View More'
      />
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className='mySwiper sm:w-[1280px] w-96 h-fit  '
      >
        {lastTenMovies?.map((movie) => (
          <SwiperSlide key={movie.imageLink} className='movie_card_portrait'>
            <MovieCard
              movie={movie}
              customStyles='movie_card h-[350px] w-[230px] mx-auto'
              imageStyles='portrait_img  '
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
