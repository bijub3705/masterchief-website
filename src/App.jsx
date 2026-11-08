import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrengthSection from './components/StrengthSection';
import ServicesExplorer from './components/ServicesExplorer';
import GlobalFootprint from './components/GlobalFootprint';
import ProjectsGallery from './components/ProjectsGallery';
import ContactRFQ from './components/ContactRFQ';
import Footer from './components/Footer';
import { PhoneCall, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/maritimeData';

export default function App() {
  const [prefillService, setPrefillService] = useState('');
  const [prefillPort, setPrefillPort] = useState('');

  const handleQuickQuote = (service = '', port = '') => {
    if (service) setPrefillService(service);
    if (port) setPrefillPort(port);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07111E] text-slate-100 flex flex-col selection:bg-[#D96B27] selection:text-white">
      <Navbar onQuickQuote={handleQuickQuote} />

      <main className="flex-1">
        <Hero onQuickQuote={handleQuickQuote} />
        <StrengthSection onQuickQuote={handleQuickQuote} />
        <ServicesExplorer onQuickQuote={handleQuickQuote} />
        <GlobalFootprint onQuickQuote={handleQuickQuote} />
        <ProjectsGallery onQuickQuote={handleQuickQuote} />
        <ContactRFQ prefillService={prefillService} prefillPort={prefillPort} />
      </main>

      <Footer onQuickQuote={handleQuickQuote} />

      {/* Floating 24/7 Vessel Dispatch Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href="tel:+919778606981"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0D1B2E]/95 hover:bg-[#152A47] border border-white/20 text-xs font-mono-tech font-bold text-white shadow-2xl backdrop-blur-md transition-all"
          title="Call 24/7 Vessel Emergency Desk"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#E87A35]" />
          <span>24/7 Ops: +91 9778606981</span>
        </a>
        <a
          href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
            'Hello Masterchief Global Operations Desk, we require vessel assistance / quotation.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-bold text-white shadow-2xl shadow-emerald-900/50 transition-all"
          title="WhatsApp 24/7 Vessel Dispatch"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Dispatch</span>
        </a>
      </div>
    </div>
  );
}

