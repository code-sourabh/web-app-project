import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const industries = [
  { name: 'Banking & Insurance', icon: '🏦', path: '/home' },
  { name: 'Financial Services', icon: '💰', path: '/home' },
  { name: 'Media & Entertainment', icon: '🎥', path: '/home' },
  { name: 'Telecom', icon: '📡', path: '/home' },
];

const Industries = () => {
  const { t } = useTranslation(); // Access the t function for translation
  const navigate = useNavigate();

  return (
    <div className="bg-pink-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{t('welcome_user')}</h2> {/* Translate title */}
      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            onClick={() => navigate(industry.path)}
            className="w-48 h-48 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <div className="text-xl font-medium text-center">{t(industry.name)}</div> {/* Translate industry name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
