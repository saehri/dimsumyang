'use client';

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {motion, PanInfo} from 'framer-motion';

const imagesData = [
  {id: 0, link: 'hero image slider one'},
  {id: 1, link: 'hero image slider two'},
];

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
      <div className='w-full relative flex gap-4 pt-[calc((1/1)*100%)] overflow-hidden'>
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
      </div>

      <div className='mt-8 hidden lg:flex gap-4'>
        <button
          onClick={() =>
            setIndex((prev) => (prev + 1 < ImageData.length ? prev + 1 : prev))
          }
        >
          Next
        </button>
        <button
          onClick={() => setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev))}
        >
          Previous
        </button>
      </div>
    </div>
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
        className='shrink-0 rounded-full absolute inset-0'
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
