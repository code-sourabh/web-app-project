import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

const DropdownMenu = ({
  items,
  closeDropdown,
  isMobile,
  setMenuOpen,
  menuOpen,
  isTopLevel,
  onBackToMain,
  mobileMenuLevel,
  setMobileMenuLevel,
}) => {
  const [activeSection, setActiveSection] = useState(
    items ? items.sidebar[0].title : ""
  );
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
  const activeCards = activeSectionData
    ? activeSectionData.cards
    : [...items.sidebar[0].cards];

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
          <div className="flex flex-wrap w-full p-4 grow gap-4">
            {activeCards.map((item, index) => (
              <Link to={`${item.link}/${item.name}`}><div
                key={index}
                className="w-64 h-16 p-4 border border-gray-300 rounded-lg text-center shadow-lg transition-transform transform hover:translate-y-[-5px] hover:shadow-xl flex flex-row items-center justify-center gap-2"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  closeDropdown();
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 mb-2"
                />
                <h3 className="m-0 text-base">{item.title}</h3>
              </div>
              </Link>
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
              <Link
                to={`${item.link}/${item.name}`}
                className="card"
                onClick={() => {
                  menuOpen && setMenuOpen(!menuOpen);
                  closeDropdown();
                }}
              >
                <div
                  className="gap-4 flex items-center justify-center"
                  key={index}
                >
                  <img src={item.icon} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
