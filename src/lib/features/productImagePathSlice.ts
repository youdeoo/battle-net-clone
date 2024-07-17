import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ImagePath = {
  imagePath: string;
}

const initialState: ImagePath = {
  imagePath: ''
}

const productImagePathSlice = createSlice({
  name: 'productImage',
  initialState,
  reducers: {
    getImagePath: (state, action: PayloadAction<string>) => {
      state.imagePath = action.payload;
    }
  }
});

export const { getImagePath } = productImagePathSlice.actions;

export default productImagePathSlice.reducer;