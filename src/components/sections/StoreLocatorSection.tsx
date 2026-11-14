import React from 'react';
import { STORE_DATA } from '@/lib/constants';

export function StoreLocatorSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto" id="store-locator">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Store Details */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            <span>Flagship Studio & Warehouse</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Visit Our Color Studio & Experience Center
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
            Explore over 2,500+ physical fan decks, test wet coat luster on wall panels, and watch our automated computerized tinting machines dispense your custom shades in minutes.
          </p>

          {/* Details Card */}
          <div className="w-full p-5 sm:p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 mb-6 space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                pin_drop
              </span>
              <div>
                <strong className="text-primary font-bold block">{STORE_DATA.name}</strong>
                <span className="text-on-surface-variant block">{STORE_DATA.address}</span>
                <span className="text-on-surface-variant block">{STORE_DATA.landmark}, {STORE_DATA.city} – {STORE_DATA.pincode}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                schedule
              </span>
              <div>
                <strong className="text-primary font-bold block">Operating Hours</strong>
                <span className="text-on-surface-variant block">{STORE_DATA.hours}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                precision_manufacturing
              </span>
              <div>
                <strong className="text-primary font-bold block">Computerized Tinting Facility</strong>
                <span className="text-on-surface-variant block">{STORE_DATA.tintingMachine}</span>
              </div>
            </div>
          </div>

          {/* Amenities Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {STORE_DATA.amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-semibold text-xs border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                {amenity}
              </span>
            ))}
          </div>

          {/* One-Tap Action Buttons (Directions, Call, WhatsApp) */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-container active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get Directions
            </a>
            <a
              href="tel:+919876543210"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-surface-container text-primary border border-outline-variant/40 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call Studio
            </a>
            <a
              href={`https://wa.me/919876543210?text=Hi%20Vinayak%20Paints,%20I%20would%20like%20to%20inquire%20about%20paint%20shades`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right Column: Visual Map Container with Marker Pin */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-outline-variant/30 shadow-xl bg-surface-container-lowest h-[320px] sm:h-[400px] lg:h-[480px]">
            <img
              src={STORE_DATA.mapImage}
              alt="Vinayak Paints Map Location"
              className="w-full h-full object-cover"
            />
            {/* Interactive Pin Card Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md border border-white/80 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-white flex items-center justify-center shadow-md animate-bounce">
                <span className="material-symbols-outlined material-symbols-filled text-[22px]">
                  storefront
                </span>
              </div>
              <div>
                <span className="font-extrabold text-xs sm:text-sm text-primary block">
                  Vinayak Paints Studio
                </span>
                <span className="text-[10px] sm:text-xs text-secondary font-bold uppercase tracking-wider block">
                  Open Today • 9 AM - 8:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
