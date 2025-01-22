import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCart = ({cartItems}:any) => {
  return (
    <div>
      <Link href={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-gray-700 hover:text-yellow-500 text-xl cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4.5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
    </div>
  )
}

export default ShoppingCart
