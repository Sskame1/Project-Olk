import React from 'react';

import db from './db.json'

function Items() {
    
  return (
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center'}}>
      {db.map(item => (
        <div key={item.id}  style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
          <p style={{ margin: "50% 10% 0", textAlign: 'center' }}>{item.app}</p>
        </div>
      ))}
    </div>
  )
}

export default Items;