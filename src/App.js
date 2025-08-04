import React from 'react';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import GallerySection from './components/GallerySection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import AboutUs from './components/AboutUs';
import FAQSection from './components/FAQSection';
import VolunteerForm from './components/VolunteerForm';
import './App.css';

function App() {
  return (
    <div>
      <CustomNavbar />
      <div id="home"><Home /></div>
      <GallerySection />
      <EventsSection />
      <TeamSection />
      <div id="about"><AboutUs /></div>
      <FAQSection />
      <div id="volunteer"><VolunteerForm /></div>
    </div>
  );
}

export default App;
