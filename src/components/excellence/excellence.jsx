import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const ExcellenceSection = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1); // Force re-render on mount
  }, []);

  const stats = [
    { end: 10, suffix: "+", text: "Years of Cloud & Digital Expertise" },
    { end: 500, suffix: "+", text: "Certified Cloud Experts" },
    { end: 400, suffix: "+", text: "Businesses Enabled with Digital Transformation" },
    { end: 90, suffix: "%", text: "CSAT Score" },
  ];

  return (
    <section className="bg-[#0A2647] text-white p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tuned For Excellence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={`${index}-${key}`} {...stat} />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({ end, suffix, text }) => (
  <div className="flex flex-col items-center text-center">
    <CountUp
      start={0}
      end={end}
      duration={3}
      suffix={suffix}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400"
    />
    <p className="mt-2 text-sm md:text-base">{text}</p>
  </div>
);

export default ExcellenceSection;