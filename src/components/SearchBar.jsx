// src/components/SearchBar.js
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  // Memoize the search handler to avoid re-creating the function on each render
  const handleSearch = useCallback((e) => {
    dispatch(setSearchTerm(e.target.value));
  }, [dispatch]);

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search items..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
