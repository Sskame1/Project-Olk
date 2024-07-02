// import { useEffect } from "react";
// import Map from "./components/Map/Map";
import React, {useState} from "react";

import mapImage from "./image/muh.png"
import s from './App.module.css'

function App() {
  // useEffect(() => {
  //   const elementsToRemove = document.getElementsByClassName("leaflet-control-attribution leaflet-control");
  //   for (let i = 0; i < elementsToRemove.length; i++) {
  //     elementsToRemove[i].remove();
  //   }
  // }, []);

  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  const onScroll = (e) => {
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta;
    const ratio = 1 - newScale / pos.scale;
    
    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };
  return (
    <div className="App" onWheelCapture={onScroll}>
      {/* <Map /> */}
      <img 
      src={mapImage} 
      className={s.map}
      style={{
        transformOrigin: "0 0",
        transform: `scale(${pos.scale}) translate(${pos.x}px, ${pos.y}px)`,
      }}
      />
      
      
    </div>
  );
}
// leaflet-control-attribution leaflet-control
export default App;
