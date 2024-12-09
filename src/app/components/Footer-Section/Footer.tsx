export default function Footer() {
    return (
      <footer className="bg-white text-black py-8 mt-12 pt-1">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="col-span-1">
            <p className="text-sm font-light">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>
  
          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
              </li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Enter Your Email Address
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </footer>
    );
  }
  