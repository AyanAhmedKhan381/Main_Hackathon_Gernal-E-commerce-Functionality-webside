import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  quantity: any;
  product: any;
  items: CartItem[];
  totalPrice: number;
  productIds: number[];
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  productIds: [],
  quantity: undefined,
  product: undefined
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add or update item in cart
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = {
        ...action.payload,
        id: action.payload.id ? action.payload.id : Date.now(),
      };

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity = newItem.quantity; // Update quantity
        state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      } else {
        state.items.push(newItem);
        state.totalPrice += newItem.price * newItem.quantity;
      }

      if (!state.productIds.includes(newItem.id)) {
        state.productIds.push(newItem.id);
      }

      state.totalPrice = Math.max(0, state.totalPrice); // Ensure non-negative total
    },

    // Remove item from cart
    removeFromCart(state, action: PayloadAction<number>) {
      const _id = action.payload;

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

      state.totalPrice = Math.max(0, state.totalPrice); // Ensure non-negative total
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
