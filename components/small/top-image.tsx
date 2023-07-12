'use client';

import {m} from 'framer-motion';
import Image from 'next/image';

type Props = {
  src: 'menu' | 'prasmanan';
};

export default function TopImage({src}: Props) {
  const imageAspectRatio =
    src === 'menu'
      ? 'pt-[calc((287/430)*100%)] lg:pt-[calc((509/879)*100%)] xl:col-span-5/21 '
      : 'pt-[calc((251/430)*100%)] lg:pt[calc((463/683)*100%)] xl:col-span-7/-7 ';

  return (
    <div className='grid grid-cols-[repeat(24,1fr)] lg:px-0 mb-6 lg:mb-10 overflow-hidden'>
      <m.div
        initial={{scale: 1.1, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{type: 'spring', duration: 0.7, bounce: 0.5}}
        className={imageAspectRatio + 'col-span-full lg:col-span-3/23 relative'}
        aria-hidden='true'
      >
        <Image
          draggable='false'
          className='absolute inset-0 lg:hidden'
          src={`/assets/decoration/mobile ${src} page top img.png`}
          alt=''
          fill={true}
          sizes='(max-width: 1024px) 1024px'
        />

        <Image
          draggable='false'
          className='absolute inset-0 hidden lg:block'
          src={`/assets/decoration/desktop ${src} page top img.png`}
          alt=''
          fill={true}
          sizes='(min-width: 1024px) 1784px'
        />
      </m.div>
    </div>
  );
}
