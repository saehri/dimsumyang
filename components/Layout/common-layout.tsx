import {LazyMotion, domMax} from 'framer-motion';

import Footer from '../footer/footer';

export default function CommonLayout({children}: {children: React.ReactNode}) {
  return (
    <LazyMotion features={domMax}>
      {children}
      <Footer />
    </LazyMotion>
  );
}
