import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Membership from './pages/Membership';
import VueContainer from './components/VueContainer'; // VueContainer for Vue components

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/event-calendar" element={<VueContainer component="EventCalendar" />} />
          <Route path="/blog" element={<VueContainer component="Blog" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
