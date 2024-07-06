import React, { useEffect, useRef } from 'react';

function TestPagetwo() {
  const canvasRef = useRef(null);
  const markerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let isDragging = false; // eslint-disable-next-line
    let lastX = 0; // eslint-disable-next-line
    let lastY = 0; // eslint-disable-next-line
    let dragStart; // eslint-disable-next-line
    let image = new Image();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawImage();
    };

    const drawImage = () => {
      const imageUrl = '../../image/muh.png';
      image.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, (canvas.width - image.width) / 2, (canvas.height - image.height) / 2);
        drawMarker(markerPositionRef.current.x, markerPositionRef.current.y);
      };
      image.src = imageUrl;
    };

    const drawMarker = (x, y) => {
      const pointSize = 5;
      context.fillStyle = 'red';
      context.fillRect(x - pointSize / 2, y - pointSize / 2, pointSize, pointSize);
    };

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      markerPositionRef.current = { x, y };
      drawImage();
    };

    const handleMouseDown = (e) => {
      if (e.button === 0) {
        isDragging = true;
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
        dragStart = { x: lastX, y: lastY };
      }
    };

    const handleMouseUp = (e) => {
      if (e.button === 0) {
        isDragging = false;
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const pt = { x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop };
        const dx = pt.x - dragStart.x;
        const dy = pt.y - dragStart.y;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, (canvas.width - image.width) / 2 + dx, (canvas.height - image.height) / 2 + dy);
        drawMarker(markerPositionRef.current.x, markerPositionRef.current.y);
      }
    };

    const handleWheel = (e) => {
      const delta = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
      if (delta) handleScale(delta, e.clientX, e.clientY);
      return e.preventDefault() && false;
    };

    const handleScale = (delta, x, y) => {
      const scaleBy = 1.1;
      const pt = { x: x - canvas.offsetLeft, y: y - canvas.offsetTop };
      const dx = pt.x - (canvas.width / 2);
      const dy = pt.y - (canvas.height / 2);
      context.scale(scaleBy, scaleBy);
      context.translate(dx * delta * -1, dy * delta * -1);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, (canvas.width - image.width) / 2, (canvas.height - image.height) / 2);
      drawMarker(markerPositionRef.current.x, markerPositionRef.current.y);
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('DOMMouseScroll', handleWheel, false);
    canvas.addEventListener('mousewheel', handleWheel, false);
    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('DOMMouseScroll', handleWheel);
      canvas.removeEventListener('mousewheel', handleWheel);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'lightgray' }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

export default TestPagetwo;