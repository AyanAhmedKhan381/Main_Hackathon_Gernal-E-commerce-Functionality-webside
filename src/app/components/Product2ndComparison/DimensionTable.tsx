// Install Tailwind CSS in your Next.js project using the official guide
// https://tailwindcss.com/docs/guides/nextjs

import React from 'react';

const DimensionsComparison = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-auto">
          <table className="min-w-full border-gray-200">
            <thead>
              <tr>

                <th className="border-r border-gray-300 text-lg px-4 py-2 text-left font-semibold text-gray-700">Dimensions</th>
                <th className="border-r border-gray-300 px-4 py-2 text-left font-semibold text-gray-700"></th>
                <th className="border-r border-gray-300 px-4 py-2 text-left font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Sales Package</td>
                <td className="border-r border-gray-300 px-4 py-2">1 sectional sofa</td>
                <td className="border-r border-gray-300 px-4 py-2">1 Three Seater, 2 Single Seater</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Model Number</td>
                <td className="border-r border-gray-300 px-4 py-2">TFCBLIGRBL6SRHS</td>
                <td className="border-r border-gray-300 px-4 py-2">DTUBLIGRBL568</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Secondary Material</td>
                <td className="border-r border-gray-300 px-4 py-2">Solid Wood</td>
                <td className="border-r border-gray-300 px-4 py-2">Solid Wood</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Configuration</td>
                <td className="border-r border-gray-300 px-4 py-2">L-shaped</td>
                <td className="border-r border-gray-300 px-4 py-2">L-shaped</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Upholstery Material</td>
                <td className="border-r border-gray-300 px-4 py-2">Fabric + Cotton</td>
                <td className="border-r border-gray-300 px-4 py-2">Fabric + Cotton</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600">Upholstery Color</td>
                <td className="border-r border-gray-300 px-4 py-2">Bright Grey & Lion</td>
                <td className="border-r border-gray-300 px-4 py-2">Bright Grey & Lion</td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 px-4 py-2 text-gray-600"> </td>
                <td className="border-r border-gray-300 px-4 py-2"> </td>
                <td className="border-r border-gray-300 px-4 py-2"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DimensionsComparison;
