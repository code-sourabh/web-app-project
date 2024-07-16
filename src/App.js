// src/App.js
import React from 'react';
import Footer from './components/Footer';
// import './index.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Partners from './components/Partners';
import Header from './components/Header';
import ExcellenceSection from './components/excellence';
import MissionVision from './components/missionvision/missionvision';
import FAQ from './components/FAQ/FAQ'
import Testimonial from './components/Testimonial/testimonial';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="p-4">
        <Partners/>
        <ExcellenceSection />
        <MissionVision />
        <p>Here goes the main content of your application.</p>
      </main>
       <FAQ/>
       <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;