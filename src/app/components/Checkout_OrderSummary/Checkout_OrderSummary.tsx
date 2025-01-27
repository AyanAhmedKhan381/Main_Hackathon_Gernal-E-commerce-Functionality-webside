"use client";
import { RootState } from "@/Redux Store/store";
import { useSelector } from "react-redux";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import "./scrollbar.css";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

// Payment Method Option Component
const PaymentMethodOption = ({
  id,
  label,
  defaultChecked = false,
  onChange,
}: {
  id: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <label className="flex items-center cursor-pointer">
    <input
      type="radio"
      id={id}
      name="payment"
      className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
    <span className="text-gray-600">{label}</span>
  </label>
);

// Main Order Summary Component
const OrderSummary = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const discountRate = 0.01; // 1% discount
  const discountedTotal = totalPrice - totalPrice * discountRate;

  const handlePlaceOrder = async () => {
    if (!stripe || !elements) {
      alert("Stripe.js has not loaded yet. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      if (paymentMethod === "bank") {
        // Handle bank transfer logic
        alert("Bank Transfer option selected. (Implement payment logic here)");
        setLoading(false);
        return;
      }

      if (paymentMethod === "cash") {
        // Handle cash on delivery logic
        alert("Cash On Delivery option selected. (Implement logic here)");
        setLoading(false);
        return;
      }

      if (paymentMethod === "stripe") {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: convertToSubcurrency(discountedTotal),
            currency: "usd",
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          alert(`Error: ${errorData.message || "Failed to process payment."}`);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { clientSecret } = await res.json();

        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/payment-success`,
          },
        });

        if (error) {
          alert(`Payment failed: ${error.message}`);
        } else {
          router.push("/payment-success");
        }
      }
    } catch (error: any) {
      console.error("Error during payment process:", error);
      alert(`Payment error: ${error?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="p-8 rounded-2xl space-y-8 shadow-lg shadow-gray-200 max-h-[730px] bg-white">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">Order Summary</h2>
      </div>

      <div className="space-y-6 max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
        <h3 className="text-xl font-semibold text-gray-700">Products</h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className="text-gray-600">
                {item.title} <span className="text-gray-500">x {item.quantity}</span>
              </p>
              <p className="text-gray-800 font-medium">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 border-t pt-6">
        <div className="flex justify-between text-lg font-medium">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-800">${totalPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <p className="text-gray-700">Total (After 1% Discount)</p>
          <p className="text-green-600">${discountedTotal.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-700">Payment Method</h3>
        <div className="space-y-3">
          <PaymentMethodOption
            id="bank"
            label="Direct Bank Transfer"
            defaultChecked={paymentMethod === "bank"}
            onChange={handlePaymentMethodChange}
          />
          <PaymentMethodOption
            id="cash"
            label="Cash On Delivery"
            defaultChecked={paymentMethod === "cash"}
            onChange={handlePaymentMethodChange}
          />
          <PaymentMethodOption
            id="stripe"
            label="Stripe Payment"
            defaultChecked={paymentMethod === "stripe"}
            onChange={handlePaymentMethodChange}
          />
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Your personal data will be used to support your experience on this site, manage
          access to your account, and for other purposes as outlined in our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <div className="gap-5">
        <button
          onClick={handlePlaceOrder}
          className={`w-full py-2.5 ${
            loading ? "bg-gray-400" : "bg-black hover:bg-white"
          } text-white text-lg font-bold rounded-xl ${
            loading ? "cursor-not-allowed" : "hover:border-black hover:text-black"
          } duration-200`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Proceed to Checkout"}
        </button>

        <span className="border mb-1 mt-1 border-b-black"></span>

        <button
          className="w-full py-2.5 mt-3 border border-gray-400 hover:border-black text-white text-lg font-semibold rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105"
          disabled={loading}
        >
          <Image
            src="/pictures/images/paypalLogo.png"
            alt="PayPal Logo"
            width={100}
            height={50}
            className="mr-3"
          />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
