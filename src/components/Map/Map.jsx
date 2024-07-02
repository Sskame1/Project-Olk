import React, { useState } from 'react';

import mapImage from '../../image/muh.png'

import s from './Map.module.css'

function Map() {
    const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      setPos((prevPos) => ({
        ...prevPos,
        x: prevPos.x + offsetX,
        y: prevPos.y + offsetY,
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleWheel = (e) => {
    const delta = e.deltaY * -0.01;
    const sensitivity = 0.1; // Чувствительность зума
    const minScale = 0.5; // Минимальный масштаб
    const maxScale = 3; // Максимальный масштаб

    const newScale = Math.min(Math.max(pos.scale + delta * sensitivity, minScale), maxScale);
    const ratio = 1 - newScale / pos.scale;

    const boundingRect = e.currentTarget.getBoundingClientRect();
    const originX = boundingRect.width / 2;
    const originY = boundingRect.height / 2;
    const clientX = e.clientX - boundingRect.x;
    const clientY = e.clientY - boundingRect.y;

    setPos({
      scale: newScale,
      x: pos.x + (clientX - originX) * ratio,
      y: pos.y + (clientY - originY) * ratio,
    });
  };
  return (
    <div style={{ display: 'flex' }}>
        <div
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={s.maps}
      >
        <img
          src={mapImage}
          className={s.map}
          style={{
            transformOrigin: 'center center',
            transform: `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        />
      </div>
    </div>
  )
}

export default Map