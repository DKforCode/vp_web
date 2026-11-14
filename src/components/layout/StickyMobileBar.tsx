import React from 'react';

export function StickyMobileBar() {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 border-t border-outline-variant/30 shadow-[0_-4px_16px_rgba(0,29,49,0.08)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        <a
          href="tel:+919235554652"
          className="flex-1 py-3 px-3 rounded-xl bg-primary-container text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 py-3 px-3 rounded-xl bg-secondary-container text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 saffron-glow active:scale-95 transition-transform shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">assignment</span>
          Free Inspection
        </a>
      </div>
    </aside>
  );
}
