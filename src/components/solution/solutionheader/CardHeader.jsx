import React from 'react';
import './solutionheader.css';

function Cardheader({ title, image }) {
  const headerStyle = {
    backgroundImage: `url(${image})`,
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '150px',
    textAlign: 'center',
    
    
  };

  return (
    <div className="card-header" style={headerStyle}>
      <h1>{title}</h1>
      <h2>solution / {title}</h2>
    </div>
  );
}

export default Cardheader;
