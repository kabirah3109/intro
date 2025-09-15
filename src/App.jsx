// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Navbar from './Pages/NavbarSection/Navbar'; 
import Home from './Pages/HomeSection/Home' 
import About from './Pages/AboutSection/About'; 
import Info from  './Pages/InfoSection/info'; 
import Contact from './Pages/ContactSection/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* 👈 Shared Navbar */}
        <main className="py-4">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;