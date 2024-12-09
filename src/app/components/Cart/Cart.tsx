

import Image from 'next/image';
import React from 'react';

const Cart = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-5 lg:p-10">
      {/* Cart Table */}
      <div className="w-full lg:w-2/3 bg-white p-5 shadow-md rounded-md mb-5 lg:mb-0 lg:p-10">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#F9F1E7]">
              <th className="p-2 text-sm md:p-3 md:text-base">Product</th>
              <th className="p-2 text-sm md:p-3 md:text-base">Price</th>
              <th className="p-2 text-sm md:p-3 md:text-base">Quantity</th>
              <th className="p-2 text-sm md:p-3 md:text-base">Subtotal</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 md:p-3 flex items-center">
                <Image
                  src="/images/Group 146.png"
                  alt="Asgaard sofa"
                  className="w-12 h-12 md:w-16 md:h-16 mr-2 md:mr-3 lg:mt-10"
                  width={120}
                  height={120}
                />
                <span className="text-xs md:text-sm">Asgaard sofa</span>
              </td>
              <td className="p-2 md:p-3 text-xs md:text-sm">Rs. 250,000.00</td>
              <td className="p-2 md:p-3">
                <input
                  type="number"
                  value="1"
                  className="w-10 md:w-12 border rounded p-1 text-center text-xs md:text-sm"
                  readOnly
                />
              </td>
              <td className="p-2 md:p-3 text-xs md:text-sm">Rs. 250,000.00</td>
              <td className="p-2 md:p-3">
                <button className="text-red-500 hover:text-red-700">
                  <Image src="/images/Vector.png" alt="Delete Icon" width={20} height={20}
                   />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-full lg:w-1/4 bg-[#F9F1E7] p-5 lg:py-36 rounded-md relative">
        <h2 className="text-xl md:text-3xl font-semibold mb-5 text-center md:absolute md:top-3 lg:pl-20 lg:top-8 ">Cart Totals</h2>
        <div className="w-full md:w-[70%] mx-auto">
          <div className="flex justify-between mb-3 text-sm md:text-base">
            <span>Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-5 text-sm md:text-base">
            <span>Total</span>
            <span className="text-yellow-500 font-bold">Rs. 250,000.00</span>
          </div>
        </div>
        <button className="w-fit lg:w-fit border border-black text-black py-2.5 px-12 lg:py-3.5 lg:px-16 rounded-xl lg:absolute lg:bottom-20 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;



//       <div className="w-1/4 bg-[#F9F1E7] p-5 py-36 shadow-md rounded-md ml-5 relative">
//         <h2 className="text-3xl font-semibold mb-5 absolute top-8 items-center justify-center pl-20">Cart Totals</h2>
//         <div className='w-[70%] ml-12'>
//         <div className="flex justify-between mb-3">
//           <span>Subtotal</span>
//           <span className="text-gray-500">Rs. 250,000.00</span>
//         </div>
//         <div className="flex justify-between mb-5">
//           <span>Total</span>
//           <span className="text-yellow-500 font-bold">Rs. 250,000.00</span>
//         </div>
//         </div>
//         <button className="w-fit border border-black text-black py-2.5 px-12 rounded-xl absolute bottom-16 ml-16 ">Check Out</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
