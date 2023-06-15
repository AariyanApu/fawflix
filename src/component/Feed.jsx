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
        className="mySwiper "
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.movieLink}>
              <Image
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

export default Feed;
