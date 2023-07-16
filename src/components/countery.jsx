import React, { useState } from 'react';
import './shoppingList1.css';


const App = () => {
  const [count, setCount] = useState(1);

  
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const spanStyle = {
    marginLeft: '5px', 
    marginRight: '5px'
    
  };

  return (
    <div className='counter'>
        <button onClick={() => handleDecrement()}>-</button>
        <span style={spanStyle}>{count}</span>
        <button onClick={() => handleIncrement()}>+</button>
    </div>
  );
};

export default App;