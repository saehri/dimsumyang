'use client';
import {m} from 'framer-motion';

const testimonial = [
  {
    username: '@ujangburhanudin',
    image: '@ujangburhanudin',
    testimonial:
      'Rekomendid, ayamnya kerasa banget, konsep prasmanan booth eye catching bikin betah jajan.',
  },
  {
    username: '@rleecious',
    image: '@rleecious',
    testimonial:
      'Gila sih ini dimsum harga 1000 sampai 3000 tapi enak banget dan lumayan berasa ayamnya. Kulitnya tipis, dagingnya berasa dan wangi, aku suka banget... cocol sambal tambah yahud..',
  },
  {
    username: '@riri.fatmala',
    image: '@riri.fatmala',
    testimonial:
      'Gila sih ini dimsum harga 1000 sampai 3000 tapi enak dan berasa ayamnya, kemaren cobain di cabang Mampang Prapatan.',
  },
  {
    username: '@heiyikya',
    image: '@heiyikya',
    testimonial:
      'Ada 30 varian dimsum yang star dari 1000 rupiah aja harganya, bisa pilih sepuasnya dan cuma bayar seribu sampai 3000 aja per pcsnya loh!.',
  },
  {
    username: '@kokofood.id',
    image: '@kokofood.id',
    testimonial:
      'Makan dimsum murah tapi enak cuma di @dimsumyang.id enak banget guys,, dimsumnya tebel dan nagihin banget harga 1 pcsnya cuma 1K aja, murah kan? jarang koko nemuin harga dimsum segitu murahnya.',
  },
  {
    username: '@mitapratiwi15_',
    image: '@mitapratiwi15_',
    testimonial:
      'Gaes aku mau rekomendasiin dimsum yang super enak banget loh in gaes dari @dimsumyang.id harganya juga terjangkau banget mulai dari 1000an aja loh.',
  },
];

const containerAnimationVrt = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimVrt = {
  hidden: {y: 50, opacity: 0},
  show: {y: 0, opacity: 1},
};

export default function TestiSlider() {
  return (
    <div className='flex-1 overflow-hidden overflow-y-auto relative'>
      <m.div
        variants={containerAnimationVrt}
        initial='hidden'
        whileInView='show'
        className='flex flex-col gap-3 lg:absolute inset-0 max-sm:h-72 overflow-y-auto pb-2 custom-scrollbar'
      >
        {testimonial.map((person, i) => (
          <TestiCard key={`testi-card-${i}`} person={person} />
        ))}
      </m.div>
    </div>
  );
}

// TESTI CARD
type Testi = {
  username: string;
  image: string;
  testimonial: string;
};

function TestiCard({person}: {person: Testi}) {
  return (
    <m.figure
      variants={cardAnimVrt}
      className='flex gap-4 items-center bg-white shadow-md p-2 rounded-2xl'
    >
      <div className='w-[60px] h-[60px] shrink-0 rounded-full bg-slate-200'></div>

      <figcaption className='flex flex-col gap-1 lg:gap-2'>
        <span className='font-calistoga text-sm md:text-xl'>
          {person.username}
        </span>
        <span className='font-outfit text-xs md:text-sm lg:text-base leading-4 lg:leading-[1.2] text-slate-800'>
          {person.testimonial}
        </span>
      </figcaption>
    </m.figure>
  );
}
