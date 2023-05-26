import Link from 'next/link';
import {Dispatch, useState} from 'react';
import {motion} from 'framer-motion';

import HomeIcon from '../icons/home-icon';
import MenuIcon from '../icons/menu-icon';
import PrasmananIcon from '../icons/prasmanan-icon';
import OrderIcon from '../icons/order-icon';

const animationEasing = [0.32, 0.72, 0, 1];

export default function MobileBottomNavigation() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className='fixed flex justify-between z-50 bottom-0 left-0 w-full py-2 px-8 bg-red-500 sm:hidden'>
      <Link href='/'>
        <NavIcon label='Home' setActive={setActive} active={active} index={0}>
          <HomeIcon />
        </NavIcon>
      </Link>

      <Link href='/'>
        <NavIcon label='Menu' setActive={setActive} active={active} index={1}>
          <MenuIcon />
        </NavIcon>
      </Link>

      <Link href='/'>
        <NavIcon
          label='Prasmanan'
          setActive={setActive}
          active={active}
          index={2}
        >
          <PrasmananIcon />
        </NavIcon>
      </Link>

      <button>
        <NavIcon
          label='Mulai Order'
          setActive={setActive}
          active={active}
          index={3}
        >
          <OrderIcon />
        </NavIcon>
      </button>
    </div>
  );
}

type NavIconProps = {
  children: React.ReactNode;
  label: string;
  setActive: Dispatch<React.SetStateAction<number>>;
  active: number;
  index: number;
};

function NavIcon({
  children,
  label,
  setActive,
  active,
  index,
}: NavIconProps): React.ReactElement {
  const status = active === index ? 'open' : 'close';

  return (
    <motion.div
      variants={{
        close: {
          width: '36px',
          backgroundColor: 'rgb(239, 68, 68)',
        },
        open: {
          width: '100%',
          backgroundColor: 'rgb(220, 38, 38)',
        },
      }}
      initial={false}
      animate={status}
      transition={{duration: 0.7, ease: animationEasing}}
      onClick={() => setActive(index)}
      className='rounded-full overflow-hidden text-slate-100'
    >
      <div className='flex items-center justify-items-start px-3 py-2'>
        <div aria-hidden='true'>{children}</div>

        <motion.div
          initial={false}
          variants={{open: {opacity: 1}, close: {opacity: 0}}}
          className='font-outfit text-xs w-max shrink-0 ml-2'
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}
