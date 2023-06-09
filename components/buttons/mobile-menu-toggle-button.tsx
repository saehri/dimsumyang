import {motion} from 'framer-motion';
import {Dispatch, SetStateAction} from 'react';

type MobileMenuToggleButtonProps = {
  state: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
};

const easing = [0.32, 0.72, 0, 1];

const barTopAnimationVariants = {
  animate: {
    width: 12,
    height: 1.5,
    x: -1,
    y: 7,
    rotate: -45,
    transition: {duration: 0.7, ease: easing},
  },
  initial: {
    width: 24,
    height: 1.5,
    x: 0,
    y: 0,
    rotate: 0,
  },
};

const barBottomAnimationVariants = {
  animate: {
    width: 12,
    height: 1.5,
    x: -1,
    y: -7,
    rotate: 45,
    transition: {duration: 0.7, ease: easing},
  },
  initial: {
    width: 24,
    height: 1.5,
    x: 0,
    y: 0,
    rotate: 0,
  },
};

const barStyle = 'w-full bg-primary-orange rounded-full';
export default function MobileMenuToggleButton({
  state,
  setStatus,
}: MobileMenuToggleButtonProps) {
  const status = state ? 'animate' : 'initial';

  return (
    <motion.button
      animate={status}
      initial={status}
      onClick={() => setStatus((prev) => !prev)}
      className='w-6 h-6 bg-transparent outline-transparent focus:outline-transparent ml-auto mb-4 relative z-50 flex flex-col justify-between lg:hidden'
    >
      <motion.div
        style={{height: '1.5px'}}
        className={barStyle}
        variants={barTopAnimationVariants}
      ></motion.div>
      <motion.div style={{height: '1.5px'}} className={barStyle}></motion.div>
      <motion.div
        style={{height: '1.5px'}}
        className={barStyle}
        variants={barBottomAnimationVariants}
      ></motion.div>
    </motion.button>
  );
}
