'use client';

import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {AnimatePresence, m, motion} from 'framer-motion';

export default function FranchiseSlider() {
  const [activeSlide, setActiveSlide] = useState<'dim' | 'sum'>('dim');
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    const header = document.getElementById('header')!;

    if (modalActive) {
      header.classList.remove('z-[1000]');
    } else {
      header.classList.add('z-[1000]');
    }
  }, [modalActive]);

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-[max-content,1fr] mx-4 gap-8'>
        <div className='flex flex-col gap-4 self-center'>
          <SliderThumb
            activeSlide={activeSlide}
            id='dim'
            setActiveSlide={setActiveSlide}
          >
            Paket Dim
          </SliderThumb>
          <SliderThumb
            activeSlide={activeSlide}
            id='sum'
            setActiveSlide={setActiveSlide}
          >
            Paket Sum
          </SliderThumb>
        </div>

        <div className='pt-[calc((272/249)*100%)] relative'>
          <div
            className={`${
              activeSlide === 'dim'
                ? 'pt-[calc((272/249)*100%)]'
                : 'pt-[calc((240/249)*100%)]'
            } absolute w-full bottom-0 left-0`}
          >
            <AnimatePresence>
              {activeSlide === 'dim' ? (
                <>
                  <m.button
                    className='absolute inset-0 cursor-zoom-in'
                    onClick={() => setModalActive(true)}
                    initial={{scale: 0.9}}
                    animate={{scale: 1}}
                    exit={{scale: 0.9}}
                    transition={{type: 'spring', bounce: 0.6}}
                  >
                    <Image
                      className='absolute inset-0'
                      src='/assets/images/mobile franchise dim.png'
                      fill={true}
                      alt=''
                      sizes='(max-width: 1024px) 499px'
                    />
                  </m.button>

                  <div
                    className='fixed top-0 left-0 w-full h-full z-[2000] isolate pt-[30%] px-4 bg-slate-50/70'
                    style={{
                      backdropFilter: 'blur(7px)',
                      WebkitBackdropFilter: 'blur(7px)',
                      display: modalActive ? 'block' : 'none',
                    }}
                  >
                    <button
                      onClick={() => setModalActive(false)}
                      className='rounded-full grid place-items-center p-2 ml-auto mb-4'
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17 1L1 16'
                          stroke='#E54126'
                          strokeWidth='2'
                          strokeMiterlimit='10'
                          strokeLinecap='round'
                        />
                        <path
                          d='M17 16L1 1'
                          stroke='#E54126'
                          strokeWidth='2'
                          strokeMiterlimit='10'
                          strokeLinecap='round'
                        />
                      </svg>
                    </button>

                    <div className='w-full pt-[calc((387/430)*100%)] relative'>
                      <Image
                        className='absolute inset-0'
                        src='/assets/images/mobile franchise dim.png'
                        fill={true}
                        alt=''
                        sizes='(max-width: 1024px) 499px'
                      />
                    </div>
                  </div>
                </>
              ) : (
                <motion.button
                  initial={{scale: 0.9}}
                  animate={{scale: 1}}
                  exit={{scale: 0.9}}
                  transition={{type: 'spring', bounce: 0.6}}
                  className='absolute inset-0 cursor-zoom-in'
                >
                  <Image
                    className='absolute inset-0'
                    src='/assets/images/mobile franchise sum.png'
                    fill={true}
                    alt=''
                    sizes='(max-width: 1024px) 499px'
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className='mb-2 text-center flex justify-center items-baseline font-calistoga text-2xl overflow-hidden text-primary-orange'>
        <span className='sr-only'>
          Harga franchise {activeSlide === 'dim' ? 'dim' : 'sum'}
        </span>
        <span aria-hidden='true' className='text-sm mr-1'>
          Rp
        </span>
        <AnimatePresence>
          {activeSlide === 'dim' ? (
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{type: 'spring', bounce: 0.5, delay: 0.1}}
            >
              <span className='sr-only'>
                dua belas juta tujuh ratus ribu rupiah
              </span>
              <span aria-hidden='true'>12.700.000</span>
            </motion.div>
          ) : (
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{type: 'spring', bounce: 0.5, delay: 0.1}}
            >
              <span className='sr-only'>
                sembilan belas juta tujuh ratus ribu rupiah
              </span>
              <span aria-hidden='true'>19.700.000</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='font-outfit justify-center items-baseline flex text-center text-sm text-slate-950'>
        Harga normal
        <span aria-hidden='true' className='mr-1 ml-3'>
          Rp
        </span>
        <AnimatePresence>
          {activeSlide === 'dim' ? (
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{type: 'spring', bounce: 0.5, delay: 0.2}}
            >
              <span className='sr-only'>
                delapan belas juta tujuh ratus ribu rupiah
              </span>
              <span
                aria-hidden='true'
                className='text-xl'
                style={{
                  textDecoration: 'line-through',
                  textDecorationColor: '#E54126',
                  textDecorationThickness: '2px',
                }}
              >
                18.700.000
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{type: 'spring', bounce: 0.5, delay: 0.2}}
            >
              <span className='sr-only'>
                dua puluh delapan juta tujuh ratus ribu rupiah
              </span>
              <span
                aria-hidden='true'
                className='text-xl'
                style={{
                  textDecoration: 'line-through',
                  textDecorationColor: '#E54126',
                  textDecorationThickness: '2px',
                }}
              >
                28.700.000
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SliderThumb({
  id,
  children,
  setActiveSlide,
  activeSlide,
}: {
  id: 'dim' | 'sum';
  children: React.ReactNode;
  setActiveSlide: Dispatch<SetStateAction<'dim' | 'sum'>>;
  activeSlide: string;
}) {
  const status = activeSlide === id ? 'active' : 'inactive';

  return (
    <motion.button
      initial={false}
      animate={status}
      variants={{
        active: {
          background: '#E54126',
          color: 'rgb(248, 239, 232)',
          boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)',
        },
        inactive: {background: '#E5E1D2', color: 'rgb(2, 6, 23)'},
      }}
      whileTap={{scale: 0.9}}
      whileHover={{boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)'}}
      className={`font-calistoga text-sm p-2 px-4 rounded-full border border-white`}
      onClick={() => setActiveSlide(id)}
    >
      {children}
    </motion.button>
  );
}
