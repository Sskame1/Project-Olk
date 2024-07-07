import React from 'react';

import db from './db.json'
import Image from './Image';

function Items() {
    
  return (
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center'}}>
      {db.map(item => (
        <div key={item.id} style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
          <div style={{ backgroundColor: "red", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
          <Image imageData={[item]} />
          <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>{item.app}</p>
        </div>
      ))}
    </div>
  )
}

export default Items;