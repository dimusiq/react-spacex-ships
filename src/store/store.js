import { configureStore } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';

export const store = configureStore({
  reducer: {
    ships: shipsSlice,
  },
});

