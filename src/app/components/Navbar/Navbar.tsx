


import Image from "next/image";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md w-[99%] lg:w-[1535px] pt-1 lg:h-[100px]">
      <nav className="container mx-auto px-4 lg:px-14 py-4 flex justify-between items-center w-[1286px]lg:w-[1286px] lg:h-[41px] mt-[29px] lg:left-[54px]">
        {/* Logo */}
        <div className="flex items-center">
          
          <Image
            src={"/icons/LOGO Icon.png"}
            alt="logo"
            width={90}
            height={150}
          />
          <Link href={"/"}>
          <h1 className="text-black mr-1 font-bold text-xl md:text-3xl">Furniro</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-16 lg:ml-9 text-gray-700">
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
        <div className="flex items-center space-x-6 md:space-x-12 lg:mr-10">
          <FaUser className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />
          <FaSearch className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />

          <Link href={"/checkout"}>
          <FaHeart className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />
          </Link>

          <Link href={"/cart"}>
          <FaShoppingCart className="text-gray-700 hover:text-yellow-500 text-lg cursor-pointer" />

          </Link>
        </div>
      </nav>
    </header>
  );
}

