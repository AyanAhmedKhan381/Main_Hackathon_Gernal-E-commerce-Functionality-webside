import { BillingFormData } from "@/app/components/Checkout_Billing details/billingFormSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types for Cart Item
export interface CartItem {
  productPrice: number;
  productName: string;
  productImage: string; // Assuming productImage is a string (URL)
  id: number;
  title: string;
  price: number;
  image: string; // Assuming image is a string (URL)
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  productIds: number[];
  billingDetails: BillingFormData | null; // Add billing details to the state
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  productIds: [],
  billingDetails: null, // Initialize as null
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = {
        ...action.payload,
        id: action.payload.id ? action.payload.id : Date.now(), // Fallback ID if not provided
      };

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity = newItem.quantity; // Update quantity of existing item
        state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      } else {
        state.items.push(newItem);
        state.totalPrice += newItem.price * newItem.quantity;
      }

      // Add product ID to productIds if not already present
      if (!state.productIds.includes(newItem.id)) {
        state.productIds.push(newItem.id);
      }

      // Ensure non-negative total price
      state.totalPrice = Math.max(0, state.totalPrice);
    },

    // Remove item from cart
    removeFromCart(state, action: PayloadAction<number>) {
      const _id = action.payload;

      // Check for valid ID (optional depending on usage)
      if (typeof _id !== "number" || isNaN(_id)) {
        console.error("Invalid ID provided for removal:", _id);
        return;
      }

      const itemToRemove = state.items.find(item => item.id === _id);

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== _id);
        state.productIds = state.productIds.filter(id => id !== _id);
      } else {
        console.error("Item not found in cart:", _id);
      }

      // Ensure non-negative total price
      state.totalPrice = Math.max(0, state.totalPrice);
    },

    // Reset cart to initial state
    resetCart(state) {
      state.items = [];
      state.productIds = [];
      state.totalPrice = 0;
      state.billingDetails = null; // Reset billing details
    },

    // Save billing details
    setBillingDetails(state, action: PayloadAction<BillingFormData>) {
      state.billingDetails = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, resetCart, setBillingDetails } = cartSlice.actions;
export default cartSlice.reducer;
