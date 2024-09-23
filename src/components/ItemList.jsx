// src/components/ItemList.js
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../features/itemSlice';
import Item from './Item';

const ItemList = React.memo(() => {
  const items = useSelector(selectFilteredItems);

  // Memoize the filtered items so the component only re-renders when items change
  const memoizedItems = useMemo(() => {
    return items.map((item) => (<div className="col-xl-3 col-md-4 col-sm-6 mb-4" key={item.id}>
        <Item  item={item} />
      </div>));
  }, [items]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap space-around mt-4">
        {memoizedItems}
    </div>
  );
});

export default ItemList;
