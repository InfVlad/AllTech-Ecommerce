import '../styles/globals.css';
// import { Radio_Canada } from 'next/font/google';
// import { SessionProvider } from 'next-auth/react';
import { TRPCClientProvider } from '~/providers/trpcProvider';

export const metadata = {
  title: 'Organick - Ecommerce',
  description: 'Best place to buy organic food',
  // keywords: ['Frontend', 'Fullstack', 'Developer', 'Next.js'],
  // openGraph: {
  //   title: 'Vladimir Infante - Portfolio',
  //   description: "Vladimir Infante's Developer Portfolio built with NextJs 13.2",
  //   images: [
  //     {
  //       url: 'https://vlad-infante-portfolio.vercel.app/assets/portfolio-home-preview.png',
  //       width: 752,
  //       height: 400,
  //       alt: 'portfolio thumbnail',
  //     },
  //   ],
  // },
};
// const radioCanada = Radio_Canada({
//   subsets: ['latin'],
//   display: 'swap',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <TRPCClientProvider>
      <html lang='en' className='something'>
        {/* <SessionProvider> */}
        <body>{children}</body>
        {/* </SessionProvider> */}
      </html>
    </TRPCClientProvider>
  );
}
