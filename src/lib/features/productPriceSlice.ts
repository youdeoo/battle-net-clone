import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ProductPrice = {
  productPrice: string;
}

const initialState: ProductPrice = {
  productPrice: ''
}

const productPriceSlice = createSlice({
  name: 'productPrice',
  initialState,
  reducers: {
    getProductPrice: (state, action: PayloadAction<string>): void => {
      state.productPrice = action.payload;
    }
  }
})

export const { getProductPrice } = productPriceSlice.actions;

export default productPriceSlice.reducer;