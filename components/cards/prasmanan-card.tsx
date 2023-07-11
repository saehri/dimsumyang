'use client';

import {m} from 'framer-motion';
import GofoodIcon from '../icons/gofood-icon';
import GrabFoodIcon from '../icons/grabfood-icon';
import ShopeeFoodIcon from '../icons/shopeefood-icon';

const animation = {
  parent: {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.1}},
  },
  children: {hidden: {y: 50, opacity: 0}, show: {y: 0, opacity: 1}},
};

export default function PrasmananCards() {
  return (
    <m.div
      variants={animation.parent}
      initial='hidden'
      whileInView='show'
      className='px-4 lg:grid lg:grid-cols-[repeat(24,1fr)] mb-10'
    >
      <div className='flex flex-col gap-4 lg:col-span-3/23 xl:col-span-5/21'>
        <PrasmananCard />
        <PrasmananCard />
        <PrasmananCard />
        <PrasmananCard />
        <PrasmananCard />
        <PrasmananCard />
      </div>
    </m.div>
  );
}

function PrasmananCard() {
  return (
    <m.article
      variants={animation.children}
      className='bg-white shadow-sm rounded-[20px] p-4 pr-6 lg:py-6 text-[.8rem] lg:text-sm md:col-span-full'
    >
      <h2 className='ml-[1.7em] lg:ml-[1.1em] lg:mb-7 text-base lg:text-2xl text-slate-950 font-calistoga'>
        This is Card Name
      </h2>

      <PrasmananCardGrid>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='w-[18px] h-[18px] lg:w-6 lg:h-6'
          focusable='false'
          viewBox='0 0 24 24'
        >
          <path d='M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'></path>
        </svg>

        <address className='font-outfit not-italic lg:text-[15px]'>
          <span className='sr-only'>Alamat:</span>
          Lorem ipsum, dolor sit amet.
        </address>
      </PrasmananCardGrid>

      <PrasmananCardGrid>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[18px] h-[18px] lg:w-6 lg:h-6'
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 24 24'
        >
          <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
          <path d='M13 7h-2v6h6v-2h-4z'></path>
        </svg>

        <div className='flex flex-col gap-4 md:gap-10 md:flex-row md:justify-between lg:justify-normal lg:gap-[10%]'>
          <OpenTime />

          <PrasmananLinks />
        </div>
      </PrasmananCardGrid>
    </m.article>
  );
}

function PrasmananCardButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <m.a
      href={href}
      target='_blank'
      className='w-[104px] h-[31px] lg:w-[112px] lg:h-[35px] py-1 px-4 border border-primary-orange flex gap-2 justify-center rounded-full'
      variants={{
        initial: {background: '#F8EFE8', color: 'rgb(229, 65, 38)'},
        hover: {background: 'rgb(229, 65, 38)', color: 'rgb(248, 239, 232)'},
      }}
      initial='initial'
      whileHover='hover'
      transition={{duration: 0.1}}
    >
      {children}
    </m.a>
  );
}

function PrasmananCardGrid({children}: {children: React.ReactNode}) {
  return (
    <div className='mt-3 lg:mt-4 grid gap-2 lg:gap-4 grid-cols-[18px,1fr] text-slate-900'>
      {children}
    </div>
  );
}

function OpenTime() {
  return (
    <div className='flex gap-14 shrink-0'>
      <p className='text-left flex flex-col'>
        <span className='sr-only'>
          Prasmanan ini buka dari hari senin sampai minggu
        </span>
        <span className='font-calistoga text-sm lg:text-lg' aria-hidden='true'>
          Senin - Minggu
        </span>

        <span className='sr-only'>Dimulai dari jam</span>
        <span className='font-outfit' aria-hidden='true'>
          13.00 - 22.00 WIB
        </span>
      </p>

      <p className='text-left flex flex-col'>
        <span className='sr-only'>Prsamanan ini libur pada hari</span>
        <span className='font-calistoga text-sm lg:text-lg' aria-hidden='true'>
          Libur:
        </span>

        <span className='sr-only'></span>
        <span className='font-outfit' aria-hidden='true'>
          -
        </span>
      </p>
    </div>
  );
}

function PrasmananLinks() {
  return (
    <div className='flex flex-wrap gap-1 lg:flex-1'>
      <ul className='flex flex-wrap gap-1'>
        <li>
          <PrasmananCardButton href=''>
            <GofoodIcon />
          </PrasmananCardButton>
        </li>
        <li>
          <PrasmananCardButton href=''>
            <GrabFoodIcon />
          </PrasmananCardButton>
        </li>
        <li>
          <PrasmananCardButton href=''>
            <ShopeeFoodIcon />
          </PrasmananCardButton>
        </li>
      </ul>

      <a
        href=''
        target='_blank'
        className='w-[104px] h-[31px] lg:w-[112px] lg:h-[35px] lg:ml-auto py-1 px-4 bg-primary-orange text-primary-white border border-primary-orange flex gap-2 justify-center items-center rounded-full'
      >
        <span className='sr-only'>Cari lokasi kami di google map</span>
        <span
          className='font-calistoga text-sm lg:text-base'
          aria-hidden='true'
        >
          Maps
        </span>

        <svg
          viewBox='0, 0, 18, 19'
          className='h-4 w-4 lg:w-5 lg:h-5'
          aria-hidden='true'
          focusable='false'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path
            d='M0.489624 7.86004C0.489624 4.49811 2.73457 1.72086 5.83357 1.06309C9.4938 0.283507 13.1052 2.64661 13.8373 6.30089C14.2277 8.22547 13.8372 10.0039 12.666 11.6118C12.5684 11.7579 12.5928 11.8067 12.6904 11.9041C14.2277 13.4389 15.765 14.9493 17.2779 16.4841C17.5219 16.7278 17.6439 17.0201 17.5463 17.3855C17.3755 18.0189 16.5946 18.2138 16.1066 17.7266C15.4966 17.1175 14.8865 16.5085 14.3009 15.9238C13.3492 14.9737 12.422 14.0479 11.4703 13.0978C11.3727 13.0004 11.2995 12.976 11.1775 13.0735C8.39573 15.1442 4.39383 14.7057 2.12449 12.0746C1.05082 10.8078 0.514026 9.34611 0.489624 7.86004ZM2.17334 7.64079C2.17334 10.418 4.41827 12.6837 7.20005 12.6837C10.0062 12.6837 12.2755 10.4424 12.2755 7.66514C12.2755 4.86353 10.0306 2.62225 7.22447 2.59788C4.4671 2.59788 2.19774 4.86354 2.17334 7.64079Z'
            fill='currentColor'
          ></path>
        </svg>
      </a>
    </div>
  );
}
