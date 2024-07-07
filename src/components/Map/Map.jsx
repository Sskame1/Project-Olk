import React, { useState, useRef, useEffect } from 'react';
import style from './Map.module.css';
import mapImage from '../../image/map.png';
// import DataMarkers from './db.json'; 

const Map = ({ disableMarkers }) => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Пример загрузки данных из JSON файла
    // setMarkers(DataMarkers);
  }, []);

  const lastPos = useRef({ x: 0, y: 0, scale: 1 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMapClick = (e) => {
    if (!isDragging.current && !disableMarkers) {
      const boundingRect = mapRef.current.getBoundingClientRect();
      const offsetX = (e.clientX - boundingRect.left) / lastPos.current.scale - lastPos.current.x;
      const offsetY = (e.clientY - boundingRect.top) / lastPos.current.scale - lastPos.current.y;
      const newMarker = { x: offsetX, y: offsetY, id: markers.length + 1 };
      setMarkers([...markers, newMarker]);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current.x = e.clientX;
    dragStart.current.y = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      lastPos.current.x += e.clientX - dragStart.current.x;
      lastPos.current.y += e.clientY - dragStart.current.y;
      dragStart.current.x = e.clientX;
      dragStart.current.y = e.clientY;
      mapRef.current.style.transform = `translate(${lastPos.current.x}px, ${lastPos.current.y}px) scale(${lastPos.current.scale})`;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const sensitivity = 0.1;
    const minScale = 0.5;
    const maxScale = 3;

    lastPos.current.scale = Math.min(Math.max(lastPos.current.scale + delta * sensitivity, minScale), maxScale);
    mapRef.current.style.transform = `translate(${lastPos.current.x}px, ${lastPos.current.y}px) scale(${lastPos.current.scale})`;
  };

  const scaledMarkerPosition = (markerPos) => ({
    top: `${markerPos.y * lastPos.current.scale}px`,
    left: `${markerPos.x * lastPos.current.scale}px`,
  });

  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerHover = (marker) => {
    setHoveredMarker(marker);
  };


  return (
    <div className={style.map_container} style={{ display: 'flex', height: '100vh' }}>
      <div
        ref={mapRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleMapClick}
        className={style.map}
      >
        <img src={mapImage} className={style.map_image} alt="Изображение карты" />
        {markers.map((marker) => (
          <div
            key={marker.id}
            className={style.marker}
            style={{ ...scaledMarkerPosition(marker), position: 'absolute' }}
            onMouseEnter={() => handleMarkerHover(marker)}
            onMouseLeave={() => handleMarkerHover(null)}
          >
            {marker.id === (hoveredMarker && hoveredMarker.id) && (
              <div className={style.tooltip}>{marker.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;