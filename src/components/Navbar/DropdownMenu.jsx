import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({
  items,
  closeDropdown,
  isMobile,
  isTopLevel,
  onBackToMain,
  mobileMenuLevel,
  setMobileMenuLevel,
}) => {
    const [activeSection, setActiveSection] = useState(items ? items.sidebar[0].title : "");
    const [showCards, setShowCards] = useState(!isMobile);
  
    if (!items) return null;

  const handleSectionClick = (title) => {
    setActiveSection(title);
    if (isMobile) {
      setShowCards(true);
      setMobileMenuLevel("cards");
    }
  };

  const handleBackClick = () => {
    if (isMobile) {
      if (mobileMenuLevel === "cards") {
        setShowCards(false);
        setMobileMenuLevel("submenu");
      } else if (mobileMenuLevel === "submenu") {
        onBackToMain();
      }
    } else {
      closeDropdown();
    }
  };

  const activeSectionData = items.sidebar.find(
    (section) => section.title === activeSection
  );
  const activeCards = activeSectionData ? activeSectionData.cards : [];

  if (!isMobile) {
    return (
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <div className="sidebar">
            {items.sidebar.map((section, index) => (
              <button
                key={index}
                className={activeSection === section.title ? "active" : ""}
                onClick={() => setActiveSection(section.title)}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {activeCards.map((item, index) => (
              <div key={index} className="card">
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown-menu mobile">
      <div className="dropdown-header">
        <button className="back-button" onClick={handleBackClick}>
          ← {mobileMenuLevel === "cards" ? activeSection : items.title}
        </button>
      </div>
      <div className="dropdown-content">
        {mobileMenuLevel === "submenu" ? (
          <div className="sidebar">
            {items.sidebar.map((section, index) => (
              <button
                key={index}
                className={activeSection === section.title ? "active" : ""}
                onClick={() => handleSectionClick(section.title)}
              >
                {section.title}
                <span className="arrow">›</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="card-grid">
            {activeCards.map((item, index) => (
              <div key={index} className="card">
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
