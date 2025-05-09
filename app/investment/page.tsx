"use client";

export default function Investment() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-scandilover text-center mb-16">
          Investment
        </h1>

        {/* Wedding Collections */}
        <section className="mb-20">
          <h2 className="text-3xl font-scandilover text-center mb-12">Wedding Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Petite Collection */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Petite Collection</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$1,500</p>
              <p className="text-gray-600 mb-6">Perfect for courthouse weddings, micro ceremonies, or intimate celebrations.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>5 hours of continuous coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>One photographer (Emily)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>250+ high-resolution edited images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>10 sneak peek images within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 40 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>

            {/* Classic Collection */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Classic Collection</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$2,400</p>
              <p className="text-gray-600 mb-6">A well-rounded experience for full wedding day coverage with layered storytelling.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>8 hours of coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Two photographers (Emily + second shooter for 3 hours)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>400+ high-resolution edited images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>10 sneak peek images within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 60 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>

            {/* Signature Collection */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Signature Collection</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$3,600</p>
              <p className="text-gray-600 mb-6">The full story—captured beautifully, from the quiet morning to the sparkler exit.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Up to 10 hours of coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Two photographers (Emily + second shooter for full day)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>600+ high-resolution edited images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Complimentary 1-hour engagement session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>10 sneak peek images within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 100 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wedding Add-Ons */}
        <section className="mb-20">
          <h2 className="text-3xl font-scandilover text-center mb-12">À La Carte Wedding Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Additional Hour of Coverage (Emily)</span>
                <span className="font-semibold">$300/hour</span>
              </p>
              <p className="flex justify-between">
                <span>Second Shooter Additional Hour</span>
                <span className="font-semibold">$75/hour</span>
              </p>
              <p className="flex justify-between">
                <span>Rehearsal Dinner Coverage</span>
                <span className="font-semibold">$750 for 2 hours</span>
              </p>
              <p className="flex justify-between">
                <span>Bridal Shower Coverage</span>
                <span className="font-semibold">$500 for 2 hours</span>
              </p>
              <p className="flex justify-between">
                <span>Engagement Session</span>
                <span className="font-semibold">$300 (complimentary in Signature Collection)</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Content Creator Add-On</span>
                <span className="font-semibold">$500 full-day coverage</span>
              </p>
              <p className="flex justify-between">
                <span>Film Photography Add-On</span>
                <span className="font-semibold">Starting at $250</span>
              </p>
              <p className="flex justify-between">
                <span>Fine Art Wedding Album</span>
                <span className="font-semibold">Starting at $650</span>
              </p>
              <p className="flex justify-between">
                <span>Parent Albums</span>
                <span className="font-semibold">$300 each</span>
              </p>
              <p className="flex justify-between">
                <span>Travel Beyond Included Radius</span>
                <span className="font-semibold">$0.65/mile or custom quote</span>
              </p>
            </div>
          </div>
        </section>

        {/* Lifestyle Sessions */}
        <section className="mb-20">
          <h2 className="text-3xl font-scandilover text-center mb-12">Lifestyle Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Session */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Full Session</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$250</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>60 minutes of shooting time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>1 outfit, 1 location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>40+ edited high-resolution images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 30 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>

            {/* Mini Session */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Mini Session</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$150</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>20 minutes of shooting time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>1 outfit, 1 location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>15+ edited high-resolution images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 30 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>

            {/* Extended Family Session */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-scandilover mb-4">Extended Family Session</h3>
              <p className="text-3xl font-bold text-[#5f6041] mb-6">$375</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>60 minutes of shooting time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>1 location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Full group photos + smaller family groupings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>50+ edited high-resolution images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Online gallery with download + print rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5f6041] mr-2">•</span>
                  <span>Travel within 30 miles of Lancaster, PA</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lifestyle Add-Ons */}
        <section>
          <h2 className="text-3xl font-scandilover text-center mb-12">À La Carte Lifestyle Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Additional 30 Minutes</span>
                <span className="font-semibold">$100</span>
              </p>
              <p className="flex justify-between">
                <span>Extra Outfit or Location</span>
                <span className="font-semibold">$50</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Fine Art Album</span>
                <span className="font-semibold">Starting at $350</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 