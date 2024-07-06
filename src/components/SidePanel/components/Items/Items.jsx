import React from 'react';

import db from './db.json'

function Items() {
    
  return (
    <div>
      {db.map(item => (
        <div key={item.id}>
          <p>{item.app}</p>
        </div>
      ))}
    </div>
  )
}

export default Items;