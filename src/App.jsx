// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1>Item List with Search</h1>
        <SearchBar />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;