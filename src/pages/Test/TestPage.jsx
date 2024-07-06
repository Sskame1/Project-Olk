import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';

function TestPage() {
    const stageRef = useRef();
    const [image, setImage] = useState(null);
    const imageObj = new window.Image();
    imageObj.src = '../../image/test_image.jpg';
  
    useEffect(() => {
      imageObj.onload = () => {
        setImage(imageObj);
      };
    }, []);
  
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  
    const handleDragStart = () => {
      setDragging(true);
    };
  
    const handleDragEnd = () => {
      setDragging(false);
      setLastPosition({ x: position.x, y: position.y });
    };
  
    const handleDragMove = (e) => {
      if (dragging) {
        const dx = e.target.getStage().getPointerPosition().x - lastPosition.x;
        const dy = e.target.getStage().getPointerPosition().y - lastPosition.y;
        setPosition({
          x: position.x + dx,
          y: position.y + dy,
        });
      }
    };
  
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          <Image
            image={image}
            x={position.x}
            y={position.y}
            width={200} // ширина вашей карты
            height={200} // высота вашей карты
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragMove={handleDragMove}
          />
        </Layer>
      </Stage>
    );
  };

export default TestPage