"use client";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slide = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, isError } = useSWR("/api/banner", fetcher);
  // this Loading skeleton is for the slider  Banner only
  if (isLoading)
    return (
      <div>
        <div className="mx-auto h-40 w-[340px] animate-pulse break-inside-avoid overflow-hidden rounded-lg border border-red-600 bg-gray-900/75 bg-clip-padding p-2 backdrop-blur-xl  backdrop-filter transition-all duration-500 sm:my-2 sm:h-[500px] sm:w-[1280px]" />
      </div>
    );

  return (
    <div className="">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper h-40 w-[340px] sm:my-2 sm:h-[500px] sm:w-[1280px] "
      >
        {data?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="shadow-l relative z-10 flex items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-center text-lg"
          >
            <Link href={slide.movieLink}>
              {/* Image Come from diffrent api, thats why using LazyLoadImage */}
              <LazyLoadImage
                className="flex h-40 w-full rounded-lg object-cover sm:h-[500px]"
                src={slide.imageLink}
                alt={slide.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
