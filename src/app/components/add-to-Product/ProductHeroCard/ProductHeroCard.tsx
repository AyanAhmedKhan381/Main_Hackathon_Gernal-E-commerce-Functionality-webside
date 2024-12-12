import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const Product_Hero_Card = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-col md:flex-row p-6 rounded-lg">
        {/* Left: Image Gallery */}
        <div className="flex flex-col items-center space-y-4 mx-auto">
          {/* Thumbnails */}
          <div className="space-y-2">
            <Image
              src="/dynamic_Product_card_Images/Group 94.png"
              width={70}
              height={70}
              alt="Thumbnail 1"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <Image
              src="/dynamic_Product_card_Images/Mask group (3).png"
              width={70}
              height={70}
              alt="Thumbnail 2"
              className="w-16 h-16 bg-[#F9F1E7] object-cover rounded-lg"
            />
            <Image
              src="/dynamic_Product_card_Images/Mask group (1).png"
              width={70}
              height={70}
              alt="Thumbnail 2"
              className="w-16 h-16 bg-[#F9F1E7] object-cover rounded-lg"
            />
            <Image
              src="/dynamic_Product_card_Images/Mask group (2).png"
              width={70}
              height={70}
              alt="Thumbnail 2"
              className="w-16 h-16 bg-[#F9F1E7] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="w-fit h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/dynamic_Product_card_Images/Group 95.png"
            width={400}
            height={400}
            alt="Main Product"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Product Details */}
        <div className="ml-6 flex-1">
          <h1 className="text-5xl mb-3">Asgaard sofa</h1>
          <h1 className="text-2xl font-bold text-gray-600">Rs. 250,000.00</h1>
          <div className="flex items-center space-x-2 mt-2 mb-2">
            <span className="text-yellow-300 text-lg flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />         </span>
            <span className="text-gray-600 text-sm">| 5 Customer Reviews</span>
          </div>

          <div>
            <p className='text-gray-800 text-sm'>
                Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.</p>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <h2 className="font-semibold">Size</h2>
            <div className="flex space-x-2 mt-2 text-sm">
              <button className="px-3 py-1.5 border rounded-lg bg-yellow-600 text-white">L</button>
              <button className="px-3 py-1.5 border rounded-lg bg-[#F9F1E7]">XL</button>
              <button className="px-3 py-1.5 border rounded-lg bg-[#F9F1E7]">XS</button>
            </div>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <h2 className="font-semibold">Color</h2>
            <div className="flex space-x-2 mt-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center space-x-4">
            <button className="px-8 py-2.5 border border-gray-600 text-black rounded-lg"><span className='mr-3'>-</span>   1    <span className='ml-3'>+</span></button>
            <button className="px-10 py-3 border border-gray-600 text-black rounded-xl">Add To Cart</button>
            <button className="px-10 py-3 border border-gray-600 text-black rounded-xl">+ Compare</button>
          </div>

          {/* Product Details */}
          <div className="mt-4 gap-5 text-gray-700">
            <p className='mt-2'>
              SKU <span className='ml-12 pl-0.5 mr-2 mb-3'>:</span>SS001
            </p>
            <p className='mt-2'>
            Category<span className='ml-3 mr-2 mb-3'>:</span>Sofas
            </p>
            <p className='mt-2'>
            Tags<span className='ml-12 mr-2 mb-3'>:</span>Sofa, Chair, Home, Shop
            </p>
            <div className='flex mt-2'>
            Share<span className='ml-10 mr-2 mb-3 flex items-center justify-center'>:</span> <div className='items-center text-xl mb-3 flex space-x-4'><FaFacebook/> <FaLinkedin/> <FaTwitter/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Hero_Card;
