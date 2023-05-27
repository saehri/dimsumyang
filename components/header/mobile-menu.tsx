import Link from 'next/link';
import Image from 'next/image';
import {m} from 'framer-motion';

const menuStyle = 'flex flex-col gap-2 h-xs:gap-4 h-s:gap-8 items-end xs:mb-8';

const animationEasing = [0.32, 0.72, 0, 1];
const imgAnimationVariant = {
  initial: {
    y: '-25%',
    x: -200,
    opacity: 0,
    transition: {
      rotate: {
        delay: 1,
        duration: 10,
        repeat: 'infinity',
        ease: 'linear',
      },
    },
  },
  animate: {
    y: '-25%',
    x: '-33.33333333%',
    rotate: [0, 360],
    opacity: 1,
    transition: {
      duration: 0.05,
      delay: 0.8,
      type: 'spring',
      stiffness: 35,
      ease: animationEasing,
      rotate: {
        delay: 1,
        duration: 10,
        repeat: 'infinity',
        ease: 'linear',
      },
    },
  },
};

const linkAnimationVariant = {
  initial: (index: number) => ({
    x: 200,
    opacity: 0,
    transition: {
      delay: index / 10,
      type: 'spring',
      bounce: 0.2,
    },
  }),
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + index * 0.05,
      type: 'spring',
      bounce: 0.2,
    },
  }),
};

const menuAnimationVariant = {
  initial: {
    left: '100%',
    transition: {
      delay: 1,
    },
  },
  animate: {
    left: 0,
  },
};

export default function MobileMenu({state}: {state: boolean}) {
  const status = state ? 'animate' : 'initial';

  return (
    <m.div
      animate={status}
      initial={false}
      variants={menuAnimationVariant}
      transition={{duration: 0.3}}
      className='fixed z-30 top-0 left-0 pt-28 pr-8 pb-8 h-screen w-screen font-calistoga text-2xl bg-yellow-400 text-slate-950 sm:hidden overflow-hidden'
    >
      <div className={`${menuStyle} mb-2 h-xs:mb-4 h-s:mb-8`}>
        <m.div variants={linkAnimationVariant} custom={1}>
          <Link href='/'>
            <span
              className='text-red-500 text-sm text-right block'
              aria-hidden='true'
            >
              Join
            </span>
            <span>Franchise</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={2}>
          <Link href='/'>
            <span
              className='text-red-500 text-sm text-right block'
              aria-hidden='true'
            >
              Join
            </span>
            <span>Reseller</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={3}>
          <Link href='/'>
            <span>Profile</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={4}>
          <Link href='/'>
            <span>Proposal Franchise</span>
          </Link>
        </m.div>
      </div>

      <div className={menuStyle}>
        <m.div variants={linkAnimationVariant} custom={5}>
          <span className='text-sm text-red-500 text-right'>Order Frozen</span>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={6}>
          <Link href='/'>
            <span>Tokopedia</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={7}>
          <Link href='/'>
            <span>Shopee</span>
          </Link>
        </m.div>
      </div>

      <m.div
        aria-hidden='true'
        className='-translate-x-1/3 -translate-y-1/4 relative z-50'
        variants={imgAnimationVariant}
      >
        <Image
          src='/assets/decoration/nav%20decoration.png'
          alt=''
          width={334}
          height={334}
        />
      </m.div>

      <div
        className='absolute top-0 left-0 w-full aspect-[860/206]'
        aria-hidden='true'
      >
        <Image
          priority
          src='/assets/decoration/mobile top decoration yellow.png'
          fill={true}
          alt=''
        />
      </div>

      <div
        className='absolute bottom-0 left-0 w-full aspect-[860/206]'
        aria-hidden='true'
      >
        <Image
          priority
          src='/assets/decoration/mobile bottom decoration yellow.png'
          fill={true}
          alt=''
        />
      </div>
    </m.div>
  );
}
