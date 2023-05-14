import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

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

// const persistConfig = {
//   key: 'filter',
//   storage,
// };

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilterQuery = state => state.filter.query;

// export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
