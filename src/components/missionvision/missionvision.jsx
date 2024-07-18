import React, { useState, useEffect } from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Handle resizing to switch between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <div className="mission-vision-container">
      <div className="left-section">
        <div className="tab-container">
          <div 
            className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => toggleTab('mission')}
          >
            Our Mission
            <div className="connecting-line mission"></div>
          </div>
          {isMobile && activeTab === 'mission' && (
            <div className="content-box active">
              <p>To lead excellence on the cloud and help customers turn impractical goals into reality with strategic resources and expertise.</p>
            </div>
          )}
          <div 
            className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => toggleTab('vision')}
          >
            Our Vision
            <div className="connecting-line vision"></div>
          </div>
          {isMobile && activeTab === 'vision' && (
            <div className="content-box active">
              <p>[Your vision statement here]</p>
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="decorative-squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="right-section">
          <div className="content-box active">
            <p>{activeTab === 'mission' ? 
              "To lead excellence on the cloud and help customers turn impractical goals into reality with strategic resources and expertise." :
              activeTab === 'vision' ?
              "[Your vision statement here]" : ''}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionVision;
