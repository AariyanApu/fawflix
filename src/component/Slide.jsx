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
    <div className="hidden md:block">
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
        className="mySwiper w-[1280px] h-[500px] mt-2 "
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-center text-lg bg-gray-900 flex justify-center items-center rounded-lg"
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
