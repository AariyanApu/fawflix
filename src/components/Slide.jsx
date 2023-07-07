'use client';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slide = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, isError } = useSWR('/api/banner', fetcher);

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
        className="mySwiper sm:w-[1280px] sm:h-[500px] w-[340px] h-40 sm:my-2 "
      >
        {data?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-center text-lg bg-gray-900 flex justify-center items-center rounded-lg overflow-hidden relative z-10 shadow-l"
          >
            <Link href={slide.movieLink}>
              <LazyLoadImage
                className="block  h-[500px] object-cover rounded-lg w-full"
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
