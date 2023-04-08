import { configureStore } from '@reduxjs/toolkit';
import shipSlice from './shipsSlice';

export const store = configureStore({
  reducer: {
    ship: shipSlice,
  },
});

