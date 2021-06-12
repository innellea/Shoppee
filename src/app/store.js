import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';

// GLOBAL STORE SET-UP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
