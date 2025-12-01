import { createSlice } from "@reduxjs/toolkit";
import { calculateSubTotal } from "../../helpers/CartFunc";

export const initialState = {
  loading: false,
  error: null,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  shipping: JSON.parse(localStorage.getItem("shipping")) ?? Number(500),
  subtotal: localStorage.getItem("cartItems")
    ? calculateSubTotal(JSON.parse(localStorage.getItem("cartItems")))
    : 0,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    addCartItems: (state, { payload }) => {
      state.cartItems = payload.cart;
      state.loading = false;
      state.error = null;
      state.subtotal = payload.subTotal;
    },
    removeFromCartItem: (state, { payload }) => {
      state.cartItems = payload.cartItems;
      state.loading = false;
      state.error = null;
      state.subtotal = payload.subTotal;
    },
    setShipping: (state, { payload }) => {
      state.loading = false;
      state.shipping = payload;
      localStorage.setItem("shipping", JSON.stringify(payload));
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shipping");
      localStorage.removeItem("subTotal");
      state.cartItems = [];
      state.shipping = Number(500);
      state.subtotal = 0;
      (state.loading = false), (state.error = null);
    },
  },
});

export const {
  setLoading,
  setError,
  addCartItems,
  removeFromCartItem,
  setShipping,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
