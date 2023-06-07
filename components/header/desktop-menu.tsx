import {useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {motion, useScroll, useTransform} from 'framer-motion';

const menuStyle = 'flex gap-8 md:gap-10 lg:gap-12';

export default function DesktopMenu() {
  const pathname = usePathname();

  const {scrollY} = useScroll();
  const height = useTransform(scrollY, [0, 150], [120, 70]);
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.4]);
  const logoY = useTransform(scrollY, [0, 150], [0, -50]);

  return (
    <motion.nav
      style={{height, gridColumn: '5/21'}}
      className='hidden relative lg:flex font-calistoga gap-4 justify-between items-center h-32  w-full mx-auto px-8 lg:px-0'
    >
      <div className={menuStyle}>
        <NavLink path='/' currentPath={pathname}>
          Home
        </NavLink>

        <NavLink path='/menu' currentPath={pathname}>
          Menu
        </NavLink>

        <NavLink path='/prasmanan' currentPath={pathname}>
          Prasmanan
        </NavLink>
      </div>

      <div className={menuStyle}>
        <NavLink path='/franchise' currentPath={pathname}>
          Franchise
        </NavLink>

        <NavLink path='/reseller' currentPath={pathname}>
          Reseller
        </NavLink>

        <NavLink path='/profile' currentPath={pathname}>
          Profile
        </NavLink>
      </div>

      <motion.div
        style={{scale: logoScale, x: '-50%', y: logoY}}
        className='w-[92px] h-[140px] left-1/2 -translate-x-1/2 top-4 hidden lg:block absolute'
      >
        <Image src='/assets/decoration/logo.png' alt='' fill={true} />
      </motion.div>
    </motion.nav>
  );
}

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
  currentPath: string;
};

function NavLink({children, path, currentPath}: NavLinkProps) {
  return (
    <Link href={path} prefetch>
      <motion.div className='relative px-2'>
        <span className='relative z-50 text-slate-950 text-xl'>{children}</span>

        {path === currentPath && (
          <motion.div
            layoutId='desktopNavLink'
            className='absolute inset-0 z-10 rounded-full bg-primary-yellow'
            transition={{
              type: 'tween',
              duration: 0.7,
              ease: [0.32, 0.72, 0, 1],
            }}
          ></motion.div>
        )}
      </motion.div>
    </Link>
  );
}
