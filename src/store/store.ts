import { configureStore } from '@reduxjs/toolkit';
import gamesDataReducer from '../slice/gamesDataSlice';


export const store = configureStore({
  reducer: {
    gamesData: gamesDataReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;