import Image from 'next/image';
import WhatsappIcon from '../icons/whatsapp-icon';
import {m} from 'framer-motion';
import GofoodIcon from '../icons/gofood-icon';
import GrabFoodIcon from '../icons/grabfood-icon';
import ShopeeFoodIcon from '../icons/shopeefood-icon';
import TokopediaIcon from '../icons/tokopedia-icon';
import ShopeeIcon from '../icons/shopee-icon';
import EmailIcon from '../icons/email-icon';
import InstagramIcon from '../icons/instagram-icon';
import TiktokIcon from '../icons/tiktok-icon';
import FacebokIcon from '../icons/facebook-icon';

export default function Footer() {
  return (
    <footer className='hidden lg:grid grid-cols-[repeat(24,1fr)] bg-primary-orange pt-8 pb-14 2xl:pb-24'>
      <div className='col-span-4/22 grid grid-cols-[repeat(12,1fr)]'>
        <div className='col-span-1/3'>
          <div className='pt-[calc((117/156)*100%)] relative'>
            <div className='absolute inset-0'>
              <Image
                src='/assets/decoration/footer%20image%20left.png'
                fill={true}
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='col-span-3/-1 grid grid-cols-[repeat(12,1fr)] pl-8 gap-y-7'>
          <div className='col-span-1/5 relative pt-[calc((49/264)*100%)]'>
            <div className='absolute inset-0 bg-pink-50-300'>
              <Image
                src='/assets/decoration/footer%20image%20top.png'
                fill={true}
                alt=''
              />
            </div>
          </div>

          <div className='col-span-1/8 flex items-center gap-4 font-calistoga h-max text-xl 2xl:text-4xl'>
            <span className='text-primary-white'>Info Kemitraan:</span>

            <m.a
              href='https://wa.me/+6281934389646'
              className='flex items-center gap-1 py-1 px-3 rounded-full border text-primary-white border-primary-white'
              whileHover={{
                backgroundColor: 'rgb(248, 239, 232)',
                color: '#D42106',
              }}
              title='Hubungi kami di 081934389646'
            >
              <span className='w-5 h-5 2xl:h-7 2xl:w-7'>
                <WhatsappIcon />
              </span>
              <span aria-hidden='true'>081934389646</span>
            </m.a>
          </div>

          <div className='col-span-full bg-primary-white h-[1.5px] w-full self-center'></div>

          <div className='col-span-full bg-blue-60 grid grid-cols-[repeat(12,1fr)]'>
            <div className='font-calistoga col-span-1/5'>
              <span className='text-primary-white text-xl mb-5 block 2xl:text-4xl'>
                Available On:
              </span>

              <div className='bg-yellow-30 gap-x-6 grid grid-cols-[repeat(3,1fr)]'>
                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href=''
                  className='text-primary-white grid'
                >
                  <div className='relative pt-[calc((25/80)*100%)] self-center'>
                    <span className='absolute block inset-0'>
                      <GofoodIcon />
                    </span>
                  </div>

                  <span className='sr-only'>Pesan Dimsum Yang di GoFood</span>
                </m.a>

                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href=''
                  className='text-primary-white grid'
                >
                  <div className='relative pt-[calc((15/78)*100%)] self-center'>
                    <span className='absolute inset-0'>
                      <GrabFoodIcon />
                    </span>
                  </div>

                  <span className='sr-only'>Pesan Dimsum Yang di GrabFood</span>
                </m.a>

                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href=''
                  className='text-primary-white inline-block'
                >
                  <div className='relative pt-[calc((20/65)*100%)]'>
                    <span className='absolute block inset-0'>
                      <ShopeeFoodIcon />
                    </span>
                  </div>

                  <span className='sr-only'>
                    Pesan Dimsum Yang di ShopeeFood
                  </span>
                </m.a>
              </div>
            </div>

            <div className='font-calistoga' style={{gridColumn: '6/10'}}>
              <span className='text-primary-white text-xl mb-5 block 2xl:text-4xl'>
                Order Frozen:
              </span>

              <div className='bg-yellow-30 gap-x-6 grid grid-cols-[repeat(3,1fr)]'>
                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href='https://www.tokopedia.com/dimsumyang1000?utm_campaign=Shop-19332965-12146490-250722&utm_source=salinlink&utm_medium=share&_branch_match_id=1091541649935691728&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWDyr38zYITMsIL0oCAA4J2qQiAAAA'
                  target='_blank'
                  title='Pesan Dimsum Yang frozen di Tokopedia'
                  className='text-primary-white grid'
                >
                  <div className='relative pt-[calc((25/74)*100%)] self-center'>
                    <span className='absolute block inset-0'>
                      <TokopediaIcon />
                    </span>
                  </div>

                  <span className='sr-only'>
                    Pesan Dimsum Yang frozen di Tokopedia
                  </span>
                </m.a>

                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href='https://shopee.co.id/shope.me'
                  target='_blank'
                  title='Pesan Dimsum Yang frozen di Shopee'
                  className='text-primary-white grid'
                >
                  <div className='relative pt-[calc((25/73)*100%)] self-center'>
                    <span className='absolute inset-0'>
                      <ShopeeIcon />
                    </span>
                  </div>

                  <span className='sr-only'>
                    Pesan Dimsum Yang frozen di Shopee
                  </span>
                </m.a>
              </div>
            </div>

            <div
              className='font-calistoga flex flex-col justify-between items-end'
              style={{gridColumn: '-1/10'}}
            >
              <div className='flex gap-5 justify-end'>
                <m.a
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  href='mailto:dimsumyang1000@gmail.com'
                  className='text-primary-white grid'
                >
                  <EmailIcon />
                  <span className='sr-only'>Hubungi kamu lewat Email</span>
                </m.a>

                <m.a
                  href='https://www.instagram.com/dimsumyang.id/'
                  target='_blank'
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  className='text-primary-white grid'
                >
                  <InstagramIcon />
                  <span className='sr-only'>Temui kami di Instagram</span>
                </m.a>

                <m.a
                  href='https://www.tiktok.com/@dimsumyang.id?_t=8YNZGwVGMOg&_r=1'
                  target='_blank'
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  className='text-primary-white grid'
                >
                  <TiktokIcon />
                  <span className='sr-only'>Temui kami di Tiktok</span>
                </m.a>

                <m.a
                  href='https://www.facebook.com/dimsumyang.id/'
                  target='_blank'
                  initial={{opacity: 0.8}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.1}}
                  className='text-primary-white grid'
                >
                  <FacebokIcon />
                  <span className='sr-only'>Temui kami di Facebook</span>
                </m.a>
              </div>

              <div
                aria-hidden='true'
                className='font-outfit text-base text-primary-white'
              >
                © dimsumyang {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
