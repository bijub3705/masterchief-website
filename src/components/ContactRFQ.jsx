import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  FileDown,
  MessageSquare,
  Clock,
  Anchor,
  ShieldCheck,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  INDIAN_PORTS,
} from '../data/maritimeData';

export default function ContactRFQ({ prefillService, prefillPort }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    port: '',
    vesselEta: '',
    details: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    if (prefillService || prefillPort) {
      setFormData((prev) => ({
        ...prev,
        service: prefillService || prev.service,
        port: prefillPort || prev.port,
      }));
    }
  }, [prefillService, prefillPort]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid corporate/vessel email address';
        return '';
      case 'phone':
        if (value && !/^[\+]?[0-9\s\-\(\)]{7,20}$/.test(value))
          return 'Please enter a valid phone / WhatsApp number';
        return '';
      case 'details':
        if (value && value.trim().length > 0 && value.trim().length < 10)
          return 'Please provide at least 10 characters of requirement details';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus) setSubmitStatus(null);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setTouched({ name: true, email: true });
      setErrors({
        name: validateField('name', formData.name),
        email: validateField('email', formData.email),
      });
      return;
    }

    setSubmitting(true);
    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      port: formData.port,
      date: new Date().toISOString(),
      details: formData.vesselEta
        ? `[Vessel/ETA: ${formData.vesselEta}] ${formData.details}`
        : formData.details,
    };

    try {
      const response = await fetch(COMPANY_INFO.contact.contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          port: '',
          vesselEta: '',
          details: '',
        });
        setTouched({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const buildWhatsAppUrl = () => {
    const text = [
      `*Vessel Inquiry / RFQ — Masterchief Global*`,
      formData.name ? `• Name: ${formData.name}` : '',
      formData.company ? `• Company/Vessel: ${formData.company}` : '',
      formData.email ? `• Email: ${formData.email}` : '',
      formData.service ? `• Service Required: ${formData.service}` : '',
      formData.port ? `• Port / Location: ${formData.port}` : '',
      formData.vesselEta ? `• ETA / Urgency: ${formData.vesselEta}` : '',
      formData.details ? `• Details: ${formData.details}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
      text || 'Hello Masterchief Global Operations Desk, we would like to request vessel support / quotation.'
    )}`;
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-[#0A1626] border-t border-white/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/35 text-xs font-mono-tech uppercase tracking-widest text-amber-300 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#E87A35]" />
              24/7 VESSEL OPERATIONS & RAPID RFQ DESK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Let Us Build a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                Competent Ecosystem
              </span>{' '}
              for Your Fleet.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are always available and ready to offer the best technical services, surveys, riding squads, and
              supplies as per your vessel’s exact requirement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Masterchief_Global_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#102036] hover:bg-[#172C49] border border-white/15 text-xs sm:text-sm font-bold text-white transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#E87A35]" />
              Download Global Brochure
            </a>
          </div>
        </div>

        {/* Main Grid: Form (Left 7 cols) + Direct Channels & Map (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: RFQ & Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0E1E33] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Request Vessel Support / Business Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Direct dispatch to Masterchief Global Superintendency & Operations Desk
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono-tech text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Rapid Response
              </span>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/40 p-4 flex items-start gap-3 text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="font-bold text-white block">
                    Thank you! Your inquiry has been transmitted to our Operations Desk.
                  </strong>
                  Our Superintendents will review your vessel requirement and respond promptly. For immediate urgent
                  boarding, you may also call <strong className="text-white">+91 9778606981</strong>.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 rounded-xl bg-amber-500/15 border border-amber-500/40 p-4 flex items-start gap-3 text-amber-200">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm space-y-2">
                  <strong className="font-bold text-white block">
                    Network gateway busy — please use one-click direct dispatch below:
                  </strong>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`mailto:${COMPANY_INFO.contact.primaryEmail}?subject=${encodeURIComponent(
                        `Vessel Inquiry: ${formData.service || 'Maritime Solutions'} at ${formData.port || 'Port'}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPort: ${formData.port}\nETA: ${formData.vesselEta}\n\nDetails:\n${formData.details}`
                      )}`}
                      className="px-3 py-1.5 rounded-lg bg-[#D96B27] text-white text-xs font-bold"
                    >
                      Send via Email Client (ops@masterchiefglobal.com)
                    </a>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                    >
                      Send via WhatsApp Ops Desk
                    </a>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name / Rank *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Capt. Rajesh / Tech Supt."
                    className={`w-full rounded-xl bg-[#07111E] border px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                      touched.name && errors.name
                        ? 'border-rose-500'
                        : 'border-white/15 focus:border-[#E87A35]'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-rose-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                    Company / Vessel Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. ABC Ship Management / MV Ocean Star"
                    className="w-full rounded-xl bg-[#07111E] border border-white/15 focus:border-[#E87A35] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                    Corporate / Vessel Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@shippingcompany.com"
                    className={`w-full rounded-xl bg-[#07111E] border px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-rose-500'
                        : 'border-white/15 focus:border-[#E87A35]'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 / International Number"
                    className={`w-full rounded-xl bg-[#07111E] border px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                      touched.phone && errors.phone
                        ? 'border-rose-500'
                        : 'border-white/15 focus:border-[#E87A35]'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Service Pillar & Target Port */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-amber-300 mb-1.5">
                    Service / Solution Required
                  </label>
                  <input
                    type="text"
                    name="service"
                    list="masterchief-services-list"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Select or type required service..."
                    className="w-full rounded-xl bg-[#07111E] border border-white/15 focus:border-[#E87A35] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                  <datalist id="masterchief-services-list">
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-amber-300 mb-1.5">
                    Port of Call / Region
                  </label>
                  <input
                    type="text"
                    name="port"
                    list="masterchief-ports-list"
                    value={formData.port}
                    onChange={handleChange}
                    placeholder="e.g. Vizhinjam, Cochin, JNPT, Singapore..."
                    className="w-full rounded-xl bg-[#07111E] border border-white/15 focus:border-[#E87A35] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                  <datalist id="masterchief-ports-list">
                    {INDIAN_PORTS.map((p) => (
                      <option key={p.id} value={p.name} />
                    ))}
                    <option value="Singapore" />
                    <option value="China" />
                    <option value="Malaysia" />
                    <option value="GCC Regions (UAE / Oman / Saudi / Qatar)" />
                    <option value="Sri Lanka (Colombo / Galle)" />
                    <option value="Tanzania" />
                  </datalist>
                </div>
              </div>

              {/* Row 4: ETA / Schedule & Requirement Details */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                  Vessel ETA / Schedule Urgency (Optional)
                </label>
                <input
                  type="text"
                  name="vesselEta"
                  value={formData.vesselEta}
                  onChange={handleChange}
                  placeholder="e.g. Urgent Afloat Attendance / Next Port ETA 15th Nov"
                  className="w-full rounded-xl bg-[#07111E] border border-white/15 focus:border-[#E87A35] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300 mb-1.5">
                  Technical Scope / IMPA or Spare Part Specifications
                </label>
                <textarea
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Specify vessel requirement, survey scope, equipment model, or IMPA/ISSA list details..."
                  className="w-full rounded-xl bg-[#07111E] border border-white/15 focus:border-[#E87A35] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                />
                {touched.details && errors.details && (
                  <p className="text-rose-400 text-xs mt-1">{errors.details}</p>
                )}
              </div>

              {/* Submit & Direct WhatsApp Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#D96B27]/25 transition-all cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Transmitting Inquiry...' : 'Submit Vessel Inquiry / RFQ'}</span>
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Dispatch</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right: Direct Contact Cards, Map & Official Credentials */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Desk Card (Brochure Page 7) */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/15 p-6 space-y-3 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#D96B27]/20 border border-[#D96B27]/40 flex items-center justify-center text-[#E87A35] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-300">
                    For All Inquiries & Business Proposals
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                    className="font-display text-lg sm:text-xl font-bold text-white hover:text-amber-300 transition-colors block break-all"
                  >
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    We are always ready to offer you the best services, supplies, and solutions as per the vessel
                    requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Hotlines Card (Brochure Page 7) */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/15 p-6 space-y-3 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-emerald-300">
                    For Immediate 24/7 Assistance & Consultations
                  </div>
                  <div className="font-mono-tech text-lg sm:text-xl font-bold text-white space-x-2">
                    <a href="tel:+919778606981" className="hover:text-amber-300 transition-colors">
                      +91 9778606981
                    </a>
                    <span className="text-slate-500">/</span>
                    <a href="tel:+919778606991" className="hover:text-amber-300 transition-colors">
                      9778606991
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Direct access to our Master Mariner & Chief Engineer Superintendency team — always available and
                    ready to help.
                  </p>
                </div>
              </div>
            </div>

            {/* Registered Headquarters & Google Map */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/15 overflow-hidden shadow-xl">
              <div className="p-5 space-y-2 border-b border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-amber-300 font-semibold">
                    REGISTERED HEADQUARTERS
                  </span>
                  <span className="text-[11px] font-mono-tech text-slate-400">
                    TNID: {COMPANY_INFO.shipServId}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  {COMPANY_INFO.legalName}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E87A35] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address.full}</span>
                </p>
              </div>

              <div className="aspect-[16/9] w-full bg-[#07111E]">
                <iframe
                  title="Masterchief Global Headquarters - Kazhakkoottam, Thiruvananthapuram"
                  src={COMPANY_INFO.contact.googleMapsEmbed}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

