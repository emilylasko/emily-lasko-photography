"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-white shadow-sm relative">
      <header className="w-full py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo - Centered on mobile */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Link 
              href="/" 
              className="flex-shrink-0 hover:opacity-90 transition-opacity"
              aria-label="Emily Lasko Photography Home"
            >
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
          <nav 
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-center gap-4 text-[#231f20] font-medium text-sm font-[var(--font-pt-sans)] uppercase tracking-wide w-full md:w-auto bg-white md:bg-transparent fixed md:relative top-0 md:top-0 left-0 p-4 md:p-0 shadow-lg md:shadow-none z-40`}
          >
            {/* Close button for mobile menu */}
            <button
              onClick={closeMenu}
              className="md:hidden absolute top-4 right-4 p-2 text-[#231f20] hover:text-[#5f6041] transition"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link 
              href="/portfolio" 
              className="hover:text-[#5f6041] transition w-full md:w-auto text-center mt-16 md:mt-0"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/investment" 
              className="hover:text-[#5f6041] transition w-full md:w-auto text-center"
              onClick={closeMenu}
            >
              Investment
            </Link>
            <Link 
              href="/about" 
              className="hover:text-[#5f6041] transition w-full md:w-auto text-center"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-[#5f6041] transition w-full md:w-auto text-center"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="w-full md:w-auto px-4 py-1.5 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-sm text-center"
              onClick={closeMenu}
            >
              Book Your Shoot
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
} 