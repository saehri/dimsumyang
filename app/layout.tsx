import Head from 'next/head';
import {Outfit, Calistoga} from 'next/font/google';

import './globals.css';

const outfit = Outfit({weight: ['400'], variable: '--outfit'});
const calistoga = Calistoga({weight: ['400'], variable: '--calistoga'});

export const metadata = {
  title: 'DimsumYang - Dimsum Prasmananya Indonesia',
  description:
    'Dimsum yang adalah pelopor dimsum prasmanan pertama di Indonesia. Kami menyediakan berbagai macam pilihan dimsum premium kulitas terbaik dengan harga yang murah.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        <meta name='theme-color' content='rgb(253, 40, 0)' />

        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <meta name='msapplication-TileColor' content='rgb(255, 236, 221)' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      </Head>

      <body className={`${outfit.variable} ${calistoga.variable}`}>
        {children}
      </body>
    </html>
  );
}
