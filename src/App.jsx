import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrengthSection from './components/StrengthSection';
import ServicesExplorer from './components/ServicesExplorer';
import GlobalFootprint from './components/GlobalFootprint';
import ProjectsGallery from './components/ProjectsGallery';
import ContactRFQ from './components/ContactRFQ';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectServiceForQuote = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      <Navbar />
      <main>
        <Hero />
        <StrengthSection />
        <ServicesExplorer onSelectService={handleSelectServiceForQuote} />
        <GlobalFootprint />
        <ProjectsGallery />
        <ContactRFQ preselectedService={preselectedService} />
      </main>
      <Footer />
    </div>
  );
}
