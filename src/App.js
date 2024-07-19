// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css';

import Contact from './components/Contact/Contact';
import IndustryPage from './components/industry page/IndustryPage';
import About from './pages/About';
import Home from './pages/Home';
// import Services from './components/solution/solution';
import Slider from './pages/Slider';
import Team from './pages/Team';
import Undefined from './pages/Undefined';
import Industries from './components/industry page/Industry-banner';
import Services from './pages/Services';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services/:serviceType" element={<Services/>} />
      <Route path="/industries/:industriesType" element={<IndustryPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/slide" element={<Slider/>} />
      <Route path="/partner" element={<Team/>} />
      <Route path="*" element={<Undefined/>} />
      </Routes>
      <Industries/>
      <Footer /> 
       
      
    </div>
  );
}

export default App;


