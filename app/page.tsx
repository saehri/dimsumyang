'use client';

import Image from 'next/image';
import FadingSlider from '@/components/sliders/fading-slider';
import InstagramSlider from '@/components/sliders/instagram-slider';
import TestiSlider from '@/components/sliders/testi-slider';
import Link from 'next/link';
import {m} from 'framer-motion';

export default function Home() {
  return (
    <main className='bg-primary-white min-h-screen bg-deco-bottom lg:bg-none bg-contain bg-no-repeat bg-bottom'>
      <HeroSection />
      <HeroImageDecoration />
      <InstagramAndTestimonial />
      <Footer />
    </main>
  );
}

/* 
  FOOTER
*/
function Footer() {
  return (
    <footer className='hidden lg:grid grid-cols-[repeat(24,1fr)] mt-24 bg-primary-orange pt-8 pb-16'>
      <div className='col-span-4/22 grid grid-cols-[repeat(12,1fr)]'>
        <div className='col-span-1/3'>
          <div className='pt-[100%] relative'>
            <div className='absolute inset-0'>
              <Image
                src='/assets/decoration/footer%20image%20left.png'
                fill={true}
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='col-span-3/-1 grid grid-cols-[repeat(12,1fr)] pl-8 grid-rows-4 gap-y-4'>
          <div className='col-span-1/5 relative pt-[calc((49/264)*100%)]'>
            <div className='absolute inset-0 bg-pink-50-300'>
              <Image
                src='/assets/decoration/footer%20image%20top.png'
                fill={true}
                alt=''
              />
            </div>
          </div>

          <div className='col-span-1/8 bg-lime-300 flex items-center gap-4 font-calistoga text-xl'>
            <span>Hubungi Kami:</span>

            <m.a
              href=''
              className='block py-2 px-4 rounded-full bg-primary-orange border text-primary-white border-primary-white'
              whileHover={{
                backgroundColor: 'rgb(248, 239, 232)',
                color: 'rgb(229, 65, 38)',
              }}
            >
              085720930973
            </m.a>
          </div>

          <div className='col-span-full bg-primary-white h-[1.5px] w-full self-center'></div>

          <div className='col-span-full bg-lime-300'>
            This is the second image
          </div>
        </div>
      </div>
    </footer>
  );
}

/* 
  HOMEPAGE INSTAGRAM AND TESTIMONIAL
*/
function InstagramAndTestimonial() {
  return (
    <section className='grid grid-cols-[repeat(24,1fr)] px-5 lg:px-0 mt-10'>
      <div className='col-span-full flex flex-col gap-8 lg:gap-0 lg:col-span-4/22 lg:grid lg:grid-cols-[repeat(12,1fr)]'>
        <div className='lg:col-span-1/6 flex flex-col gap-2 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Meet on Instagram
          </h2>
          <InstagramSlider />
        </div>

        <div className='lg:col-span-6/-1 flex flex-col gap-2 lg:pl-8 lg:gap-8'>
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
    <section className='bg-primary-yellow lg:bg-primary-white pt-28 pb-4 lg:pt-48 overflow-hidden grid grid-cols-[repeat(12,1fr)] px-4 bg-deco-top-yellow bg-contain bg-no-repeat bg-top lg:bg-none'>
      <div style={{gridColumn: '3/11'}}>
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
    <section className='pt-[calc((698/890)*100%)] lg:hidden bg-primary-yellow relative after:w-full after:h-1/2 after:absolute after:bottom-0 after:left-0 after:bg-primary-white after:z-[1]'>
      <div className='absolute inset-0 z-10'>
        <Image
          priority
          src='/assets/images/mobile%20hero%20image.png'
          alt=''
          fill={true}
        />
      </div>
    </section>
  );
}
