import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Navbar with white background */}
      <div className="w-full bg-white shadow-sm">
        <header className="w-full py-2 px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
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

            {/* Menu */}
            <nav className="flex items-center gap-4 text-[#231f20] font-medium text-sm font-[var(--font-pt-sans)] uppercase tracking-wide">
              <Link href="/services" className="hover:text-[#5f6041] transition">
                Services
              </Link>
              <Link href="/investment" className="hover:text-[#5f6041] transition">
                Investment
              </Link>
              <Link href="/portfolio" className="hover:text-[#5f6041] transition">
                Portfolio
              </Link>
              <Link href="/resources" className="hover:text-[#5f6041] transition">
                Resources
              </Link>
              <Link href="/faq" className="hover:text-[#5f6041] transition">
                FAQ
              </Link>
              <Link href="/blog" className="hover:text-[#5f6041] transition">
                Blog
              </Link>
              <Link href="/about" className="hover:text-[#5f6041] transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#5f6041] transition">
                Contact
              </Link>
              <Link
                href="/contact"
                className="ml-4 px-4 py-1.5 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-sm"
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
          <p className="text-4xl md:text-5xl text-white max-w-3xl font-light mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-[var(--font-scandilover)]">
            Time flies in the blink of an eye—let's capture it forever.
          </p>
          <div className="flex gap-6">
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-[#5f6041] text-white rounded-full font-medium hover:bg-[#746434] transition text-lg font-[var(--font-pt-sans)] uppercase tracking-wide"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-[#5f6041] rounded-full font-medium hover:bg-gray-100 transition text-lg font-[var(--font-pt-sans)] uppercase tracking-wide"
            >
              Let's Make Memories
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-[#5f6041]/10 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#231f20] mb-6 font-[var(--font-scandilover)]">
            Life moves fast, but your memories don't have to fade.
          </h2>
          <p className="text-lg text-[#5f6041] font-[var(--font-pt-sans)] leading-relaxed">
            My photography is all about preserving the fleeting moments—the stolen glances, the joyful laughter, the tiny details that tell your story. Whether you're celebrating a milestone or simply the beauty of everyday life, I'll make sure you have timeless, artful images to look back on for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}
