import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';
import '@testing-library/jest-dom';


describe('Item Component', () => {
  const item = {
    id: 1,
    name: 'Samsung s8+',
    price: 59999,
    category: 'Electronics',
    productImage: './assets/images/android.png',
  };

  it('should display the item details', () => {
    render(<Item item={item} />);

    const name = screen.getByText('Samsung s8+');
    const price = screen.getByText('₹ 59999');
    // const productImage = screen.getByAltText('Samsung s8+');

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    // expect(productImage).toBeInTheDocument();
  });
});
