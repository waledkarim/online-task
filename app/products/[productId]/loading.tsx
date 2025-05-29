export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Image/Video Skeletons */}
        <div className="space-y-4">
          <div className="w-full h-72 bg-gray-200 rounded-xl" />
          <div className="w-full h-64 bg-gray-200 rounded-xl" />
        </div>

        {/* Right: Product Info Skeletons */}
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-20 w-full bg-gray-200 rounded" />
          <div className="h-10 w-32 bg-blue-200 rounded" />
        </div>
      </div>
    </main>
  );
}
