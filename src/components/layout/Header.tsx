'use client';

import React from 'react';
import { useMobileMenu } from '@/hooks/useMobileMenu';

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Logo & Authorized Seal */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined material-symbols-filled text-[20px] sm:text-[24px] text-secondary-container">
              verified
            </span>
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg md:text-xl text-primary tracking-tight block leading-tight">
              VINAYAK PAINTS
            </span>
            <span className="text-[10px] sm:text-[11px] text-secondary font-bold tracking-wider uppercase block">
              Authorized Paint Dealer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-on-surface-variant">
          <a href="#brands" className="hover:text-secondary-container transition-colors">
            Authorized Brands
          </a>
          <a href="#prep" className="hover:text-secondary-container transition-colors">
            Wall Prep & Putty
          </a>
          <a href="#services" className="hover:text-secondary-container transition-colors">
            A to Z Painting
          </a>
          <a href="#awards" className="hover:text-secondary-container transition-colors">
            13 Nerolac Honors
          </a>
          <a href="#store-locator" className="hover:text-secondary-container transition-colors">
            Store Locator
          </a>
          <a href="#contact" className="hover:text-secondary-container transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Trailing CTA (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919235554652"
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary-container px-3 py-2 rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            +91 92355 54652
          </a>
          <a
            href="#contact"
            className="py-2.5 px-5 rounded-xl bg-secondary-container text-white text-xs font-bold shadow-sm hover:brightness-110 saffron-glow active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">draw</span>
            Request Consultation
          </a>
        </div>

        {/* Mobile Quick Actions & Hamburger (Visible on Mobile) */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+919235554652"
            className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary active:scale-95 transition-transform"
            aria-label="Call Store"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary active:scale-95 transition-transform"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Modal Menu (Collapsible) */}
      {isOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-base text-primary">
            <a
              href="#brands"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>Authorized Brands</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
            <a
              href="#prep"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>Wall Prep & Substrates</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
            <a
              href="#services"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>A to Z Painting Services</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
            <a
              href="#awards"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>13 Nerolac Awards</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
            <a
              href="#store-locator"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>Store Locator & Timings</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
            <a
              href="#contact"
              onClick={close}
              className="py-2.5 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
            >
              <span>Contact & Estimate</span>
              <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
            </a>
          </nav>

          <div className="mt-5 pt-4 border-t border-outline-variant/20 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={close}
              className="w-full py-3 px-4 rounded-xl bg-secondary-container text-white font-bold text-center text-sm shadow-sm saffron-glow"
            >
              Request Free Consultation
            </a>
            <div className="flex items-center justify-center gap-1.5 text-xs text-on-surface-variant font-medium mt-1">
              <span className="material-symbols-outlined material-symbols-filled text-secondary text-[16px]">
                verified
              </span>
              <span>13-Time Nerolac Excellence Awardee</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
