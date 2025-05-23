import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const ptSans = PT_Sans({
  variable: '--font-pt-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Emily Lasko Photography",
  description: "Capturing life's precious moments through elegant photography",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/ScandiloverScript.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
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
      <body className={`${ptSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
