import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const ExcellenceSection = () => {
  const [key, setKey] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    setKey((prev) => prev + 1); // Force re-render on mount
  }, []);

  const stats = [
    { end: 10, suffix: "+", text: t("Years of Cloud & Digital Expertise") },
    { end: 500, suffix: "+", text: t("Certified Cloud Experts") },
    { end: 400, suffix: "+", text: t("Businesses Enabled with Digital Transformation") },
    { end: 90, suffix: "%", text: t("CSAT score") },
  ];

  return (
    <section className="bg-[#ff6600] text-white p-10 mt-2 md:p-16">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-center -mt-6 mb-10">
        Tuned For Excellence
        <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-white"></span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
    />
    <p className="mt-2 text-sm md:text-base">{text}</p>
  </div>
);

export default ExcellenceSection;
