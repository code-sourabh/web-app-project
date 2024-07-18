import React, { useState } from 'react';
import './solutionbody.css';

function CardBody({ cards }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (description) => {
    setPopupContent(description);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent('');
  };

  const handleCardClick = (index, description) => {
    setSelectedCard(index);
    openPopup(description);
  };

  return (
    <div className="cards-section">
      <h1>Our Services</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${selectedCard === index ? 'active' : ''}`} onClick={() => handleCardClick(index, card.description)}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2>{card.title}</h2>
            {/* <p>{card.description}</p> */}
            <button className="learn-more" onClick={(e) => { e.stopPropagation(); handleCardClick(index, card.description); }}>Learn More</button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <img src={cards[selectedCard]?.popupImage} alt={cards[selectedCard]?.title} className="popup-image" />
            <p>{popupContent}</p>
            <button className="contact-us">Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardBody;
