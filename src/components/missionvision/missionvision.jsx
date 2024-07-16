import React, { useState } from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="mission-vision-container">
      <div className="left-section">
        <div className="tab-container">
          <div 
            className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
            <div className="connecting-line mission"></div>
          </div>
          <div 
            className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
            <div className="connecting-line vision"></div>
          </div>
        </div>
        <div className="decorative-squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="right-section">
        <div className="content-box">
          <p>{activeTab === 'mission' ? 
            "To lead excellence on the cloud and help customers turn impractical goals into reality with strategic resources and expertise." :
            "[Your vision statement here]"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;