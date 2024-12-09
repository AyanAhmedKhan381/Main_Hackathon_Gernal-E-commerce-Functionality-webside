export default function Pagination() {
    return (
      <div className="flex items-center justify-center mt-8 space-x-2">
        {/* Previous Button */}
        <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
          Previous
        </button>
  
        {/* Page Numbers */}
        <button className="px-3 py-1 rounded bg-yellow-500 text-white">1</button>
        <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
          2
        </button>
        <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
          3
        </button>
  
        {/* Next Button */}
        <button className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">
          Next
        </button>
      </div>
    );
  }
  