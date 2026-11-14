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
              href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x399d7f20ba34919d:0xe9920cfb075ac80a!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-container active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get Directions
            </a>
            <a
              href="tel:+919235554652"
              className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-surface-container text-primary border border-outline-variant/40 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call Studio
            </a>
            <a
              href={`https://wa.me/919235554652?text=Hi%20Vinayak%20Paints,%20I%20would%20like%20to%20inquire%20about%20paint%20shades`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Google Map */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-outline-variant/30 shadow-xl bg-surface-container-lowest h-[320px] sm:h-[400px] lg:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6301.667919544211!2d79.45252321377984!3d25.986583658346206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7f20ba34919d%3A0xe9920cfb075ac80a!2sVinayak%20Paints!5e0!3m2!1sen!2sin!4v1794686422584!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vinayak Paints Map Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
