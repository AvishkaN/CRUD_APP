import { configureStore } from '@reduxjs/toolkit';
import clickSlice from './slices/productSlice';


export const store = configureStore({
  reducer: {
    products: clickSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});