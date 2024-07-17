import { configureStore } from '@reduxjs/toolkit';
import productImagePathReducer from './features/productImagePathSlice';
import productPriceReducer from './features/productPriceSlice';
import filteredProductsReducer from './features/filteredProductsSlice';
import selectedFilterValueReducer from './features/selectedFilterValueSlice';

export const store = configureStore({
  reducer: {
    productImagePath: productImagePathReducer,
    productPrice: productPriceReducer,
    filteredProducts: filteredProductsReducer,
    selectedFilterValue: selectedFilterValueReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;