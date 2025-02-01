// "use client";
// import { useSelector } from "react-redux";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { RootState } from "@/Redux Store/store";
// import { client } from "@/sanity/lib/client";

// import "react-toastify/dist/ReactToastify.css";

// const PaymentMethodOption = ({ id, label, defaultChecked = false, onChange }: 
// { id: string; label: string; defaultChecked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; }) => (
//   <label className="flex items-center cursor-pointer">
//     <input
//       type="radio"
//       id={id}
//       name="payment"
//       className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
//       defaultChecked={defaultChecked}
//       onChange={onChange}
//       value={id}
//     />
//     <span className="text-gray-600">{label}</span>
//   </label>
// );

// const OrderSummary = () => {
//   const { items, totalPrice } = useSelector((state: RootState) => state.cart);
//   const billingDetails = useSelector((state: RootState) => state.cart.billingDetails);
//   const [loading, setLoading] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("stripe");
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const discountRate = 0.01;
//   const discountedTotal = totalPrice - totalPrice * discountRate;

//   const createOrderInSanity = async () => {
//     try {
//       if (!billingDetails || items.length === 0) {
//         alert("Billing details or cart items are missing!");
//         return;
//       }
  
//       // Create the order data
//       const newOrder = {
//         _type: "order",
//         customer: {
//           firstName: billingDetails.firstName,
//           lastName: billingDetails.lastName,
//           country: billingDetails.country,
//           city: billingDetails.city,
//           streetAddress: billingDetails.streetAddress,
//           phone: billingDetails.phone,
//           email: billingDetails.email,
//         },
//         items: items.map(item => ({
//           productName: item.title,
//           productPrice: item.price,
//           quantity: item.quantity,
//         })),
//         totalPrice,
//         createdAt: new Date().toISOString(),
//       };
  
//       // Sending data to Sanity using the API client
//       const response = await client.create(newOrder);
//       console.log("Order Created Successfully:", response);
//     } catch (error: unknown) {
//       console.error("Error Creating Order:", error);
//       if (error instanceof Error) {
//         if (error.message.includes("Insufficient permissions")) {
//           alert("Permission error: Ensure the API token has write permissions.");
//         } else {
//           alert("An error occurred while creating the order.");
//         }
//       } else {
//         alert("An unknown error occurred");
//       }
//     }
//   };
  
  

//   const handlePlaceOrder = async () => {
//     if (items.length === 0) {
//       toast.info(
//         <div className="flex items-center gap-4">
//           Your cart is empty!
//           <MdOutlineProductionQuantityLimits className="mr-2 text-red-400 text-xl" />
//         </div>,
//         {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "dark",
//         }
//       );
//       return;
//     }

//     if (!billingDetails || Object.keys(billingDetails).length === 0) {
//       toast.warn("Please Fill In Your Billing Details Before Proceeding.", {
//         position: "top-center",
//         autoClose: 5000,
//         theme: "dark",
//       });
//       return;
//     }

//     if (!stripe || !elements) {
//       toast.warn("Stripe.js has not loaded yet. Please try again later.", {
//         position: "top-center",
//         autoClose: 5000,
//         theme: "dark",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       if (paymentMethod === "cash") {
//         await createOrderInSanity();
//         toast.success("Order Placed Successfully! Payment on Cash Delivery.", {
//           position: "top-center",
//           autoClose: 2000,
//           theme: "dark",
//         });

//         setTimeout(() => {
//           router.push("/payment-success");
//         }, 1200);

//         return;
//       }

//       if (paymentMethod === "stripe") {
//         await createOrderInSanity();
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//         const res = await fetch(`${baseUrl}/api/create-payment-intent`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ products: items }),
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           toast.error(`Error: ${errorData.message || "Failed to process payment."}`, {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//           });
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const { url } = await res.json();
//         window.location.href = url;
//       }
//     } catch (error: any) {
//       console.error("Error during payment process:", error);
//       toast.error(error?.message || "Unknown error occurred during payment.", {
//         position: "top-center",
//         autoClose: 5000,
//         theme: "dark",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 rounded-2xl space-y-8 shadow-lg shadow-gray-200 max-h-[700px] bg-white">
//       <div className="flex justify-between items-center border-b pb-4">
//         <h2 className="text-3xl font-bold text-gray-800">Order Summary</h2>
//       </div>

//       <div className="space-y-6 max-h-28 overflow-y-auto">
//         <h3 className="text-xl font-semibold text-gray-700">Products</h3>
//         {items.map((item, index) => (
//           <div key={item.id || `fallback-${index}`} className="flex justify-between items-center">
//             <p className="text-gray-600">
//               {item.title} <span className="text-gray-500">x {item.quantity}</span>
//             </p>
//             <p className="text-gray-800 font-medium">${(item.price * item.quantity).toLocaleString()}</p>
//           </div>
//         ))}
//       </div>

//       <div className="space-y-4 border-t pt-6">
//         <div className="flex justify-between text-lg font-medium">
//           <p className="text-gray-700">Subtotal</p>
//           <p className="text-gray-800">${totalPrice.toLocaleString()}</p>
//         </div>
//         <div className="flex justify-between text-xl font-bold">
//           <p className="text-gray-700">Total (After {discountRate * 100}% Discount)</p>
//           <p className="text-green-500">${discountedTotal.toLocaleString()}</p>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold text-gray-700">Payment Methods</h3>
//         <PaymentMethodOption id="cash" label="Cash On Delivery" onChange={() => setPaymentMethod("cash")} />
//         <PaymentMethodOption id="stripe" label="Pay with Stripe" defaultChecked onChange={() => setPaymentMethod("stripe")} />
//       </div>

//       <button
//         className="w-full py-3 border px-14 border-black text-black font-bold hover:bg-black hover:text-white duration-300 rounded-lg"
//         onClick={handlePlaceOrder}
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Proceed to Checkout"}
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default OrderSummary;
