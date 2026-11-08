import React, { useState, useEffect } from 'react';
import {
  Send,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, INDIAN_PORTS } from '../data/maritimeData';

export default function ContactRFQ({ preselectedService }) {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || 'Port Operations & Consulting',
    port: 'Vizhinjam',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormState((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(COMPANY_INFO.contact.contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          service: formState.service,
          port: formState.port,
          message: `[Service: ${formState.service} | Port: ${formState.port} | Company: ${formState.company}] ${formState.details}`
        })
      });
    } catch {
      // Fallback handled gracefully via mailto/WhatsApp triggers in confirmation screen
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Masterchief Global Operations Desk,\n\nI would like to request a quote/attendance:\n- Name: ${formState.name || 'N/A'}\n- Company: ${formState.company || 'N/A'}\n- Service: ${formState.service}\n- Target Port: ${formState.port}\n- Scope: ${formState.details || 'Please contact me.'}`
    );
    return `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-navy-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>24/7 Operations Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Request Vessel <span className="gold-gradient-text">Attendance or Quote</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Connect directly with our technical team for vessel attendance, port operations, survey inquiries, or engineering retrofits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Channels + Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-6">
              {/* Operations Email */}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                    Operations Email
                  </span>
                  <span className="text-base font-mono font-bold text-white group-hover:text-gold-400 transition-colors">
                    {COMPANY_INFO.contact.email}
                  </span>
                </div>
              </a>

              {/* Direct Hotlines */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                    24/7 Duty Hotlines
                  </span>
                  <div className="space-y-1">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[0]}`}
                      className="block text-base font-mono font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      +91 97786 06981
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[1]}`}
                      className="block text-base font-mono font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      +91 97786 06991
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5">
                    Registered Office
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {COMPANY_INFO.contact.address}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Duty Superintendent on WhatsApp</span>
              </a>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 h-56 relative">
              <iframe
                title="Masterchief Global Registered Office Map"
                src={COMPANY_INFO.contact.googleMapsEmbed}
                className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Inquiry Logged with Operations Desk
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formState.name}</span>. Your inquiry for{' '}
                    <span className="text-gold-400 font-semibold">{formState.service}</span> at{' '}
                    <span className="text-cyan-400 font-semibold">{formState.port}</span> has been registered.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Capt. / Chief Eng. / Manager"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Company / Vessel Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Shipping Line / MV Vessel"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 / International Number"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Service Vertical
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title} className="bg-navy-900 text-white">
                            {s.number}. {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Target Port / Region
                      </label>
                      <select
                        name="port"
                        value={formState.port}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-400"
                      >
                        {INDIAN_PORTS.map((p) => (
                          <option key={p.name} value={p.name} className="bg-navy-900 text-white">
                            {p.name} ({p.coast} Coast)
                          </option>
                        ))}
                        <option value="Colombo / Sri Lanka" className="bg-navy-900 text-white">
                          Colombo / Sri Lanka
                        </option>
                        <option value="Middle East / UAE / Oman" className="bg-navy-900 text-white">
                          Middle East / UAE / Oman
                        </option>
                        <option value="Singapore / SE Asia" className="bg-navy-900 text-white">
                          Singapore / SE Asia
                        </option>
                        <option value="Other International Port" className="bg-navy-900 text-white">
                          Other International Port
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Operational Scope & Vessel ETA *
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      required
                      value={formState.details}
                      onChange={handleChange}
                      placeholder="Specify vessel type, ETA, cargo/repair particulars, or survey requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 disabled:opacity-60 text-navy-950 font-display font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Dispatching Inquiry...' : 'Submit Technical RFQ'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
