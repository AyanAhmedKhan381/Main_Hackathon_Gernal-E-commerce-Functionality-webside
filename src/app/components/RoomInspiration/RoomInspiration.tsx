"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TwoProductQuery } from "@/sanity/lib/query";
import { Products } from "@/types/product";
import { useEffect, useState } from "react";
import Image from "next/image";

const RoomInspiration = () => {
  const [TwoProducts, TwoSetProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchData: Products[] = await client.fetch(TwoProductQuery);
        console.log("Fetched Products:", fetchData);
        TwoSetProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="bg-[#f8f5f0] py-12">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition">
            Explore More
          </button>
        </div>

        {/* Right Section - Carousel */}
        <div className="relative flex justify-center md:justify-end w-full md:w-1/2">
          {TwoProducts.length > 0 ? (
            TwoProducts.map((product, index) => (
              <div
                key={product._id}
                className={`relative gap-5 overflow-hidden rounded-lg flex-shrink-0 w-full max-w-[400px] h-[500px] ${
                  index === 0 ? "block" : "hidden sm:block"
                }`}
              >
                {/* Main Image */}
                <Image
                  src={urlFor(product.productImage).url()} // Dynamic image URL
                  alt={product.title || "Room Inspiration"}
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 right-0 flex items-center justify-end">
            <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200">
              <span className="text-gray-800">{">"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {TwoProducts.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? "bg-yellow-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default RoomInspiration;
