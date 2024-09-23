// src/components/Item.js
import React, { memo } from 'react';

const Item = memo(({ item }) => {
  return (
    <div className="card mb-3 shadow-sms" style={{ width: '18rem', maxHeight: '55rem', transition: 'box-shadow 0.5s' }}>
      {/* <div className="d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
        <img src={item.productImage} className="card-img-top" style={{ width: '150px' }} alt={item.productName} />
      </div> */}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">₹ {item.price}</div>
      </div>
    </div>
  );
});

export default Item;
