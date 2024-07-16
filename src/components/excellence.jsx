import React from 'react';
import CountUp from 'react-countup';


const ExcellenceSection = () => {
  return (
    <section className="excellence-section">
      <h2>Tuned For Excellence</h2>
      <div className="stats-container">
        <StatItem end={10} suffix="+" text="Years of Cloud & Digital Expertise" />
        <StatItem end={500} suffix="+" text="Certified Cloud Experts" />
        <StatItem end={400} suffix="+" text="Businesses Enabled with Digital Transformation" />
        <StatItem end={90} suffix="%" text="CSAT Score" />
      </div>
    </section>
  );
};

const StatItem = ({ end, suffix, text }) => (
  <div className="stat-item">
    <CountUp end={end} suffix={suffix} duration={2.5}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} className="stat-number" />
          <p className="stat-text">{text}</p>
        </div>
      )}
    </CountUp>
  </div>
);

export default ExcellenceSection;