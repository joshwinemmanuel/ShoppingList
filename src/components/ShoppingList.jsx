// import React, { useState } from 'react';
import './shoppingList1.css';
import Child from './countery';

const ShoppingList = (props) => {

const { items, onRemoveItem } = props;

  
  return (
    <div>
      <table >
      {items.map((item, index) => (
        <tr key={index} className="item-list">
            <td >{item}</td>
            <td className="fixed-column" style={{width:'90px'}}><Child /></td>
            <td className="fixed-column" style={{width:'53px'}}><button onClick={() => onRemoveItem(index)}>Remove</button></td>
        </tr>
        ))}
    </table>
    </div>
  );
};

export default ShoppingList;