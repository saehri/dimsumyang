import {Outfit, Calistoga} from 'next/font/google';

import './globals.css';
import Header from '@/components/header/header';

const outfit = Outfit({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--outfit',
});
export const calistoga = Calistoga({
  weight: ['400'],
  subsets: ['latin'],
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
      <body
        style={{WebkitTapHighlightColor: 'transparent'}}
        className={`${calistoga.variable} ${outfit.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
