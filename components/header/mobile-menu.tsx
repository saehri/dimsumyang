import Link from 'next/link';
import Image from 'next/image';
import {m} from 'framer-motion';

const menuStyle =
  'flex flex-col gap-2 h-xs:gap-4 h-s:gap-8 items-end xs:mb-8 relative z-10';

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
      delay: index * 0.05,
      type: 'spring',
      bounce: 0.2,
    },
  }),
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
      type: 'spring',
      bounce: 0.2,
      stiffness: 35,
    },
  }),
};

const menuAnimationVariant = {
  initial: {
    left: '100%',
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
  animate: {
    left: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function MobileMenu({
  state,
  setStatus,
}: {
  state: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const status = state ? 'animate' : 'initial';

  return (
    <m.div
      animate={status}
      initial={false}
      variants={menuAnimationVariant}
      className='fixed z-30 top-0 left-0 pt-28 pr-8 pb-8 h-screen w-screen font-calistoga text-2xl bg-primary-yellow text-slate-950 lg:hidden overflow-hidden'
    >
      <div className={`${menuStyle} mb-2 h-xs:mb-4 h-s:mb-8`}>
        <m.div variants={linkAnimationVariant} custom={1}>
          <Link href='/franchise' onClick={() => setStatus(false)}>
            <span>Franchise</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={2}>
          <Link href='/reseller' onClick={() => setStatus(false)}>
            <span>Reseller</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={3}>
          <Link href='/profile' onClick={() => setStatus(false)}>
            <span>Profile</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={4}>
          <Link href='/' onClick={() => setStatus(false)}>
            <span>Proposal Franchise</span>
          </Link>
        </m.div>
      </div>

      <div className={menuStyle}>
        <m.div variants={linkAnimationVariant} custom={5}>
          <span className='text-sm text-primary-orange text-right'>
            Order Frozen
          </span>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={6}>
          <Link
            href='https://www.tokopedia.com/dimsumyang1000?utm_campaign=Shop-19332965-12146490-250722&utm_source=salinlink&utm_medium=share&_branch_match_id=1091541649935691728&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWDyr38zYITMsIL0oCAA4J2qQiAAAA'
            onClick={() => setStatus(false)}
            target='_blank'
          >
            <span>Tokopedia</span>
          </Link>
        </m.div>

        <m.div variants={linkAnimationVariant} custom={7}>
          <Link
            href='https://shopee.co.id/shope.me'
            onClick={() => setStatus(false)}
            target='_blank'
          >
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
          sizes='(max-width: 1024px) 100vw'
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
          sizes='(max-width: 1024px) 100vw'
          alt=''
        />
      </div>
    </m.div>
  );
}
