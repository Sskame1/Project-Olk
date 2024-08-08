import React, { useRef } from 'react';
import '../../style/tablo.css'

function Tablo({ height, weight, title, children }) {
  const cardRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: event.deltaY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="CardMain"
      ref={cardRef}
      onWheel={handleWheel}
      style={{ height, width: weight, overflow: 'hidden' }}
      tabIndex={0}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}


export default Tablo