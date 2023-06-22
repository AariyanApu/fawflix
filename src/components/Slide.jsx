'use client';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slideImages } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

const Slide = () => {
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
        className="mySwiper sm:w-[1280px] sm:h-[500px] w-96 h-48 sm:my-2 "
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-center text-lg bg-gray-900 flex justify-center items-center rounded-lg overflow-hidden relative z-10 shadow-l"
          >
            <Link href={slide.movieLink}>
              <Image
                className="block w-full h-auto object-cover rounded-lg"
                src={slide.imageLink}
                alt="Slide-image"
                width={1300}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8Vl1dAAAGuQJeC6VyHgAAAABJRU5ErkJggg=="
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;