import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary text-surface border-t border-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        {/* Top Brand & Partner Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-lg">
              <span className="material-symbols-outlined material-symbols-filled text-[26px] text-secondary-container">
                verified
              </span>
            </div>
            <div>
              <span className="font-extrabold text-xl text-white tracking-tight block">
                VINAYAK PAINTS
              </span>
              <span className="text-xs text-on-primary-container font-semibold tracking-wider uppercase block">
                Authorized Master Paint Distributor
              </span>
            </div>
          </div>

          {/* Authorized Partner Crests */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
              Kansai Nerolac Authorized
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
              Asian Paints Direct Dealer
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
              Birla Opus Certified
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-white/10 text-sm">
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">
              Paint Catalogs
            </h4>
            <ul className="space-y-2.5 text-on-primary-container text-xs sm:text-sm">
              <li><a href="#brands" className="hover:text-white transition-colors">Kansai Nerolac Beauty Gold</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Asian Paints Royale Luxury</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Birla Opus Infinity Luxe</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Apex Ultima Weatherproof</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">PU Enamels & Metallic</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">
              Wall Preparation
            </h4>
            <ul className="space-y-2.5 text-on-primary-container text-xs sm:text-sm">
              <li><a href="#prep" className="hover:text-white transition-colors">Polymer Wall Putty</a></li>
              <li><a href="#prep" className="hover:text-white transition-colors">Architectural White Cement</a></li>
              <li><a href="#prep" className="hover:text-white transition-colors">Plaster of Paris (POP)</a></li>
              <li><a href="#prep" className="hover:text-white transition-colors">Damp-Proof Primers</a></li>
              <li><a href="#prep" className="hover:text-white transition-colors">Rustic Mineral Textures</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">
              Painting Services
            </h4>
            <ul className="space-y-2.5 text-on-primary-container text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Laser Moisture Scanning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dust-Free Vacuum Sanding</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Computerized Color Matching</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Waterproof Wall Warranty</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Bulk Supply</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">
              Visit Studio
            </h4>
            <ul className="space-y-2.5 text-on-primary-container text-xs sm:text-sm">
              <li className="text-white/90 font-medium">Shop 4 & 5, Commercial Complex</li>
              <li>Main Road, Near Landmark, Mumbai</li>
              <li className="pt-1 text-white font-semibold">Mon–Sat: 9 AM – 8:30 PM</li>
              <li className="pt-2">
                <a href="tel:+919235554652" className="text-secondary-fixed hover:underline flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  +91 92355 54652
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-primary-container/80">
          <p>
            © {new Date().getFullYear()} Vinayak Paints. 13-Time Nerolac Excellence Awardee. All brand trademarks belong to Kansai Nerolac, Asian Paints & Birla Opus.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white transition-colors">Terms of Supply</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#store-locator" className="hover:text-white transition-colors">Store Directions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
