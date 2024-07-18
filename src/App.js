// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import './index.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blogs from './components/Blogs/Blog'
import Partners from './components/Partners/Partners';
import Header from './components/Header/Header';
import ExcellenceSection from './components/excellence';
import MissionVision from './components/missionvision/missionvision';
import FAQ from './components/FAQ/FAQ'
import Testimonial from './components/Testimonial/testimonial';
import Banner from './components/Contact/Banner';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero section/Hero';
import Description from './components/Description Tab/Description';
import MeetOurTeam from './components/teams/MeetOurTeam';
// import Industries from './components/Bl';
import IndustryPage from './components/industry page/IndustryPage'
import Slider from './components/Blogs/BlogSlider';
import Industries from './components/Industry-banner';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Routes>
      <Route path="/description" element={<Description/>} />
      <Route path="/partners" element={<Partners/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <main className="">
        
        
        <ExcellenceSection />
        <MissionVision />
        {/* <p>Here goes the main content of your application.</p> */}
        {/* <Blogs/> */}
        <Slider/>
      </main>
      <IndustryPage/>
       <FAQ/>
       <MeetOurTeam/>
       <Industries/>
       <Testimonial/>
       <Banner/>
       <Contact/>
      <Footer />
    </div>
  );
}

export default App;


