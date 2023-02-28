import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { DM_Sans } from '@next/font/google';
import customFont from '@next/font/local';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dmsans'
});

const circularFont = customFont({
  src: [
    { path: './../public/fonts/circular-pro-book.woff2', weight: '400' },
    { path: './../public/fonts/circular-pro-medium.woff2', weight: '500' },
    { path: './../public/fonts/circular-pro-bold.woff2', weight: '700' }
  ],
  variable: '--font-circular'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${circularFont.variable} dark font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
