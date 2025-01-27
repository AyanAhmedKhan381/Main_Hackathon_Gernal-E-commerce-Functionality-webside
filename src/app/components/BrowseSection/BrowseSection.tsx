"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ThreeProductQuery } from "@/sanity/lib/query";
import { Products } from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon for loading

const BrowseSection = () => {
  const [ThreeProducts, ThreeSetProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchData: Products[] = await client.fetch(ThreeProductQuery);
        console.log("Fetched Products:", fetchData);
        ThreeSetProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-50 mx-auto max-w-[1200px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Browse The Range</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Discover our unique range of furniture for every room in your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Show a loading spinner while fetching */}
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center space-y-4">
            <FaSpinner className="animate-spin text-4xl text-yellow-500" />
            <p className="text-lg text-gray-500">Loading products...</p>
          </div>
        ) : (
          // Render dynamic products after fetching
          ThreeProducts.length > 0 ? (
            ThreeProducts.map((product) => (
              <div key={product._id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title || "Product Image"}
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform transform group-hover:scale-105"
                    priority // This will ensure images load first
                  />
                </div>
                <h3 className="text-center mt-4 text-lg font-medium">
                  {product.title || "Untitled Product"}
                </h3>
              </div>
            ))
          ) : (
            // If no products are fetched, show a fallback message
            <div className="col-span-full flex flex-col items-center justify-center space-y-4">
              <p className="text-lg text-gray-500">No products available.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default BrowseSection;
