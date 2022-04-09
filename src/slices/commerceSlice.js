/* eslint-disable */

// dependencies
import { createSlice } from "@reduxjs/toolkit";

export const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    products: [],
    cart: {},
    order: {},
    receipt: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setReceipt: (state, action) => {
      state.receipt = action.payload;
    },
  },
});

export const { setProducts, setCart, setOrder, setReceipt } =
  commerceSlice.actions;
export const selectProducts = (state) => state.commerce.products;
export const selectCart = (state) => state.commerce.cart;
export const selectOrder = (state) => state.commerce.order;
export const selectReceipt = (state) => state.commerce.receipt;

export default commerceSlice.reducer;
