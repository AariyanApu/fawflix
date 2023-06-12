'use client';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';
import { slideImages } from '../../utils/data';

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
        delay: 2500,
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
              width={1400}
              height={500}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Feed;
