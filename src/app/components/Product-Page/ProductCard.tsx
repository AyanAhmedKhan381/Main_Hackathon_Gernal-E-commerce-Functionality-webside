"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux Store/cartSlice"; // Ensure the path to your Redux store is correct
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import CSS
import Link from "next/link";

export interface Products {
  productImage: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  tags?: string[];
  dicountPercentage?: number;
  description: string;
  isNew?: boolean;
  _id: string;
  title: string;
}

const ProductCard = ({
  productImage,
  title = "No Title",
  description = "No Description",
  price = 0,
  dicountPercentage = 0,
  tags = [],
  _id,
}: Products) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: Number(_id),
        title,
        price,
        image: urlFor(productImage).url(),
        quantity: 1,
        productPrice: 0,
        productName: "",
        productImage: "",
      })
    );
    toast.success("Order Successful On Cash Delivery", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/product/${_id}`}>
        <div className="relative group">
          <Image
            src={urlFor(productImage).url()}
            alt={title}
            width={300}
            height={400}
            className="w-full h-80 object-cover"
          />
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Discount Badge */}
      {dicountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{dicountPercentage}%
        </div>
      )}

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          {dicountPercentage > 0 && (
            <span className="line-through text-gray-400 text-sm">
              $
              {Math.round(price * (1 + dicountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all"
        >
          Add to Cart
        </button>
      </div>

      {/* ✅ Toast Container added here */}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
