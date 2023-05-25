import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

const menuStyle = 'flex flex-col gap-2 h-xs:gap-4 h-s:gap-8 items-end xs:mb-8';

const animationEasing = [0.32, 0.72, 0, 1];
const imgAnimationVariant = {
  initial: {
    y: '-30%',
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 35,
      ease: animationEasing,
    },
  },
  animate: {
    y: '-30%',
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.3,
      type: 'spring',
      stiffness: 35,
      ease: animationEasing,
    },
  },
};
const linkAnimationVariant = {
  initial: (index: number) => ({
    x: 200,
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: index / 10,
      type: 'spring',
      stiffness: 50,
      ease: animationEasing,
    },
  }),
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.3 + index / 10,
      type: 'spring',
      stiffness: 50,
      ease: animationEasing,
    },
  }),
};

export default function MobileMenu({state}: {state: boolean}) {
  const status = state ? 'animate' : 'initial';

  return (
    <motion.div
      animate={status}
      initial={false}
      variants={{
        initial: {
          left: '100%',
          transition: {
            delay: 0.7,
          },
        },
        animate: {
          left: 0,
        },
      }}
      transition={{duration: 0.7, ease: animationEasing}}
      className='bg-yellow-400  pt-28 pr-8 pb-8 fixed z-30 top-0 left-0 h-screen w-full font-calistoga text-2xl text-slate-950 lg:hidden overflow-hidden'
    >
      <div className={`${menuStyle} mb-2 h-xs:mb-4 h-s:mb-8`}>
        <motion.div variants={linkAnimationVariant} custom={1}>
          <Link href='/'>
            <span
              className='text-red-500 text-sm text-right block'
              aria-hidden='true'
            >
              Join
            </span>
            <span>Franchise</span>
          </Link>
        </motion.div>

        <motion.div variants={linkAnimationVariant} custom={2}>
          <Link href='/'>
            <span
              className='text-red-500 text-sm text-right block'
              aria-hidden='true'
            >
              Join
            </span>
            <span>Reseller</span>
          </Link>
        </motion.div>

        <motion.div variants={linkAnimationVariant} custom={3}>
          <Link href='/'>
            <span>Profile</span>
          </Link>
        </motion.div>

        <motion.div variants={linkAnimationVariant} custom={4}>
          <Link href='/'>
            <span>Proposal Franchise</span>
          </Link>
        </motion.div>
      </div>

      <div className={menuStyle}>
        <motion.div variants={linkAnimationVariant} custom={5}>
          <span className='text-sm text-red-500 text-right'>Order Frozen</span>
        </motion.div>

        <motion.div variants={linkAnimationVariant} custom={6}>
          <Link href='/'>
            <span>Tokopedia</span>
          </Link>
        </motion.div>

        <motion.div variants={linkAnimationVariant} custom={7}>
          <Link href='/'>
            <span>Shopee</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        aria-hidden='true'
        className='-translate-y-1/3'
        variants={imgAnimationVariant}
      >
        <Image
          src='/assets/decoration/mobile%20nav%20decoration.png'
          alt=''
          height={334}
          width={212}
        />
      </motion.div>
    </motion.div>
  );
}
