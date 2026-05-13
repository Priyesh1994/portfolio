import type { Metadata } from 'next';
import './globals.css';
import { logo } from '@/app/data/site';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
   icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
