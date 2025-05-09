import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const scandilover = localFont({
  src: '../../public/fonts/ScandiloverScript.ttf',
  variable: '--font-scandilover',
  display: 'swap',
  preload: true,
  fallback: ['serif'],
});

const ptSans = PT_Sans({
  variable: '--font-pt-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Emily Lasko Photography",
  description: "Capturing life's precious moments through elegant photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${scandilover.variable} ${ptSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
