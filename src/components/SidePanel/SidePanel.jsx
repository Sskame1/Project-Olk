// SidePanel.js
import React from 'react';
import st from './SidePanel.module.css';
import Search from './components/Search/Search';
import Items from './components/Items/Items';

function SidePanel() {

  return (
    <div className={st.SidePanel}>
      <Search />
      <Items />
    </div>
  );
}

export default SidePanel;