'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {m} from 'framer-motion';
import {usePathname} from 'next/navigation';

import HomeIcon from '../icons/home-icon';
import MenuIcon from '../icons/menu-icon';
import PrasmananIcon from '../icons/prasmanan-icon';
import OrderIcon from '../icons/order-icon';

const animationEasing = [0.6, 0.28, 0.39, 0.9];

export default function MobileBottomNavigation({
  mobileSecondaryNavStatus,
}: {
  mobileSecondaryNavStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [lastActive, setLastActive] = useState<string>('/');
  const [active, setActive] = useState<string | null>('/');
  const pathname = usePathname();

  useEffect(() => {
    setLastActive(pathname);
    setActive(pathname);
  }, [pathname]);

  return (
    <div className='fixed flex justify-between z-50 bottom-0 left-0 w-full py-2 px-8 bg-primary-orange lg:hidden'>
      <Link
        href='/'
        onClick={() => {
          mobileSecondaryNavStatus(false);
        }}
      >
        <NavIcon label='Home' active={active} id={'/'}>
          <HomeIcon />
        </NavIcon>
      </Link>

      <Link
        href='/menu'
        onClick={() => {
          mobileSecondaryNavStatus(false);
        }}
      >
        <NavIcon label='Menu' active={active} id={'/menu'}>
          <MenuIcon />
        </NavIcon>
      </Link>

      <Link
        href='/prasmanan'
        onClick={() => {
          mobileSecondaryNavStatus(false);
        }}
      >
        <NavIcon label='Prasmanan' active={active} id={'/prasmanan'}>
          <PrasmananIcon />
        </NavIcon>
      </Link>

      <button
        onClick={() => {
          setActive((prev) => (prev === 'beli' ? lastActive : 'beli'));
          mobileSecondaryNavStatus(false);
        }}
        onBlur={() => setActive(lastActive)}
      >
        <NavIcon label='Mulai Order' active={active} id={'beli'}>
          <OrderIcon />
        </NavIcon>
      </button>
    </div>
  );
}

type NavIconProps = {
  children: React.ReactNode;
  label: string;
  active: string | null;
  id: string;
};

function NavIcon({
  children,
  label,
  active,
  id,
}: NavIconProps): React.ReactElement {
  const status = active === id ? 'open' : 'close';

  return (
    <m.div
      variants={{
        close: {
          width: '36px',
          backgroundColor: '#E54126',
        },
        open: {
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, .2)',
        },
      }}
      initial={false}
      animate={status}
      transition={{duration: 0.4, ease: animationEasing}}
      className='rounded-full overflow-hidden text-primary-white'
    >
      <div className='flex items-center justify-items-start px-3 py-2'>
        <div aria-hidden='true'>{children}</div>

        <m.div
          initial={false}
          variants={{open: {opacity: 1}, close: {opacity: 0}}}
          className='font-outfit text-xs w-max shrink-0 ml-2'
        >
          {label}
        </m.div>
      </div>
    </m.div>
  );
}
