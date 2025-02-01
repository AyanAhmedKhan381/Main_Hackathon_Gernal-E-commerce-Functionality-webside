import { NextResponse } from "next/server";
import Stripe from "stripe";
import { CartItem } from "@/Redux Store/cartSlice";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // Update this to the correct version
});


export async function POST(request: Request) {
  try {
    const { products }: { products: CartItem[] } = await request.json();

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products found in request" }, { status: 400 });
    }

    const activeProducts = (await stripe.products.list()).data.filter((p) => p.active);

    const lineItems = await Promise.all(
      products.map(async (product) => {
        let stripeProduct = activeProducts.find(
          (item) => item.name.toLowerCase() === product.title.toLowerCase()
        );

        if (!stripeProduct) {
          stripeProduct = await stripe.products.create({
            name: product.title,
            images: [product.image],
          });

          const price = await stripe.prices.create({
            unit_amount: Math.round(product.price * 100),
            currency: "usd",
            product: stripeProduct.id,
          });

          return {
            price: price.id,
            quantity: product.quantity,
          };
        }

        const existingPrice = await stripe.prices.list({
          product: stripeProduct.id,
          active: true,
        });

        if (!existingPrice.data.length) {
          throw new Error(`No price found for product: ${stripeProduct.name}`);
        }

        return {
          price: existingPrice.data[0].id,
          quantity: product.quantity,
        };
      })
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `https://vercel.com/ayan-ahmed-khans-projects/main-hackathon-gernal-e-commerce-functionality-webside/payment-success`,
      cancel_url: `https://vercel.com/ayan-ahmed-khans-projects/main-hackathon-gernal-e-commerce-functionality-webside/cart`,
      line_items: lineItems,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Failed to create Stripe Checkout session" }, { status: 500 });
  }
}
