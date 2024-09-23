import { createSlice, createSelector } from '@reduxjs/toolkit';
import { Items } from '../Items'; // Ensure the correct path to your Items.js file

const initialState = {
  items: Items,
  searchTerm: '',
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = itemSlice.actions;

export const selectItems = (state) => state.items.items;
export const selectSearchTerm = (state) => state.items.searchTerm;

// Update to filter by the 'name' property of each item object
export const selectFilteredItems = createSelector(
  [selectItems, selectSearchTerm],
  (items, searchTerm) => {
    return items.filter((item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export default itemSlice.reducer;
