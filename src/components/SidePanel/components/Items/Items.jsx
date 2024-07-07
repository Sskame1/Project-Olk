import React from 'react';

import db from './db.json'

const SizeM = 6

function Items() {
    
  return (
    <div style={{ display: 'flex', flexWrap: "wrap"}}>
      {db.map(item => (
        <div key={item.id}  style={{ height: item.sizeH * SizeM, width: item.sizeW * SizeM, background: "#fff", margin: "4%", borderRadius: 15, cursor: "pointer" }}>
          <p>{item.app}</p>
        </div>
      ))}
    </div>
  )
}

export default Items;