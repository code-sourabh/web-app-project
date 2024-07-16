// src/App.js
import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="p-4">
        <Partners/>
        <ExcellenceSection />
        <MissionVision />
        {/* <p>Here goes the main content of your application.</p> */}
        <Blogs/>
      </main>
       <FAQ/>
       <Testimonial/>
       <Banner/>
       <Contact/>
      <Footer />
    </div>
  );
}

export default App;