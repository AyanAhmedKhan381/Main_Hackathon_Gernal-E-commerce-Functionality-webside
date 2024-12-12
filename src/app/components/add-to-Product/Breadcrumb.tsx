// components/Breadcrumb.tsx
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
  return (
    <nav className="flex pl-14 items-center text-base text-gray-500 space-x-2">
      <Link href="/" className="hover:text-gray-700">
        Home
      </Link>
      <span className="text-gray-400">
        <IoIosArrowForward className="text-xl text-black" />
      </span>
      <Link href="/shop" className="hover:text-gray-700">
        Shop
      </Link>
      <span className="text-gray-400">
        <IoIosArrowForward className="text-xl text-black" />
      </span>
      <span className="font-medium text-gray-900 border-l border-gray-700 pl-3">Asgaard sofa</span>
    </nav>
  );
};

export default Breadcrumb;
