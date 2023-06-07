import TestiCard from '../cards/testi-card';

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

export default function TestiSlider() {
  return (
    <div className='flex-1 overflow-hidden overflow-y-auto relative'>
      <div className='flex flex-col gap-3 absolute inset-0'>
        {testimonial.map((person, i) => (
          <TestiCard key={`testi-card-${i}`} person={person} />
        ))}
      </div>
    </div>
  );
}
