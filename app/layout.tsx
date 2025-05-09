import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

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
      <head>
        <style>
          {`
            @font-face {
              font-family: 'Scandilover Script';
              src: url('/fonts/ScandiloverScript.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body
        className={`font-scandilover ${ptSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
