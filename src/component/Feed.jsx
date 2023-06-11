'use client';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Feed = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/assets/images/banner1.jpg" className="h-12" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/banner2.jpg" className="h-12" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Feed;
