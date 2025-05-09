"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative h-[80vh] flex items-center justify-center">
        <Image
          src="/header-image.jpg"
          alt="Emily Lasko Photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-2xl md:text-4xl font-scandilover mb-4">
            Time stands still for no one, but memories last forever.
          </p>
          <h2 className="text-3xl md:text-5xl font-scandilover mb-8">
            Let me capture yours.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-lg"
          >
            Book Your Shoot
          </Link>
        </div>
      </section>
    </>
  );
}
