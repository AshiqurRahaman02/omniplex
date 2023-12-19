import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"

// pages
import Home from './pages/Home';
import Sign from './pages/Sign';
import Explore from './pages/Explore';
import About from './pages/About';
import Account from './pages/Account';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/about" element={<About/>} />
        <Route path="/account" element={<Account />} />
        <Route path="explore" element={<Explore/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
