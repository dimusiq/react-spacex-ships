import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ships: [],
  searchQuery: '',
  filterType: '',
  filterHomePort: '',
};

export const getShips = createAsyncThunk(
  'ships/getShips',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      'https://api.spacexdata.com/v4/ships'
    );
    dispatch(setShips(res.data));
  }
);

const shipSlice = createSlice({
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShips.pending, (state) => {
        state.fulfilled = true;
        console.log('pending');
      })
      .addCase(getShips.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
      });
  },
});

export const {
  setShips,
  setSearchQuery,
  setFilterType,
  setFilterHomePort,
} = shipSlice.actions;

export default shipSlice.reducer;
