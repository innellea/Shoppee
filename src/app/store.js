import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import logger from 'redux-logger';
import productDetailsReducer from '../slices/productDetailsSlice';
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// GLOBAL STORE SET-UP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    productDetails: productDetailsReducer,
  },
  middleware: middlewares,
});
