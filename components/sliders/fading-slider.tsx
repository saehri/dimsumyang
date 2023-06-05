'use client';

import Image from 'next/image';
import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {motion, PanInfo} from 'framer-motion';

import ChevronRight from '../icons/chevron-right';
import ChevronLeft from '../icons/chevron-left';

const imagesData = [
  {id: 0, link: 'hero image slider one'},
  {id: 1, link: 'hero image slider two'},
];

const buttonStyle =
  'bg-primary-white shadow-md rounded-full w-8 h-8 grid place-items-center';

export default function FadingSlider() {
  const [index, setIndex] = useState<number>(0);
  const [indexJustChanged, setIndexJustChanged] = useState<boolean>(false);

  function changeIndex(): void {
    if (index + 1 !== imagesData.length)
      setIndex((prev) => (prev + 1 < imagesData.length ? prev + 1 : prev));
    else setIndex(0);
  }

  function handleDrag(info: PanInfo) {
    if (info.offset.x > 20)
      setIndex((prev) => (prev + 1 < imagesData.length ? prev + 1 : 0));
    else setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : imagesData.length - 1));

    setIndexJustChanged(true);
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      if (indexJustChanged === true) setIndexJustChanged(false);
      else changeIndex();
    }, 5000);

    return () => clearTimeout(interval);
  }, [index, indexJustChanged]);

  return (
    <div>
      <div className='relative flex gap-4 pt-[calc((1/1)*100%)] lg:pt-0 lg:w-[512px] lg:h-[512px] lg:mx-auto'>
        {imagesData.map((img) => (
          <SliderContent
            key={`heroImgae-${img.id}`}
            index={img.id}
            link={img.link}
            activeIndex={index}
          />
        ))}

        <motion.div
          drag='x'
          dragConstraints={{
            left: -50,
            right: 50,
          }}
          onDragEnd={(event, info) => handleDrag(info)}
          dragSnapToOrigin={true}
          className={`absolute z-30 inset-0`}
        ></motion.div>

        <div className='w-[130%] lg:w-[140%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]'>
          <ChinesseTextDecoration />
        </div>
      </div>

      <div className='flex gap-2 justify-center items-center mt-6'>
        <SliderThumb setActive={setIndex} index={0} activeIndex={index} />
        <SliderThumb setActive={setIndex} index={1} activeIndex={index} />
      </div>

      <div className='mt-8 hidden lg:flex gap-4 ml-auto w-max'>
        <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale: 1}}
          className={buttonStyle}
          onClick={() =>
            setIndex((prev) =>
              prev - 1 >= 0 ? prev - 1 : imagesData.length - 1
            )
          }
        >
          <span className='sr-only'>previous slide</span>
          <ChevronLeft />
        </motion.button>

        <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale: 1}}
          className={buttonStyle}
          onClick={() =>
            setIndex((prev) => (prev + 1 < ImageData.length ? prev + 1 : 0))
          }
        >
          <span className='sr-only'>next slide</span>
          <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
}

function SliderThumb({
  setActive,
  index,
  activeIndex,
}: {
  setActive: Dispatch<SetStateAction<number>>;
  index: number;
  activeIndex: number;
}) {
  const activeBg =
    index === activeIndex
      ? 'bg-primary-orange'
      : 'bg-primary-white lg:bg-primary-yellow';

  return (
    <button
      className={`h-[2px] w-10 lg:w-20 rounded-full ${activeBg}`}
      onClick={() => setActive(index)}
    ></button>
  );
}

function SliderContent({
  index,
  activeIndex,
  link,
}: {
  index: number;
  activeIndex: number;
  link: string;
}) {
  const status = index === activeIndex ? 'active' : 'inactive';

  return (
    <motion.div
      animate={status}
      variants={{
        inactive: {opacity: 0, zIndex: 10},
        active: {opacity: 1, zIndex: 20},
      }}
      style={{
        touchAction: 'none',
      }}
      transition={{duration: 1}}
      className='absolute inset-0'
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            rotate: {
              duration: 10,
              repeat: 'infinity',
              ease: 'linear',
            },
          },
        }}
        className='shrink-0 rounded-full w-full h-full'
      >
        <Image
          src={`/assets/images/${link}.png`}
          alt=''
          priority
          fill={true}
          draggable='false'
        />
      </motion.div>
    </motion.div>
  );
}

function ChinesseTextDecoration() {
  return (
    <svg
      viewBox='0 0 386 130'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className='text-primary-white lg:text-primary-yellow'
    >
      <path
        d='M30.3633 99.4951C26.3444 110.739 19.5745 122.544 11.6002 129.627L0 123.47C7.32775 117.613 14.3639 106.761 18.256 96.195L30.3633 99.4951ZM106.81 42.4016L107.064 88.9165L16.6459 89.4252L16.3924 42.9103L54.2355 42.7016L54.02 2.27832L69.7911 3.12618C69.6643 4.35232 68.8783 5.16104 66.7738 5.44801L66.8372 16.405L115.989 16.118L116.052 28.1445L66.9006 28.4315L66.9766 42.6364L106.81 42.4016ZM94.3733 77.0856L94.2465 54.5065L28.4109 54.8847L28.5377 77.4639L94.3733 77.0856ZM43.5228 127.957C43.4847 120.926 42.3691 109.304 40.6069 100.252L52.562 98.9603C54.451 107.882 55.9597 119.361 56.1245 126.248L43.5228 127.957ZM76.1173 127.501C74.7608 120.47 70.6278 109.004 66.7738 100.382L78.057 97.6168C82.1773 105.978 86.5638 117.183 88.3133 124.187L76.1173 127.501ZM112.655 128.779C109.067 120.822 100.319 108.3 92.5224 99.2734L103.793 94.1993C111.59 102.808 120.718 114.796 124.711 123.027L112.655 128.779Z'
        fill='currentColor'
      />
      <path
        d='M129.605 99.8734C138.086 87.9251 142.054 68.9721 143.791 50.9845L155.898 53.4889C154.022 72.0244 150.206 93.534 141.205 106.852L129.605 99.8734ZM212.454 36.6752C202.16 28.614 183.181 18.3093 167.245 12.3221L175.207 2.40869C191.003 7.86108 209.982 17.9049 220.542 25.4052L212.454 36.6752ZM166.611 40.445L182.649 41.3058C182.522 42.3885 181.748 43.2103 179.504 43.6146L179.847 107.439C179.885 113.935 181.203 114.991 188.037 114.965L209.855 114.848C217.208 114.809 218.374 110.061 219.313 87.4816C222.216 89.7643 227.49 92.1644 230.9 92.96C229.468 118.8 225.956 126.522 210.844 126.6L186.794 126.744C171.416 126.822 167.055 122.531 166.979 107.53L166.611 40.445ZM244.478 101.934C241.511 87.8729 231.8 66.7155 220.682 51.4932L231.952 45.6104C243.73 60.9631 253.568 81.3118 256.928 95.6341L244.478 101.934Z'
        fill='currentColor'
      />
      <path
        d='M269.124 38.9057C277.681 42.245 288.749 48.1278 294.162 52.6932L287.253 63.2849C282.106 58.576 271.292 52.2888 262.595 48.5452L269.124 38.9057ZM294.162 27.14C289.003 22.1703 278.455 15.4787 269.897 11.5916L276.68 2.08255C285.11 5.68269 296.051 11.7221 301.325 16.5483L294.162 27.14ZM267.324 117.77C274.093 107.178 283.729 89.6859 290.993 73.9549L300.374 82.277C293.883 96.521 285.82 112.382 279.57 122.961C280.103 123.77 280.369 124.435 280.369 125.113C280.382 125.792 280.115 126.47 279.722 127.018L267.324 117.77ZM385.937 84.6379L386 96.9254L349.716 97.1341L349.881 127.566L337.001 127.631L336.836 97.1993L301.883 97.3949L301.82 85.1075L336.772 84.9119L336.671 67.3416L308.945 67.4981L308.881 55.4585L336.608 55.302L336.519 38.2666L304.723 38.4492L304.66 26.4226L321.622 26.3313C319.226 20.3833 314.84 12.7004 310.732 6.77838L321.483 1.16947C326.655 7.90016 332.221 17.331 334.224 23.5399L329.242 26.2791L354.217 26.1357L350.401 24.5182C354.572 18.0093 359.77 7.96538 362.496 0.647705L377.379 6.38706C376.859 7.33927 375.807 7.75669 374.108 7.62625C371.509 13.183 367.212 20.5137 363.421 26.0835L382.881 25.9791L382.945 38.0057L349.425 38.1883L349.514 55.2237L378.432 55.0542L378.495 67.0938L349.577 67.2634L349.678 84.8336L385.937 84.6379Z'
        fill='currentColor'
      />
    </svg>
  );
}
