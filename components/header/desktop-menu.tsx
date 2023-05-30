import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';

const menuStyle = 'flex gap-8 md:gap-10 lg:gap-12';

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex font-calistoga py-8 gap-4 justify-between w-full max-w-[867px] mx-auto px-8 lg:px-0'>
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
    </nav>
  );
}

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
  currentPath: string;
};

function NavLink({children, path, currentPath}: NavLinkProps) {
  return (
    <Link href={path}>
      <motion.div className='relative px-2'>
        <span className='relative z-50 text-slate-950'>{children}</span>

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
