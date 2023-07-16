import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import './shoppingList1.css';


const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className='app'>
      <h1>Shopping List</h1>
      <div className="input-container">
      <input type="text" maxlength="14" value={itemName} onChange={handleInputChange}  placeholder="Enter an item" />
      <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ShoppingList  items={items} onRemoveItem={handleRemoveItem}/>
    </div>
  );
};

export default App;