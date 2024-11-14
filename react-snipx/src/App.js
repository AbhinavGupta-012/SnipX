import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import LoginPopup from './components/LoginPopup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Newsletter />
      <LoginPopup />
    </div>
  );
}

export default App;
