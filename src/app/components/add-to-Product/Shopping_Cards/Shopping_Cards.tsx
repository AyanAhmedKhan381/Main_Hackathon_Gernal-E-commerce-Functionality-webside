import React from "react";
import ProductCard from "../../Product-Page/ProductCard";

export const products = [
  {
    image: "/PRODUCT-Images/Images (2).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (3).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/image 4 (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
];

const Shopping_Cards = () => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Product Grid */}
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <button className="px-16 py-2 border border-yellow-600 font-semibold text-yellow-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Shopping_Cards;
