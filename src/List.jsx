import React from 'react';

function List({ items, setItems }) {
  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <span onClick={() => toggleItem(item.id)}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;