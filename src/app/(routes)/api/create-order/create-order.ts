// import { NextApiRequest, NextApiResponse } from "next";
// import { client } from "@/sanity/lib/client";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     const { firstName, lastName, country, city, streetAddress, phone, email, items, totalPrice, discountedTotal } = req.body;

//     // Validate request body
//     if (!firstName || !email || !items.length) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const OrderData = {
//       _type: "order",
//       firstName,
//       lastName,
//       country,
//       city,
//       streetAddress,
//       phone,
//       email,
//       items,
//       totalPrice,
//       discountedTotal,
//     };

//     // Log OrderData to make sure it's correct
//     console.log("Order data:", OrderData);

//     const createOrder = await client.create(OrderData);
    
//     // Log the response from the Sanity client
//     console.log("Sanity response:", createOrder);

//     // Ensure the response is sent with proper headers
//     res.setHeader("Content-Type", "application/json");
//     return res.status(200).json({ message: "Order created successfully", orderId: createOrder._id });
//   } catch (error) {
//     console.error("Error creating order:", error);
    
//     // Log the error to debug
//     return res.status(500).json({ message: "Failed to create order"});
//   }
// }
