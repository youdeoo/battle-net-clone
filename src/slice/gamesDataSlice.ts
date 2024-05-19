import { createSlice } from '@reduxjs/toolkit';
import gamesData from '../assets/data.json';

const initialState = {
  gameData: gamesData
};

const gamesDataSlice = createSlice({
  name: 'gamesData',
  initialState,
  reducers: {}
});

export default gamesDataSlice.reducer;