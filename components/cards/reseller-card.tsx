'use client';

import {m} from 'framer-motion';

const animation = {
  parent: {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.1}},
  },
  children: {hidden: {y: 50, opacity: 0}, show: {y: 0, opacity: 1}},
};

export default function ResellerCards() {
  return (
    <m.div
      variants={animation.parent}
      initial='hidden'
      whileInView='show'
      viewport={{once: true}}
      className='px-4 md:grid md:grid-cols-[repeat(24,1fr)]'
    >
      <div className='gap-4 gap-y-6 lg:gap-y-6 lg:gap-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] xl:grid-cols-[repeat(5,minmax(160px,1fr))] col-span-full lg:col-span-3/23 xl:col-span-5/21'>
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
        <ResellerCard />
      </div>
    </m.div>
  );
}

function ResellerCard() {
  return (
    <m.article variants={animation.children}>
      <h3 className='ml-[18px] font-calistoga text-base lg:text-2xl text-slate-950 mb-1'>
        Ibu Anis
      </h3>

      <div className='flex gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='w-4 h-4 shrink-0'
          focusable='false'
          viewBox='0 0 24 24'
        >
          <path d='M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'></path>
        </svg>

        <address className='font-outfit text-slate-950 text-sm lg:text-base not-italic'>
          Lorem ipsum dolor sit amet consectetur.
        </address>
      </div>
    </m.article>
  );
}
