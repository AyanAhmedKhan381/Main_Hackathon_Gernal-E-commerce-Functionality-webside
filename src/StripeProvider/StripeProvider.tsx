"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); // Should log your publishable key


const StripeProvider = ({ children }: { children: React.ReactNode }) => {
  if (!stripePromise) {
    console.error("Stripe Publishable Key is missing or invalid.");
    return null;
  }

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
