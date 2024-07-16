// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('product');

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    'product',
    'subscriptions',
    'shipping',
    'returns + changes',
    'other'
  ];

  const faqs = {
    product: [
      {
        question: 'What services does Webress offer?',
        answer: 'Webress offers a range of web development and digital marketing services tailored to meet the needs of our clients.'
      },
      // Add more product-related questions here
    ],
    subscriptions: [
      {
        question: 'Do you offer subscription discounts?',
        answer: 'Of course we do. Our products are specifically designed to be enjoyed every day, so if that\'s what you\'re doing, you should be rewarded for it.'
      },
      {
        question: 'Can I pause or cancel my subscription?',
        answer: 'Yes, you can pause or cancel your subscription at any time through your account settings.'
      },
      {
        question: 'Will I be able to easily manage my account? For example, can I change my shipping address or payment info?',
        answer: 'Absolutely, you can manage all your account details including shipping address and payment info through your account settings.'
      },
      // Add more subscription-related questions here
    ],
    shipping: [
      // Add shipping-related questions here
    ],
    'returns + changes': [
      // Add returns and changes-related questions here
    ],
    other: [
      // Add other questions here
    ]
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-categories">
        {categories.map((category) => (
          <div
            key={category}
            className={`faq-category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="faq-questions">
        {faqs[activeCategory].map((faq, index) => (
          <div key={index} className="faq-item-container">
            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleQuestion(index)}>
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="contact-us">
        <h2>Have something not being addressed?</h2>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default FAQ;
