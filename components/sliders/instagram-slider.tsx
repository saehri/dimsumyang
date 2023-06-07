'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

const images: string[] | [] = [];

export default function InstagramContentSlider() {
  return (
    <div className='pt-[100%] relative'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        loop={true}
        autoplay={{delay: 3000}}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        {images.length ? (
          images.map((img, i) => (
            <SwiperSlide
              key={`istg-sldr-${i}`}
              className='bg-primary-yellow relative'
            >
              <img src={img} className='w-full h-full object-cover' />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className='bg-primary-yellow relative flex flex-col gap-4 items-center justify-center'>
            <h3>404</h3>
            <span>Failed to get content from server</span>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
