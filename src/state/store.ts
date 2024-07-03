import { configureStore } from '@reduxjs/toolkit';
import productImagePathReducer from '../slices/productImagePathSlice';
import productPriceReducer from '../slices/productPriceSlice';

export const store = configureStore({
  reducer: {
    productImagePath: productImagePathReducer,
    productPrice: productPriceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;