// src/App.js
import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import Partners from './components/Partners/Partners';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blog';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="p-4">
        <Partners/>
        <p>Here goes the main content of your application.</p>
        <Blogs/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
