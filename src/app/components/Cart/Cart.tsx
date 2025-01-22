
"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux Store/store";
import { removeFromCart } from "../../../Redux Store/cartSlice";
import Link from "next/link";
import Image from "next/image"; // Importing Image from Next.js


const Cart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();



  const handleRemoveItem = (id: number) => {
    console.log("Attempting to remove item with ID:", id); // Log the ID
    if (isNaN(id)) {
      console.error("Invalid ID:", id); // Log the invalid ID
      return;
    }
    dispatch(removeFromCart(id));
  };
  
  

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
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-xl mt-10">
                  Your cart is empty
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item.id || index}>
                  <td className="p-2 md:p-3 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 md:w-16 md:h-16 mr-2 md:mr-3"
                      width={120}
                      height={120}
                    />
                    <span className="text-xs md:text-sm">{item.title}</span>
                  </td>
                  <td className="p-2 md:p-3 text-xs md:text-sm">${item.price}</td>
                  <td className="p-2 md:p-3">
                    <input
                      type="number"
                     
                      className="w-10 md:w-12 border rounded p-1 text-center text-xs md:text-sm"
                    />
                  </td>
                  <td className="p-2 md:p-3 text-xs md:text-sm">
                    ${item.price * item.quantity}
                  </td>
                  <td className="p-2 md:p-3">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Image
                        src="/images/Vector.png"
                        alt="Delete Icon"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-full ml-7 lg:w-1/4 bg-[#F9F1E7] p-5 lg:py-36 rounded-md relative">
        <h2 className="text-xl md:text-3xl font-semibold mb-5 text-center md:absolute md:top-3 lg:pl-20 lg:top-8">
          Cart Totals
        </h2>
        <div className="w-full md:w-[70%] mx-auto">
          <div className="flex font-semibold justify-between mb-3 text-sm md:text-base">
            <span>Subtotal</span>
            <span className="text-gray-600">
              <span className="text-black">${totalPrice}</span>
            </span>
          </div>
          <div className="flex font-semibold justify-between mb-5 text-sm md:text-base">
            <span>Total</span>
            <span className="text-black font-semibold">
              {totalPrice > 0 && (
                <span className="line-through text-sm text-gray-500">
                  ${totalPrice}
                </span>
              )}
              ${(totalPrice * 0.9).toFixed(2)}
            </span>
          </div>
        </div>
        <Link href={"/checkout"}>
          <button className="w-fit lg:w-fit font-semibold border hover:bg-yellow-500 hover:text-white duration-200 hover:border-white border-black text-black py-2.5 px-12 lg:py-3.5 lg:px-16 rounded-xl lg:absolute lg:bottom-20 lg:left-1/2 lg:transform lg:-translate-x-1/2">
            CheckOut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;