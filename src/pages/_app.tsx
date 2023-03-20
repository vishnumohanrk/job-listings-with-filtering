import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { BgPattern } from '@/components/bg-pattern';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BgPattern />
      <main
        className={`${inter.variable} mx-auto max-w-[1110px] -translate-y-11 pb-20 font-sans antialiased max-xl:px-4`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
