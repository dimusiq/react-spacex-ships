import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ships: [],
  searchQuery: '',
  filterType: '',
  filterHomePort: '',
  pageCount: 1,
  pageSize: 5,
};

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    setShips: (state, action) => {
      state.ships = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
    setFilterHomePort: (state, action) => {
      state.filterHomePort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setShips,
  setSearchQuery,
  setFilterType,
  setFilterHomePort,
  setCurrentPage,
} = shipsSlice.actions;

export default shipsSlice.reducer;
