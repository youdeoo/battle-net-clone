import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TProductsCategories } from '@/types/types';

type FilterProducts = {
  filterProducts: [] | Array<TProductsCategories>
}

const initialState: FilterProducts = {
  filterProducts: []
}

const filteredProductsSlice = createSlice({
  name: 'filteredProduct',
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<[] | Array<TProductsCategories>>) => {
      state.filterProducts = action.payload;
    }
  }
});

export const { setFilteredProducts } = filteredProductsSlice.actions;

export default filteredProductsSlice.reducer;