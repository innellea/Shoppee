import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    showProduct: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { showProduct } = productDetailsSlice.actions;
// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.productDetails.items;

export default productDetailsSlice.reducer;
