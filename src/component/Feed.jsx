'use client';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slideImages } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

const Feed = () => {
  return (
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
      className="mySwiper"
    >
      {slideImages.map((slide, index) => (
        <SwiperSlide key={index}>
          <Link href={slide.movieLink}>
            <Image
              src={slide.imageLink}
              alt="Slide-image"
              width={1300}
              height={500}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Feed;
