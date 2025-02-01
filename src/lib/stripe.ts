import Stripe from "stripe";

// Ensure the Stripe secret key is set in the environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in the environment variables.");
}

// Initialize the Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16" as any, // Use the latest stable API version
});

export default stripe;