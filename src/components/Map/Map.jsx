import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import s from './Map.module.css'

function Map() {
  return (
    <div className={s.container}>
      <MapContainer center={[60.3766, 120.4805]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[60.3766, 120.4805]}>
          <Popup>
            Привет, это город Олёкминск!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;