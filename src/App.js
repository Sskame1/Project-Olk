import { useEffect } from "react";
import Map from "./components/Map/Map";

function App() {
  useEffect(() => {
    const elementsToRemove = document.getElementsByClassName("leaflet-control-attribution leaflet-control");
    for (let i = 0; i < elementsToRemove.length; i++) {
      elementsToRemove[i].remove();
    }
  }, []);
  return (
    <div className="App">
      <Map />
    </div>
  );
}
// leaflet-control-attribution leaflet-control
export default App;
