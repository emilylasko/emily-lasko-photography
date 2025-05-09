"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-scandilover text-center mb-16">
          Meet The Photographer
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[600px] w-full">
            <Image
              src="/emily-photo.jpg"
              alt="Emily Lasko - Photographer"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Text Column */}
          <div className="space-y-6 text-lg">
            <p>
              Hello! My name is Emily, a wedding and family photographer based in beautiful Lancaster County Pennsylvania. When I'm not behind the camera, I'm at home working for a nonprofit that's close to my heart, or spending quality time with my husband and our two boys. Family means everything to me, and it's one of the reasons I love photographing weddings and family portraits. I know firsthand how quickly time passes, and I'm passionate about helping you preserve those precious memories—whether it's your wedding day or the unforgettable crazy moments of life with your family. If there's one thing I've learned, it's that the unpredictable moments are often the ones we cherish the most.
            </p>

            <p>
              Beyond photography and marketing, you'll likely find me leaning into the fun moments of life: watching my boys grow, laughing with the people I love most, or sneaking in a quiet moment after my kids go to bed with a pint of Ben & Jerry's.
            </p>

            <p>
              I've always been drawn to photography to have the ability to capture moments that go by so quickly and turn them into timeless memories that tell a story for years to come. There's something truly special about witnessing and capturing those raw emotions, small details, and unforgettable moments in life.
            </p>

            <p>
              My approach to photography reflects that—capturing the real, genuine moments that mean the most. I can't wait to help tell your story through images you'll cherish for generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 