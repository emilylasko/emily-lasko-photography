export default function Portfolio() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-lg text-gray-700 mb-4">
        Here’s a collection of my favorite moments captured for couples, families, and individuals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your images here */}
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span>Image 1</span>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span>Image 2</span>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span>Image 3</span>
        </div>
      </div>
    </main>
  );
}
