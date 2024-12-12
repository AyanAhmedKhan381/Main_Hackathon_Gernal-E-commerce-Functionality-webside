import Image from "next/image";
import Link from "next/link";




interface Props {
  image: string;
  title: string;
  description: string;
  price: string; // Updated to string to match the data format
  discount?: number; // Optional property
  tag?: string; // Optional property
}


export default function ProductCard({ image, title, description, price, discount, tag }:Props) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      {/* Product Image */}
      <Link href={"/product"}>
      <div className="relative group">
        <Image
          src={image}
          alt={title}
          width={150}
          height={300}
          className="w-full h-80 object-cover"
        />
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
        {/* Tag Badge */}
        {tag && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {tag}
          </div>
        )}
      </div>

      {/* Product Details */}
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold">{price}</span>
          {discount && (
            <span className="line-through text-gray-400 text-sm">
              {/* Mock original price */}
              Rp {parseInt(price.replace(/[^0-9]/g, "")) * 2}
            </span>
          )}
        </div>
      </div>
      </Link>
    </div>
  );
}