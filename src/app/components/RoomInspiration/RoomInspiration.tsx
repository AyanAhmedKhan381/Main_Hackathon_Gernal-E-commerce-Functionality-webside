

import Image from "next/image";

const RoomInspiration = () => {
  return (
    <section className="bg-[#f8f5f0] py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototype of rooms
            that inspire you.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition">
            Explore More
          </button>
        </div>

        {/* Right Section - Carousel */}
        <div className="md:w- relative flex">
          <div className="relative overflow-hidden rounded-lg flex">
            {/* Main Image */}
            <Image
              src="/new images/Image.png" // Replace with your actual image path
              alt="Inner Peace Room"
              width={500}
              height={500}
              className="rounded-lg"
            />
        
          </div>
          <Image
              src="/new images/Rectangle 25.png" // Replace with your actual image path
              alt="Inner Peace Room"
              width={500}
              height={500}
              className="rounded-lg"
            />
          

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200">
              <span className="text-gray-800">{">"}</span>
            </button>
          </div>
        </div>
        
      </div>
      

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-3 h-3 rounded-full bg-yellow-600"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </section>
  );
};

export default RoomInspiration;
