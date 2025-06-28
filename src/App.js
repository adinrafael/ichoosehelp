import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <img src="/background.jpg" alt="Background" className="background" />

      <header className="header">
        <img
          src="/menu_logo.png"
          alt="Menu Button"
          className={`menu-button ${menuOpen ? 'pressed' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="site-title">I Choose Help</div>
      </header>

      {menuOpen && (
        <nav className="menu-items">
          <a href="#about">About Us</a>
          <a href="#ocd">OCD Support</a>
          <a href="#phobia">Phobia Support</a>
          <a href="#trauma">Trauma Support</a>
          <a href="#contact">Contact Us</a>
          <a href="#book">Book a Time</a>
        </nav>
      )}

      <main className="center-content">
        <img src="/logo.png" alt="Logo" className="main-logo" />
        <div className="coming-soon">COMING SOON</div>
      </main>

      <footer className="footer">
        © 2025 Adin Rafael. All rights reserved.
      </footer>
    </div>
  );
}

export default App;