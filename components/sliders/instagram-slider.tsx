'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

const images = [
  'https://images.unsplash.com/photo-1685640205918-66d30caf640d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/photo-1685168641013-9d7c1473d31f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/photo-1685472065771-f57d15b4c585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
];

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
              <img src={img} />
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
