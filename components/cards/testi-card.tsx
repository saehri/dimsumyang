type Testi = {
  username: string;
  image: string;
  testimonial: string;
};

export default function TestiCard({person}: {person: Testi}) {
  return (
    <figure className='flex gap-4 items-center bg-white shadow-md p-2 rounded-2xl'>
      <div className='w-[60px] h-[60px] shrink-0 rounded-full bg-slate-200'></div>

      <figcaption className='flex flex-col gap-1 lg:gap-2'>
        <span className='font-calistoga text-sm md:text-xl'>
          {person.username}
        </span>
        <span className='font-outfit text-xs md:text-sm text-slate-800 leading-4'>
          {person.testimonial}
        </span>
      </figcaption>
    </figure>
  );
}
