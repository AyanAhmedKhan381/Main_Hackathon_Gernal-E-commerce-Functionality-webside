"use client";
import { useState, useEffect } from "react";
import "./Loader.css";
import { client } from "@/sanity/lib/client";
import { Single_Product } from "@/sanity/lib/query";
import { Products } from "@/types/product";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaCheckCircle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux Store/cartSlice"; // Import addToCart action
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};


const Product_Hero_Card = () => {
  const [product, setProduct] = useState<Products | null>(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  // State for quantity
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        try {
          const fetchData: Products[] = await client.fetch(Single_Product, { id });
          setProduct(fetchData[0]);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
     dispatch(
             addToCart({
               id: Number(product._id),
               title: product.title,
               price: product.price,
               image: urlFor(product.productImage).url(),
               quantity: quantity,
               productPrice: product.price, // Ensure productPrice is added
               productName: product.title,
               productImage: urlFor(product.productImage).url(),
             })
           );
      toast.success("Add to Cart Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // Handle increasing and decreasing quantity
  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      if (type === "increase") return prevQuantity + 1;
      if (type === "decrease" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div> {/* This will display the loader */}
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center mt-5 mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row p-6 rounded-lg bg-white shadow-md w-full">
          {/* Left: Image Gallery */}
          <div className="flex flex-col items-center space-y-4 mx-auto">
            {/* Image Thumbnails */}
            <div className="space-y-2 flex flex-wrap justify-center mr-3.5">
              <Image
                key={product._id}
                src={urlFor(product.productImage).url()}
                width={70}
                height={70}
                alt={`Thumbnail ${product.title}`}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-105 transition-all"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full md:w-96 h-64 md:h-96 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={urlFor(product.productImage).url()}
              width={400}
              height={400}
              alt="Main Product"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Product Details */}
          <div className="ml-6 flex-1">
            <h1 className="text-5xl mb-3 font-semibold">{product.title}</h1>
            <h1 className="text-2xl font-bold text-gray-600">${product.price}</h1>
            <div className="flex items-center space-x-2 mt-2 mb-2">
              <span className="text-yellow-300 text-lg flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <span className="text-gray-600 text-sm">| 5 Customer Reviews</span>
            </div>

            <div>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base line-clamp-6">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <h2 className="font-semibold">Size</h2>
              <div className="flex space-x-2 mt-2 text-sm">
                <button className="px-3 py-1.5 border rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 transition">L</button>
                <button className="px-3 py-1.5 border rounded-lg bg-[#F9F1E7] hover:bg-[#F1D27A] transition">XL</button>
                <button className="px-3 py-1.5 border rounded-lg bg-[#F9F1E7] hover:bg-[#F1D27A] transition">XS</button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4 relative">
              <h2 className="font-semibold">Color</h2>
              <div className="flex space-x-2 mt-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer hover:ring-4 hover:ring-blue-300 transition"></div>
                <div className="w-8 h-8 bg-black rounded-full cursor-pointer hover:ring-4 hover:ring-black transition"></div>
                <div className="w-8 h-8 bg-yellow-600 rounded-full cursor-pointer hover:ring-4 hover:ring-yellow-300 transition"></div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="px-4 py-1 border border-gray-600 text-black rounded-lg hover:bg-gray-100 transition"
              >
                <span className=""> -</span>
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="px-4 py-1 border border-gray-600 text-black rounded-lg hover:bg-gray-100 transition"
              >
                <span>+</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="px-10 py-3 border border-gray-600 text-black rounded-xl hover:bg-yellow-600 hover:text-white transition"
              >
                Add To Cart
              </button>
              <button className="px-10 py-3 border border-gray-600 text-black rounded-xl hover:bg-gray-200 transition">+ Compare</button>
            </div>

            {/* Product Details */}
            <div className="mt-4 gap-5 text-gray-700">
              <p className="mt-2">
                SKU <span className="ml-12 pl-0.5 mr-2 mb-3">:</span>SS001
              </p>
              <p className="mt-2">
                Category<span className="ml-3 mr-2 mb-3">:</span>Sofas
              </p>
              <p className="mt-2">
                Tags<span className="ml-12 mr-2 mb-3">:</span>Sofa, Chair, Home, Shop
              </p>
              <div className="flex mt-2">
                Share<span className="ml-10 mr-2 mb-3 flex items-center justify-center">:</span>
                <div className="items-center text-xl mb-3 flex space-x-4">
                  <FaFacebook />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default Product_Hero_Card;
