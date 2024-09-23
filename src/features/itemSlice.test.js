import { Items } from '../Items';
import itemReducer, { setSearchTerm, selectFilteredItems } from './itemSlice';

describe('itemSlice reducer and actions', () => {
  const initialState = {
    items: Items, // Fix the key name here
    searchTerm: '',
  };

  it('should return the initial state', () => {
    const nextState = itemReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should update the search term', () => {
    const searchTerm = 'Samsung';
    const nextState = itemReducer(initialState, setSearchTerm(searchTerm));
    expect(nextState.searchTerm).toBe(searchTerm);
  });

  it('should filter items based on search term', () => {
    const state = {
      ...initialState,
      searchTerm: 'Samsung',
    };
    const filteredItems = selectFilteredItems({ items: state });
    expect(filteredItems.length).toBe(1);
    expect(filteredItems[0].name).toBe('Samsung s8+');
  });

  it('should return all items if search term is empty', () => {
    const state = {
      ...initialState,
      searchTerm: '',
    };
    const filteredItems = selectFilteredItems({ items: state });
    expect(filteredItems.length).toBe(Items.length);
  });
});
