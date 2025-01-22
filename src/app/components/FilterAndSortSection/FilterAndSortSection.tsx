export default function FilterAndSortSection() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[#faf4ed] p-4 border-b border-gray-200 space-y-4 md:space-y-0">
      {/* Filter and Layout Options */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto">
        {/* Filter Button */}
        <button className="flex items-center space-x-2 text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.293 6.293V20a1 1 0 01-.293.707l-4 4A1 1 0 019 23H5a1 1 0 01-1-1v-2H4a1 1 0 01-1-1v-4.586l-1.293-1.293A1 1 0 011 14V4z"
            />
          </svg>
          <span>Filter</span>
        </button>

        {/* Grid and List View */}
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Results Information */}
      <div className="text-gray-700 text-sm w-full sm:w-auto text-center">
        Showing <span className="font-bold">1–16</span>
      </div>

      {/* Show and Sort Options */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto">
        {/* Show Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 text-sm">Show</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 text-sm">Sort by</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
