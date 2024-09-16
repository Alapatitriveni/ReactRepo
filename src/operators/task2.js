import React from 'react';
import "./task2.css"

const ItemList = ({items}) => {
  return (
    <div className={items.length > 0 ? 'non-empty-list' : 'empty-list'}>
      {items.length > 0 ? (
        <div className="triveni">
          {items.map((item, index) => (
            <h3 key={index}>{item}</h3>
          ))}
        </div>
      ) : (
        <p>The list is empty.</p>
      )}
    </div>
  );
};
export default ItemList;