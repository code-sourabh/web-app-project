// src/App.js
import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Partners from './components/Partners';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="p-4">
        <Partners/>
        <p>Here goes the main content of your application.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
