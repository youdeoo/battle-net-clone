import { configureStore } from '@reduxjs/toolkit';
import productImagePathReducer from './features/productImagePathSlice';
import productPriceReducer from './features/productPriceSlice';
import filteredProductsReducer from './features/filteredProductsSlice';

export const store = configureStore({
  reducer: {
    productImagePath: productImagePathReducer,
    productPrice: productPriceReducer,
    filteredProducts: filteredProductsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;