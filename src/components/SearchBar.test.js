import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import SearchBar from './SearchBar';
import { setSearchTerm } from '../features/itemSlice';
import '@testing-library/jest-dom';


describe('SearchBar Component', () => {
  it('should dispatch search term on input change', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search items...');
    fireEvent.change(input, { target: { value: 'Samsung' } });

    expect(store.getState().items.searchTerm).toBe('Samsung');
  });
});
