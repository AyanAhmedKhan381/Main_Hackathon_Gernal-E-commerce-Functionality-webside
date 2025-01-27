"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BillingForm from "../Checkout_Billing details/Checkout_Billing details";
import OrderSummary from "../Checkout_OrderSummary/Checkout_OrderSummary";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QlWw3074jStp5VOov5epOM72LQgb54rAlTDFoTGxkdHw5fBML9PXGnn1ry7O7gOjbmnbNGUkwFzcXzCbmie1NDs00jUqZeLdP")

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex justify-center items-center p-6 mt-20 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <BillingForm />
          <OrderSummary />
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;
