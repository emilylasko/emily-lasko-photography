export default function Investment() {
  return (
    <main className="min-h-screen p-8 bg-white text-[#231f20]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#5f6041]">Investment</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-center mb-8 text-[#746434]">
            Capturing your precious moments is an investment in memories that will last a lifetime.
          </p>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#5f6041]">Portrait Sessions</h2>
              <p className="mb-4">Starting at $350</p>
              <ul className="list-disc list-inside space-y-2">
                <li>1-hour session</li>
                <li>20+ edited digital images</li>
                <li>Online gallery</li>
                <li>Print release</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#5f6041]">Wedding Collections</h2>
              <p className="mb-4">Starting at $2,500</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Full day coverage</li>
                <li>Engagement session</li>
                <li>200+ edited digital images</li>
                <li>Online gallery</li>
                <li>Print release</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#5f6041]">Event Coverage</h2>
              <p className="mb-4">Starting at $500</p>
              <ul className="list-disc list-inside space-y-2">
                <li>2-hour minimum</li>
                <li>50+ edited digital images</li>
                <li>Online gallery</li>
                <li>Print release</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4">All collections include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Professional editing</li>
              <li>High-resolution digital files</li>
              <li>Print release</li>
              <li>Online gallery for 1 year</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#746434]">For custom packages or special requests, please contact me for a personalized quote.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 