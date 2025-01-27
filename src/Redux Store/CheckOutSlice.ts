// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface BillingFormData {
//   firstName: string;
//   lastName: string;
//   companyName?: string;
//   country: string;
//   province: string;
//   streetAddress: string;
//   city: string;
//   zipCode: string;
//   phone: string;
//   email: string;
//   additionalInfo?: string;
// }

// interface CartState {
//   items: CartItem[];
//   totalPrice: number;
//   productIds: number[];
//   billingFormData: BillingFormData | null;  // Adding billingFormData to CartState
// }

// const initialState: CartState = {
//   items: [],
//   totalPrice: 0,
//   productIds: [],
//   billingFormData: null, // Initially no billing form data
// };

// const CheckOuteSlice({
//   name: "cart",
//   initialState,
//   reducers: {
   


//     // Set billing form data in the store
//     setBillingFormData(state, action: PayloadAction<BillingFormData>) {
//       state.billingFormData = action.payload;
//     },
//   },
// });

// export const { addToCart, removeFromCart, setBillingFormData } = CheckOuteSlice.action;
// export default  CheckOuteSlice.reducer
