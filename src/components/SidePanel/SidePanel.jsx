// SidePanel.js
import React, { useState } from 'react';
import st from './SidePanel.module.css';
import Search from './components/Search/Search';

function SidePanel({ handleMarkerVisibilityChange }) {
  const [showMarkers, setShowMarkers] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !showMarkers;
    setShowMarkers(newValue);
    handleMarkerVisibilityChange(newValue);  // Передача значения чекбокса в родительский компонент
  };

  return (
    <div className={st.SidePanel}>
      <Search />
      <div>
        <input
          type="checkbox"
          id="showMarkersCheckbox"
          checked={showMarkers}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="showMarkersCheckbox">Показать метки на карте</label>
      </div>
      Боковая панель
    </div>
  );
}

export default SidePanel;