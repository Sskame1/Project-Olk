import React from 'react';

function Image({ imageData }) {
  if (!imageData || imageData.length === 0) {
    return <div style={{ fontSize: "8px" }}>No images to display</div>;
  }

  return (
    <div>
      {imageData.map((image) => (
        <div key={image.id}>
          /* eslint-disable */
          <img src={image.urlImage} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        </div>
      ))}
    </div>
  );
}

export default Image;