"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "../../Product-Page/ProductCard";
import { Products } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { FourProductQuery } from "@/sanity/lib/query";

const Shopping_Cards = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchData: Products[] = await client.fetch(FourProductQuery);
        console.log("Fetched Products:", fetchData);
        setProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Product Grid */}
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <button className="px-16 py-2 border border-yellow-600 font-semibold text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Shopping_Cards;
