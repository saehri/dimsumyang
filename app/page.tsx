'use client';

import Image from 'next/image';
import {m} from 'framer-motion';

import FadingSlider from '@/components/sliders/fading-slider';
import InstagramSlider from '@/components/sliders/instagram-slider';
import TestiSlider from '@/components/sliders/testi-slider';
import CommonLayout from '@/components/layout/common-layout';

export default function Home() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen lg:bg-none'>
        <HeroSection />
        <HeroImageDecoration />

        <div className='pt-10 pb-24 relative bg-pink bg-deco-bottom lg:bg-deco-bottom-big bg-contain bg-no-repeat bg-bottom'>
          <div className='absolute left-0 top-[-40px] w-full h-10 bg-pink z-[5]'></div>

          <InstagramAndTestimonial />
        </div>
      </main>
    </CommonLayout>
  );
}

/* 
  HOMEPAGE INSTAGRAM AND TESTIMONIAL
*/
function InstagramAndTestimonial() {
  return (
    <section className='grid grid-cols-[repeat(24,1fr)] px-5 lg:px-0'>
      <div className='col-span-full flex flex-col gap-8 lg:gap-0 lg:col-span-3/23 xl:col-span-5/21 lg:grid lg:grid-cols-[repeat(12,1fr)]'>
        <div className='lg:col-span-1/6 flex flex-col gap-2 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Meet on Instagram
          </h2>
          <InstagramSlider />
        </div>

        <div className='md:col-span-6/-1 flex flex-col gap-2 lg:pl-8 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Testimoni
          </h2>
          <TestiSlider />
        </div>
      </div>
    </section>
  );
}

/* 
  HERO SECTION
*/
function HeroSection() {
  return (
    <section className='bg-primary-yellow pt-28 pb-4 lg:pt-48 overflow-hidden grid grid-cols-[repeat(24,1fr)] px-4 bg-deco-top-yellow lg:bg-deco-top-yellow-big bg-contain bg-no-repeat bg-top lg:pb-8'>
      <div className='bg-purpl-300 col-span-full lg:col-span-6/20'>
        <FadingSlider />
      </div>
    </section>
  );
}

/* 
  HERO IMAGE DECORATION
*/
function HeroImageDecoration() {
  return (
    <section className='pt-[calc((698/890)*100%)] lg:pt-[calc((703/1449)*100%)] bg-primary-yellow relative'>
      <m.div
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {delay: 0.4}}}
        className='absolute inset-0 z-10'
      >
        <Image
          className='lg:hidden'
          priority
          src='/assets/images/mobile hero image.png'
          sizes='(max-width: 1024px) 100vw'
          alt=''
          fill={true}
        />

        <Image
          className='hidden lg:block'
          priority
          src='/assets/images/desktop hero image.png'
          sizes='(max-width: 1024px) 100vw'
          alt=''
          fill={true}
        />
      </m.div>
    </section>
  );
}
