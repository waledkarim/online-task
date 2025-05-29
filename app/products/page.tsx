import Link from "next/link";
import { ProductsData } from "../types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome to all products",
    description: "This is the page that shows all products"
}

export default async function Page() {

  const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product", {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            products.map((product: ProductsData) => (
          <div
            key={product._id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <img
              src={product.images[0].optimizeUrl || product.images[0].secure_url}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">

              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.category.name}</p>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">

                <span className="text-lg font-bold text-green-600">${product.price}</span>
                <Link href={`/products/${product._id}`} className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 font-medium">
                  View
                </Link>

              </div>

            </div>
          </div>
        ))
        }
      </div>

    </main>
  );
}
