import React from "react";
import Description from "../components/Description Tab/Description";
import Hero from "../components/Hero section/Hero";
import Partners from "../components/Partners/Partners";
import Testimonial from "../components/Testimonial/testimonial";
import Excellence from "../components/excellence/excellence";
import Industries from "../components/industry page/Industry-banner";
import IndustryType from "../components/industry page/IndustryType";
import Banner from "../components/Contact/Banner";

const Home = () => {
  return (
    <div className="mt-[5rem]">
      <Hero />
      <Description />
      <Partners />
      <Excellence />
      <IndustryType />
      <Testimonial />
      <Industries />
      <Banner />
    </div>
  );
};

export default Home;
