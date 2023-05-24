import {Outfit, Calistoga} from 'next/font/google';

import './globals.css';
import Header from '@/components/header/header';

const outfit = Outfit({preload: false, weight: ['400'], variable: '--outfit'});
const calistoga = Calistoga({
  preload: false,
  weight: ['400'],
  variable: '--calistoga',
});

export const metadata = {
  title: 'DimsumYang - Dimsum Prasmananya Indonesia',
  description:
    'Dimsum yang adalah pelopor dimsum prasmanan pertama di Indonesia. Kami menyediakan berbagai macam pilihan dimsum premium kulitas terbaik dengan harga yang murah.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={`${outfit.variable} ${calistoga.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
