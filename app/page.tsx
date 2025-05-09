"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative h-[80vh] flex items-center justify-center">
        <Image
          src="/header-image.png"
          alt="Emily Lasko Photography"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
          onError={(e) => {
            console.error('Error loading header image');
            // Fallback to SVG if PNG fails
            const target = e.target as HTMLImageElement;
            target.src = '/header-image.svg';
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-2xl md:text-4xl font-sans mb-8">
            Time flies in the blink of an eye—let's capture it forever.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 bg-white text-[#5f6041] rounded-full font-medium hover:bg-gray-100 transition text-lg"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-lg"
            >
              Let's Make Memories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
