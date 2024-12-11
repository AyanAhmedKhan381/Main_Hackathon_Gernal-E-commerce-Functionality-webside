import React from "react";

const WarrantyComparison = () => {
  return (
    <div className="w-[88%] flex items-center justify-center">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-2xl font-bold mb-8">Warranty</h1>
        <div className="grid grid-cols-3 gap-4 text-left">
          {/* Warranty Summary Column */}
          <div className="font-medium">
            <p className="mb-6">Warranty Summary</p>
            <p className="mb-6">Warranty Service Type</p>
            <p className="mb-6">Covered in Warranty</p>
            <p className="mb-6">Not Covered in Warranty</p>
            <p className="mb-6">Domestic Warranty</p>
          </div>

          {/* Column 1 Details */}
          <div className="border-l px-4">
            <p className="font-semibold mb-6">1 Year Manufacturing Warranty</p>
            <p className="text-sm mb-6">
              For Warranty Claims or Any Product Related Issues Please Email at
              <span className="font-medium"> operations@trevifurniture.com</span>
            </p>
            <p className="text-sm mb-6">Warranty Against Manufacturing Defect</p>
            <p className="text-sm mb-6">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p className="text-sm mb-6">1 Year</p>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition">
              Add To Cart
            </button>
          </div>

          {/* Column 2 Details */}
          <div className="border-l px-4">
            <p className="font-semibold mb-6">1.2 Year Manufacturing Warranty</p>
            <p className="text-sm mb-6">
              For Warranty Claims or Any Product Related Issues Please Email at
              <span className="font-medium"> support@xyz.com</span>
            </p>
            <p className="text-sm mb-6">Warranty of the product is limited to manufacturing defects only.</p>
            <p className="text-sm mb-6">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p className="text-sm mb-6">3 Months</p>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyComparison;
