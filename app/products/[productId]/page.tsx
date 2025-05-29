import { ProductsData } from "@/app/types/types";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ productId: string }> }) {

  const { productId } = await params;
  const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product", {
    cache: "no-store",
  });

  const {data: products} = await res.json();
  const product = products.find((p: ProductsData) => p._id === productId);
  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">

      <div className="grid md:grid-cols-2 gap-8">

        <div className="space-y-4">
          <img
            src={product.images[0].optimizeUrl || product.images[0].secure_url}
            alt={product.name}
            className="w-full h-72 object-cover rounded-xl border"
          />
          {product.video.secure_url && (
            <video
              controls
              className="w-full h-64 object-cover rounded-xl border"
              src={product.video.secure_url}
            />
          )}
        </div>


        <div className="space-y-4">

          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500">Category: {product.category.name || "Uncategorized"}</p>
          <p className="text-lg text-green-600 font-semibold">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>

      </div>

    </main>
  );
}
