import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeitem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
