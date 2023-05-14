import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilterQuery = state => state.filter.query;