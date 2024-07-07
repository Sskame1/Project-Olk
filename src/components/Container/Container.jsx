import React, { useState } from 'react';
import style from './Container.module.css';
import Map from '../Map/Map';
import SidePanel from '../SidePanel/SidePanel';

function Container() {
    const [markers, setMarkers] = useState([]);
    const [showMarkers, setShowMarkers] = useState(false);
  
    const handleMarkerVisibilityChange = (checked) => {
      setShowMarkers(checked);
    };
  
    return (
      <div className={style.parent_container}>
        <SidePanel handleMarkerVisibilityChange={handleMarkerVisibilityChange} />
        <Map markers={markers} disableMarkers={true} />
      </div>
    );
};

export default Container