"use client"
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux Store/store"; // Adjust import based on your store path
import ShoppingCart from "./ShoppingCart";
import UserLogin from "./UserLogin";
import { useState } from "react";
import SearchIcon from "./SearchIcon";

export default function Navbar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Access the cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <header className="bg-white shadow-md w-full pt-1">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={"/icons/LOGO Icon.png"}
            alt="logo"
            width={90}
            height={150}
          />
          <Link href={"/"}>
            <h1 className="text-black mr-1 uppercase font-bold text-xl md:text-3xl">FurHavn</h1>
          </Link>
        </div>

        

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 lg:space-x-16 text-gray-700 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6 md:space-x-14 lg:mr-10">
          <UserLogin />

          <SearchIcon icon={          <FaSearch className="text-lg text-gray-700 font-bold mt-1 hover:text-yellow-500 duration-200 hover:animate-bounce" />}/>

          <Link href={"/checkout"}>
            <FaHeart className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />
          </Link>

          {/* Cart Icon with item count */}
          <ShoppingCart cartItems={cartItems} />
        </div>
      </nav>
    </header>
  );
}
