import React, { useState } from 'react';
import st from './SidePanel.module.css';
import Search from './components/Search/Search';
import Items from './components/Items/Items';

function SidePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${st.SidePanel} ${isExpanded ? st.expanded : ''}`}>
      {window.innerWidth < 767 && (
        <button onClick={togglePanel} style={{ height: '10%', width: '100%'  }} ></button>
      )}
      <Search />
      <Items />
    </div>
  );
}

export default SidePanel;