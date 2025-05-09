"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      {/* Navbar with white background */}
      <div className="w-full bg-white shadow-sm">
        <header className="w-full py-2 px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Logo - Centered on mobile */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Emily Lasko Photography Logo"
                  width={180}
                  height={54}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#231f20] transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#231f20] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#231f20] transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            {/* Menu - Hidden on mobile unless open */}
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 text-[#231f20] font-medium text-sm font-[var(--font-pt-sans)] uppercase tracking-wide w-full md:w-auto bg-white md:bg-transparent absolute md:relative top-[80px] md:top-0 left-0 p-4 md:p-0 shadow-lg md:shadow-none z-40`}>
              <Link href="/portfolio" className="hover:text-[#5f6041] transition w-full md:w-auto text-center">
                Portfolio
              </Link>
              <Link href="/investment" className="hover:text-[#5f6041] transition w-full md:w-auto text-center">
                Investment
              </Link>
              <Link href="/about" className="hover:text-[#5f6041] transition w-full md:w-auto text-center">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#5f6041] transition w-full md:w-auto text-center">
                Contact
              </Link>
              <Link
                href="/contact"
                className="w-full md:w-auto px-4 py-1.5 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-sm text-center"
              >
                Book Your Shoot
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-80px)]">
        <Image
          src="/header-image.png"
          alt="Beautiful photography by Emily Lasko"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl font-light mb-8 md:mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-[var(--font-scandilover)]">
            Time flies in the blink of an eye—let's capture it forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-base sm:text-lg font-[var(--font-pt-sans)] uppercase tracking-wide"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#5f6041] rounded-full font-medium hover:bg-gray-100 transition text-base sm:text-lg font-[var(--font-pt-sans)] uppercase tracking-wide"
            >
              Let's Make Memories
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-[#5f6041]/10 py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#231f20] mb-4 md:mb-6 font-[var(--font-scandilover)]">
            Life moves fast, but your memories don't have to fade.
          </h2>
          <p className="text-base sm:text-lg text-[#5f6041] font-[var(--font-pt-sans)] leading-relaxed">
            My photography is all about preserving the fleeting moments—the stolen glances, the joyful laughter, the tiny details that tell your story. Whether you're celebrating a milestone or simply the beauty of everyday life, I'll make sure you have timeless, artful images to look back on for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}
