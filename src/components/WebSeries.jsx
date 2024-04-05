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

export default function WebSeriesList() {
  const { data, isLoading, isError } = useUser();
  const webSeries = filterPrompts("web-series", data);
  const lastTenMovies = webSeries?.slice(-10)?.reverse();

  return (
    <div className="mt-8 sm:mt-16">
      <Title
        title="Web Series"
        link="/viewmore/web-series"
        linkName="View More"
      />

      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper h-fit w-96 sm:w-[1280px]  "
      >
        {lastTenMovies?.map((movie) => (
          <SwiperSlide
            key={movie.imageLink}
            className="flex items-center justify-between rounded-lg bg-gray-950 text-center text-lg sm:py-4 sm:pl-6 "
          >
            <MovieCard
              movie={movie}
              customStyles="movie_card h-fit sm:w-[380px] w-96 overflow-hidden"
              imageStyles="h-[190px] w-full hover:scale-95 transition duration-500 ease-in-out  rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
