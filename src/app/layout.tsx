import './globals.css';

import { Inter } from 'next/font/google';

import { BgPattern } from '@/components/bg-pattern';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Frontend Mentor | Job Listings',
  description: 'Frontend Mentor Challenge - Job Listings solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-primaryBg font-sans antialiased">
        <BgPattern />
        {children}
      </body>
    </html>
  );
}
