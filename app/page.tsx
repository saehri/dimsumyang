'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {m, LazyMotion, domAnimation} from 'framer-motion';

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main className='bg-slate-100 min-h-screen max-sm:bg-deco-bottom max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
        <section className='bg-yellow-400 pt-28 grid grid-cols-[repeat(12,1fr)] px-4 max-sm:bg-deco-top-yellow max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-top'>
          <div className='bg-blue-400' style={{gridColumn: '3/11'}}>
            <FadingSlider />
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}

const imagesData = [
  {id: 0, link: 'hero image slider one'},
  {id: 1, link: 'hero image slider two'},
];

function FadingSlider() {
  const [index, setIndex] = useState<number>(0);

  function changeIndex(): void {
    if (index + 1 !== imagesData.length)
      setIndex((prev) => (prev + 1 < imagesData.length ? prev + 1 : prev));
    else setIndex(0);
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      changeIndex();
    }, 5000);

    return () => clearTimeout(interval);
  }, [index]);

  return (
    <div>
      <m.div
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
        className='w-full relative flex gap-4 pt-[calc((1/1)*100%)]'
      >
        {imagesData.map((img) => (
          <SliderContent
            key={`heroImgae-${img.id}`}
            index={img.id}
            link={img.link}
            activeIndex={index}
          />
        ))}
      </m.div>

      <div className='mt-8'>
        <div>index: {index.toString()}</div>
        <button onClick={() => changeIndex()}>Increment</button>
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
    <m.div
      animate={status}
      variants={{inactive: {opacity: 0}, active: {opacity: 1}}}
      style={{opacity: index === activeIndex ? 1 : 0}}
      transition={{duration: 1}}
    >
      <div
        key={index}
        className='bg-red-700 shrink-0 rounded-full absolute inset-0'
      >
        <Image src={`/assets/images/${link}.png`} alt='' priority fill={true} />
      </div>
    </m.div>
  );
}
