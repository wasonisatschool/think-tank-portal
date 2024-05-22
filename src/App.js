import React from 'react';
import {  HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ResearchAreas from './pages/ResearchAreas';
import ResearchOutputs from './pages/ResearchOutputs';
import Events from './pages/Events';
import NewsCenter from './pages/NewsCenter';
import ContactUs from './pages/ContactUs';
import ResearchDetail from './pages/ResearchDetail';
import NewsDetail from './pages/NewsDetail';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/research-areas" element={<ResearchAreas />} />
          <Route path="/research-outputs" element={<ResearchOutputs />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/news-center" element={<NewsCenter />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
