
export default function Loading() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Loading Products...</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden shadow-sm animate-pulse bg-white"
          >
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"/>
              <div className="h-3 bg-gray-200 rounded w-1/2"/>
              <div className="h-3 bg-gray-200 rounded w-full"/>
              <div className="h-3 bg-gray-200 rounded w-5/6"/>
              <div className="h-4 bg-gray-300 rounded w-1/3 mt-4"/>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
