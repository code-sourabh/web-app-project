import React from 'react';
import './solutionheader.css';

function Cardheader({ title, image }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    filter: 'brightness(40%)', // Apply brightness filter to the background
    zIndex: -1, // Ensure the background image is behind the content
  };

  

  return (
    <div className="card-header">
      <div style={backgroundImageStyle}></div>
      <div class name ="header">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Cardheader;
