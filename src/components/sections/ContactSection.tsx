'use client';

import React, { useState } from 'react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Interior Luxury Emulsion Painting',
    brand: 'Kansai Nerolac',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface-container-low border-t border-outline-variant/20" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-bold text-xs uppercase tracking-wider mb-2.5">
            <span className="material-symbols-outlined text-[16px]">support_agent</span>
            <span>Free Estimate & Technical Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            Request an Authentic Paint Consultation
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-2 max-w-xl mx-auto leading-relaxed">
            Fill in your project details for computerized shade advice, square footage estimation, and authentic manufacturer quote.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-surface-container-lowest border border-outline-variant/30 card-depth-2">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto mb-6">
                Thank you, <strong className="text-primary">{formData.name}</strong>. Our senior paint specialist will call you at <strong className="text-primary">{formData.phone}</strong> within 30 minutes with the computerized estimate.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="py-2.5 px-6 rounded-xl bg-surface-container text-primary font-bold text-xs"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface text-primary text-sm focus:outline-none focus:border-secondary-container focus:ring-3 focus:ring-secondary-container/20 input-interactive"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface text-primary text-sm focus:outline-none focus:border-secondary-container focus:ring-3 focus:ring-secondary-container/20 input-interactive"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Service Required */}
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface text-primary text-sm focus:outline-none focus:border-secondary-container focus:ring-3 focus:ring-secondary-container/20 input-interactive"
                  >
                    <option>Interior Luxury Emulsion Painting</option>
                    <option>Exterior Waterproof Coatings</option>
                    <option>Wall Putty & Substrate Prep</option>
                    <option>Full Turnkey 2BHK/3BHK Painting</option>
                    <option>Architectural Rustic Textures</option>
                    <option>Bulk Contractor / Commercial Supply</option>
                  </select>
                </div>

                {/* Brand Preference */}
                <div>
                  <label htmlFor="brand" className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
                    Brand Preference
                  </label>
                  <select
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface text-primary text-sm focus:outline-none focus:border-secondary-container focus:ring-3 focus:ring-secondary-container/20 input-interactive"
                  >
                    <option>Kansai Nerolac</option>
                    <option>Asian Paints</option>
                    <option>Birla Opus</option>
                    <option>Unsure / Recommend Best Option</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
                  Approx. Area or Specific Requirements (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. 1200 sq.ft living room, need moisture scanning and high-sheen washable teal finish."
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface text-primary text-sm focus:outline-none focus:border-secondary-container focus:ring-3 focus:ring-secondary-container/20 input-interactive"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-secondary-container text-white font-bold text-sm shadow-md hover:brightness-110 saffron-glow active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Get Free Instant Estimate & Callback</span>
              </button>

              <p className="text-center text-[11px] text-outline">
                🔒 Your privacy is guaranteed. No spam, direct technical callback only.
              </p>
            </form>
          )}

          {/* Direct Instant Contact Bar */}
          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-on-surface-variant font-medium">Or reach us directly right now:</span>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="py-2 px-3.5 rounded-lg bg-surface-container text-primary font-bold hover:bg-surface-container-high transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3.5 rounded-lg bg-[#25D366]/15 text-[#128C7E] font-bold hover:bg-[#25D366]/25 transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
