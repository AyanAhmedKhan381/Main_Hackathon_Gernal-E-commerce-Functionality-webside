"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux Store/cartSlice";
import { Products } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProductQuery } from "@/sanity/lib/query";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { FaTag, FaRegNewspaper, FaShoppingCart, FaTrash, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";


const ProductsSection = () => {
  const [notificationProduct, setNotificationProduct] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // State to track loading
  const [quantity, setQuantity] = useState<number>(1); // State to track loading
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const [products, setProducts] = useState<Products[]>([]);

  // Fetch products on initial load
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true); // Set loading to true before fetching
      try {
        const fetchData: Products[] = await client.fetch(allProductQuery);
        setProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    }
    fetchProducts();
  }, []);

  const handleCartToggle = (product: Products) => {
    const isInCart = cartItems.some((item: { id: number }) => item.id === Number(product._id));

    if (isInCart) {
      dispatch(removeFromCart(Number(product._id)));
    } else {
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
      
      // Show success toast outside of the dispatch function
      toast.success("Add to Cart Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      setNotificationProduct(product._id); // Show notification for the clicked product
      setTimeout(() => setNotificationProduct(null), 3000); // Hide notification after 3 seconds
    }
  };

  const isProductInCart = (productId: string | number) => {
    return cartItems.some((item: { id: number | string }) => item.id === productId);
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Show loading spinner while fetching products */}
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center space-y-4">
            <FaSpinner className="animate-spin text-4xl text-yellow-500" />
            <p className="text-lg text-gray-500">Fetching products, please wait...</p>
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden transform hover:translate-y-2"
            >
              <Link href={`/product/${product._id}`} passHref>
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    fill
                    className="object-cover relative group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Labels for Discount and New */}
              <div className="absolute top-2 left-2 flex space-x-2">
                {product.dicountPercentage > 0 && (
                  <label 
                     className="text-sm bg-red-500 gap-1.5 mr-28 text-white px-2 py-1 rounded-lg font-semibold flex items-center space-x-1">
                    <FaTag />
                    {product.dicountPercentage}% off
                  </label>
                )}
                {product.isNew && (
                 <label
                    className="ml-2 text-sm bg-green-500 gap-1.5 text-white px-3 py-1 rounded-lg font-semibold flex items-center space-x-1">
                    <FaRegNewspaper />
                    New
                 </label>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2">{product.description}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>

                  {/* Add/Remove Button */}
                  <button
                    onClick={() => handleCartToggle(product)}
                    className={`px-5 py-2.5 text-white font-semibold rounded-lg w-fit h-fit transition-all duration-300 transform ${
                      isProductInCart(product._id)
                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 scale-105"
                        : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 scale-105"
                    } flex justify-center items-center`}
                  >
                    {isProductInCart(product._id) ? <FaTrash /> : <FaShoppingCart />}
                    <span className="ml-2">
                      {isProductInCart(product._id) ? "Remove from Cart" : "Add to Cart"}
                    </span>
                  </button>
                </div>

                {/* Show notification for the current product */}
                {notificationProduct === product._id && (
                  <div className="absolute z-50 top-4 right-4 flex items-center gap-2 bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-md shadow-lg">
                    <FaCheckCircle />
                    Added to Cart!
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductsSection;
