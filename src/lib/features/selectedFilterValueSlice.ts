import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SelectedFilterValue = {
  selectedFilterValue: string;
}

const initialState: SelectedFilterValue = {
  selectedFilterValue: 'filtered'
}

const selectedFilterValueSlice = createSlice({
  name: 'selectedFilter',
  initialState,
  reducers: {
    getSelectedFilterValue: (state, action: PayloadAction<string>) => {
      state.selectedFilterValue = action.payload;
    }
  }
})

export const { getSelectedFilterValue } = selectedFilterValueSlice.actions;

export default selectedFilterValueSlice.reducer;