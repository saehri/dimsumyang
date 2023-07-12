import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';
import {useEffect} from 'react';

const menuStyle = 'flex gap-8 lg:gap-12 bg-purpe-400';

const navigationLinks = [
  {path: '/', label: 'Home'},
  {path: '/menu', label: 'Menu'},
  {path: '/prasmanan', label: 'Prasmanan'},
  {path: '/franchise', label: 'Franchise'},
  {path: '/reseller', label: 'Reseller'},
  {path: '/profile', label: 'Profile'},
];

export default function DesktopMenu() {
  const pathname = usePathname();

  const {scrollY} = useScroll();
  const height = useTransform(scrollY, [0, 150], [120, 70]);
  const blur = useTransform(scrollY, [0, 150], [0, 12]);
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.4]);
  const logoY = useTransform(scrollY, [0, 150], [0, -50]);

  const logoYellowOpacity = useMotionValue(0);
  const logoWhiteOpacity = useMotionValue(1);

  useEffect(() => {
    // flip the opacity after user reach the fixed value
    return scrollY.on('change', (current) => {
      if (current > 835) {
        logoYellowOpacity.set(1);
        logoWhiteOpacity.set(0);
      } else {
        logoYellowOpacity.set(0);
        logoWhiteOpacity.set(1);
      }
    });
  }, []);

  return (
    <motion.div
      style={{
        height,
        backdropFilter: useMotionTemplate`blur(${blur}px)`,
        WebkitBackdropFilter: useMotionTemplate`blur(${blur}px)`,
      }}
      className='hidden lg:grid w-full col-span-full grid-cols-[repeat(24,1fr)]'
    >
      <nav className='relative grid grid-cols-[repeat(2,max(370px,40%))] font-calistoga gap-4 justify-between items-center lg:col-span-3/23 xl:col-span-5/21 w-full mx-auto px-8 lg:px-0'>
        <div className={menuStyle + ' justify-end xl:justify-start'}>
          {navigationLinks.slice(0, 3).map((link, index) => (
            <NavLink
              path={link.path}
              key={`desktopMenuLeft-${index}`}
              currentPath={pathname}
              index={index + 1}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={menuStyle + ' xl:justify-end'}>
          {navigationLinks.slice(3).map((link, index) => (
            <NavLink
              path={link.path}
              currentPath={pathname}
              index={index + 1 + 3}
              key={`desktopMenuRight-${index}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <DesktopMenuLogo
          logoScale={logoScale}
          logoWhiteOpacity={logoWhiteOpacity}
          logoYellowOpacity={logoYellowOpacity}
          logoY={logoY}
          pathname={pathname}
        />
      </nav>
    </motion.div>
  );
}

/* 
  NAVLINK
*/
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
        className='relative px-3'
        initial={{y: -100, opacity: 0, color: 'rgb(2, 6, 23)'}}
        animate={{y: 0, opacity: 1, transition: {delay: 0.2 + index * 0.1}}}
        whileHover={{
          color: 'rgb(229, 65, 38)',
          transition: {delay: 0, duration: 0.1},
        }}
      >
        <span className='relative z-50 text-xl text-center'>{children}</span>

        {path === currentPath && (
          <motion.div
            layoutId='desktopNavLink'
            className='absolute inset-0 z-10 rounded-full bg-primary-yellow shadow-md outline outline-1 -outline-offset-1 outline-slate-50/70'
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

/* 
  LOGO
*/
type LogoProps = {
  logoScale: MotionValue<number>;
  logoYellowOpacity: MotionValue<number>;
  logoWhiteOpacity: MotionValue<number>;
  logoY: MotionValue<number>;
  pathname: string;
};

function DesktopMenuLogo({
  logoScale,
  logoYellowOpacity,
  logoWhiteOpacity,
  logoY,
  pathname,
}: LogoProps) {
  return (
    <>
      {pathname === '/' ? (
        <>
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.8}}}
            style={{
              scale: logoScale,
              x: '-50%',
              y: logoY,
              opacity: logoYellowOpacity,
            }}
            className='w-[92px] h-[140px] left-1/2 -translate-x-1/2 top-4 hidden lg:block absolute'
          >
            <Image
              src='/assets/decoration/logo.png'
              alt=''
              fill={true}
              sizes='(min-width: 1024px) 92px'
            />
          </motion.div>

          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.8}}}
            style={{
              scale: logoScale,
              x: '-50%',
              y: logoY,
              opacity: logoWhiteOpacity,
            }}
            className='w-[92px] h-[140px] left-1/2 -translate-x-1/2 top-4 hidden lg:block absolute'
          >
            <Image
              src='/assets/decoration/logo white.png'
              alt=''
              fill={true}
              sizes='(min-width: 1024px) 92px'
            />
          </motion.div>
        </>
      ) : (
        <motion.div
          style={{
            scale: logoScale,
            x: '-50%',
            y: logoY,
          }}
          className='w-[92px] h-[140px] left-1/2 -translate-x-1/2 top-4 hidden lg:block absolute'
        >
          <Image
            src='/assets/decoration/logo.png'
            alt=''
            fill={true}
            sizes='(min-width: 1024px) 92px'
          />
        </motion.div>
      )}
    </>
  );
}
