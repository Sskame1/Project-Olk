import React, { useState } from 'react';

import Map from './components/Map/Map';
import SidePanel from './components/SidePanel/SidePanel';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SidePanel />
      <Map/>
    </div>
  );
}

export default App;