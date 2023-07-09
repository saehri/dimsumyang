import localFont from 'next/font/local';

import './globals.css';
import {Suspense} from 'react';

import Header from '@/components/header/header';
import NavigationEvent from '@/components/loaders/nav-events';
import PageLoader from '@/components/loaders/loader';

const outfit = localFont({src: './outfit.ttf', variable: '--outfit'});
const calistoga = localFont({src: './calistoga.ttf', variable: '--calistoga'});

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

        <Suspense fallback={<PageLoader />}>
          <NavigationEvent />
        </Suspense>
      </body>
    </html>
  );
}
