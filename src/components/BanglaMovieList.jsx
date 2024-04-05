"use client";

import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import useUser from "@/utils/GetDataApi";
import { filterPrompts } from "@/utils/data";
import MovieCard from "./MovieCard";
import Title from "./Title";

export default function BanglaMovieList() {
  const { data, isLoading, isError } = useUser();
  const movies = filterPrompts("Bengali", data);

  const lastTenMovies = movies?.slice(-10)?.reverse();

  return (
    <div className="mt-8 sm:mt-16">
      <Title
        title="Bangla Movies"
        link="/viewmore/bengali"
        linkName="View More"
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
        className="mySwiper h-fit w-96 sm:w-[1280px]   "
      >
        {lastTenMovies?.map((movie) => (
          <SwiperSlide key={movie.imageLink} className=" movie_card_portrait">
            <MovieCard
              movie={movie}
              customStyles="movie_card h-[350px] w-[230px]  mx-auto"
              imageStyles="portrait_img "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
