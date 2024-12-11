import Link from "next/link";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <div className="p-6 mx-auto mt-10 mb-10">
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="col-span-1 mt-5">
          <Link
            href="#"
            className="text-black text-2xl font-medium block"
          >
            Go to Product <br /> page for more <br /> Products
          </Link>

          <button className="text-gray-700 mt-5 border-b border-gray-700">
          View More
          </button>
        </div>

        {/* Product Section */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProductCard
            title="Asgaard Sofa"
            price="Rs. 250,000.00"
            rating={4.7}
            reviews={204}
            image="/comparison Images/Asgaard sofa 3.png"
          />
          <ProductCard
            title="Outdoor Sofa Set"
            price="Rs. 224,000.00"
            rating={4.2}
            reviews={145}
            image="/comparison Images/Outdoor sofa set 1.png"
          />
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold mb-2">Add A Product</label>
          <select className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">
            <option>Choose a Product</option>
          </select>
        </div>
      </div>
    </div>
  );
}
