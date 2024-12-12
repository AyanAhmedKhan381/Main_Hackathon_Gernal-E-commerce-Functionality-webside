import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 mt-12 pt-8 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="col-span-1">
          <h1 className="font-bold text-xl mb-5">Funiro.</h1>
          <p className="text-sm font-light">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-8 text-sm">
            <li>
              <Link href="#" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Shop</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-5">Help</h3>
          <ul className="space-y-8 text-sm">
            <li>
              <Link href="#" className="hover:text-gray-400">Payment Options</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Returns</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm border-b border-gray-700 w-auto">
              Enter Your Email Address
            </p>
            <h1
              className="text-sm text-black uppercase border-b border-gray-700 cursor-pointer"
            >
              Subscribe
            </h1>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}
