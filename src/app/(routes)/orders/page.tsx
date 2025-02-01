"use client";

import { client } from '@/sanity/lib/client';
import { Order_Query } from '@/sanity/lib/query';
import { useUser } from '@clerk/nextjs'; // Import Clerk's useUser hook
import React, { useEffect, useState } from 'react';
import './order.css';
import '../../components/add-to-Product/ProductHeroCard/Loader.css';

export interface Order {
  _id: string;
  createdAt: string;
  status: 'pending' | 'success' | 'dispatched';
  totalPrice: number;
  discountedTotal: number;
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: {
      country: string;
      city: string;
      streetAddress: string;
    };
  };
  items: {
    productId: string;
    productName: string;
    productPrice: number;
    quantity: number;
  }[];
}

const Page = () => {
  const { user } = useUser(); // Get the current logged-in user from Clerk
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const fetchData = await client.fetch(Order_Query); // Fetch all orders
        // Safely access the email address from user.emailAddresses
        const userEmail = user?.emailAddresses?.[0]?.emailAddress; // Get the first email if it exists
        
        if (userEmail) {
          // Filter orders based on the logged-in user's email
          const userOrders = fetchData.filter((order: Order) => order.customer.email === userEmail);
          setOrders(userOrders);
        } else {
          console.error('No email address found for the logged-in user');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchOrders(); // Fetch orders only if user is logged in
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div> {/* Display the loader */}
      </div>
    );
  }

  return (
    <div className="bg-gradient min-h-screen flex items-center justify-center p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Animated Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 text-transparent bg-clip-text">
          Orders List
          </h1>

          <p className="text-base text-slate-400 mt-4 font-medium">
            View your orders and track their status here.
          </p>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 shadow-md shadow-white/70">
                <th className="px-6 py-4 text-left text-gray-700">Order Number</th>
                <th className="px-6 py-4 text-left text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-gray-700">Customer</th>
                <th className="px-6 py-4 text-left text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-gray-700">Total</th>
                <th className="px-6 py-4 text-left text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-gray-700">Invoice Number</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 truncate max-w-xs">
                      {order._id.substring(0, 10)}...
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {order.customer.firstName} {order.customer.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{order.customer.email}</td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      ${order.totalPrice.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : order.status === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{order._id.substring(0, 6)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4 mx-auto justify-center text-gray-600">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
