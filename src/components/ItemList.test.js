import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import ItemList from './ItemList';
import { setSearchTerm } from '../features/itemSlice';
import React from 'react';
import '@testing-library/jest-dom';

describe('ItemList Component', () => {
  it('should render all items when the search term is empty', () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );

    const items = screen.getAllByRole('heading', { level: 5 });
    expect(items.length).toBe(store.getState().items.items.length);
    
    const itemNames = store.getState().items.items.map(item => item.name);
    itemNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('should not render any items when the search term does not match', async () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );

    await act(async () => {
      store.dispatch(setSearchTerm('NonExistentItem'));
    });

    const items = screen.queryAllByRole('heading', { level: 5 });
    expect(items.length).toBe(0);
  });
});
