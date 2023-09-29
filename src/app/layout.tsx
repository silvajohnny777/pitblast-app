'use client';
import './global.css';

import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';

import PrivateRoute from '@/components/privateRoute';

import { CheckIsPublicRoute } from '@/functions/check-is-public-route';

const gotham = localFont({
  src: [
    {
      path: '../assets/fonts/Gotham-Font/GothamBold.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Gotham-Font/GothamMedium.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Gotham-Font/GothamBook.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-gotham'
});

const minion = localFont({
  src: [
    {
      path: '../assets/fonts/MinionPro/MinionPro-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-minion'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const isPublic = CheckIsPublicRoute(pathName!);

  return (
    <html lang="en">
      <head>
        <link rel="https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css" />
      </head>
      <body className={`${gotham.variable} ${minion.variable}`}>
        {isPublic && <div className=" ">{children}</div>}
        {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
