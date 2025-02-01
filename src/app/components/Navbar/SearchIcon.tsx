"use client"
import React, { useEffect, useState, useCallback, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux Store/cartSlice";
import { Products } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProductQuery } from "@/sanity/lib/query";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { FaTag, FaRegNewspaper, FaShoppingCart, FaTrash, FaCheckCircle, FaSearch } from "react-icons/fa";


interface Props {
  icon: ReactNode;
}

const SearchIcon = ({icon}:Props) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // New state for success message
  const [products, setProducts] = useState<Products[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [quantity, setquantityh] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchData: Products[] = await client.fetch(allProductQuery);
        setProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleCartToggle = (product: Products) => {
    const isInCart = cartItems.some((item: { id: number }) => item.id === Number(product._id));
    console.log('Product ID:', product._id, 'In Cart:', isInCart); // Debugging line
    
    if (isInCart) {
      dispatch(removeFromCart(Number(product._id)));
      setSuccessMessage("Product removed from cart.");
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
      )
      setSuccessMessage("Added to cart successfully!");
    }
  
    // Log to ensure success message state is being set
    console.log(successMessage); // Check success message is correctly set
    
    setTimeout(() => setSuccessMessage(null), 3000); // Hide message after 3 seconds
  };
  

  const fetchSearchResults = useCallback(async () => {
    if (!search) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && title match $search] | order(title asc)`;
      const params = { search: `${search}*` };
      const results = await client.fetch(query, params);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSearchResults();
    }, 100);
    return () => clearTimeout(debounce);
  }, [search, fetchSearchResults]);

  return (
    <section className="">
     

      {/* Search Bar */}
      <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
        <DialogTrigger onClick={() => setShowSearch(true)}>
          <div>
            {icon}
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
            <Input
              placeholder="Type to search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-5 mb-4"
            />
          </DialogHeader>
          <div className="overflow-y-scroll border rounded-md">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-10 text-yellow-500 space-y-2">
                <FaSpinner className="animate-spin text-4xl" />
                <p className="text-lg">Searching on progress...</p>
              </div>
            ) : searchResults.length ? (
              searchResults.map((product) => (
                <div key={product._id} className="flex items-center relative gap-4 p-4 border-b last:border-b-0">
                  <Link href={`/product/${product._id}`} passHref>
                    <div className="w-24 h-24 overflow-hidden rounded-md cursor-pointer" onClick={() => setShowSearch(false)}>
                      <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={110}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-lg">{product.title}</h4>
                    <p className="text-base text-gray-600">${product.price}</p>
                  </div>
                    
             {/* Success message */}
<div>
  {successMessage && (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold flex items-center space-x-2">
      <FaCheckCircle className="text-white" />
      <span>{successMessage}</span>
    </div>
  )}
</div>


                  {/* Add to Cart Button */}
<button
  className={`ml-auto py-2 px-4 rounded-lg text-white hover:bg-opacity-80 transition-all duration-300 ${
    cartItems.some((item: { id: number }) => item.id === Number(product._id))
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-green-500 hover:bg-green-600'
  }`}
  onClick={() => handleCartToggle(product)}
>
  {cartItems.some((item: { id: number }) => item.id === Number(product._id))
    ? 'Remove from Cart'
    : 'Add to Cart'}
</button>

                </div>
              ))
            ) : (
              <p className="text-center py-4 text-gray-500">No products match your search.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SearchIcon;
