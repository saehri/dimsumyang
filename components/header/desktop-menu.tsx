import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {motion, useScroll, useTransform} from 'framer-motion';

const menuStyle = 'flex gap-8 lg:gap-12 bg-purpe-400';

export default function DesktopMenu() {
  const pathname = usePathname();

  const {scrollY} = useScroll();
  const height = useTransform(scrollY, [0, 150], [120, 70]);
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.4]);
  const logoY = useTransform(scrollY, [0, 150], [0, -50]);

  return (
    <motion.nav
      style={{height}}
      className='hidden relative lg:grid grid-cols-[repeat(2,max(370px,40%))] font-calistoga gap-4 justify-between items-center h-32 lg:col-span-3/23 xl:col-span-5/21 w-full mx-auto px-8 lg:px-0'
    >
      <div className={menuStyle + ' justify-end xl:justify-start'}>
        <NavLink path='/' currentPath={pathname} index={1}>
          Home
        </NavLink>

        <NavLink path='/menu' currentPath={pathname} index={2}>
          Menu
        </NavLink>

        <NavLink path='/prasmanan' currentPath={pathname} index={3}>
          Prasmanan
        </NavLink>
      </div>

      <div className={menuStyle + ' xl:justify-end'}>
        <NavLink path='/franchise' currentPath={pathname} index={4}>
          Franchise
        </NavLink>

        <NavLink path='/reseller' currentPath={pathname} index={5}>
          Reseller
        </NavLink>

        <NavLink path='/profile' currentPath={pathname} index={6}>
          Profile
        </NavLink>
      </div>

      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1, transition: {delay: 0.8}}}
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
  index: number;
};

function NavLink({children, path, currentPath, index}: NavLinkProps) {
  return (
    <Link href={path} prefetch>
      <motion.div
        className='relative px-2'
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.2 + index * 0.1}}
      >
        <span className='relative z-50 text-slate-950 text-xl'>{children}</span>

        {path === currentPath && (
          <motion.div
            layoutId='desktopNavLink'
            className='absolute inset-0 z-10 rounded-full bg-primary-yellow shadow-md outline outline-1 -outline-offset-1 outline-slate-100/20'
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
