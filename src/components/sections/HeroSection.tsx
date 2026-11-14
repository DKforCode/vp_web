'use client';

import React, { useState } from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

export function HeroSection() {
  const [activeSwatch, setActiveSwatch] = useState<string>('Imperial Teal');
  const [activeColor, setActiveColor] = useState<string>('#0D324D');

  const { count: awardsCount, elementRef: statsRef } = useAnimatedCounter(13, 1200);
  const { count: litersCount } = useAnimatedCounter(25000, 1800);
  const { count: homesCount } = useAnimatedCounter(1200, 1600);

  const swatches = [
    { name: 'Imperial Teal', hex: '#0D324D', brand: 'Nerolac' },
    { name: 'Saffron Vermilion', hex: '#FF5722', brand: 'Nerolac' },
    { name: 'Heritage Gold', hex: '#F9A825', brand: 'Birla Opus' },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto" id="about">
      {/* Ambient Radial Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Trust Honors Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 border border-secondary/20 text-on-secondary-fixed mb-4 sm:mb-6 shadow-xs">
            <span className="material-symbols-outlined material-symbols-filled text-secondary text-[16px] sm:text-[18px]">
              workspace_premium
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase">
              13-Time Nerolac Excellence Awardee
            </span>
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Transform Your Space with{' '}
            <span className="bg-gradient-to-r from-secondary-container via-secondary to-primary bg-clip-text text-transparent">
              Authentic Designer
            </span>{' '}
            Finishes
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Authorized flagship distributor for <strong className="text-primary font-bold">Kansai Nerolac</strong>,{' '}
            <strong className="text-primary font-bold">Asian Paints</strong>, and{' '}
            <strong className="text-primary font-bold">Birla Opus</strong>. Featuring high-precision computerized tinting, authentic direct mill supplies, and end-to-end master painting solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
            <a
              href="#brands"
              className="py-3.5 px-7 rounded-xl bg-secondary-container text-white text-sm font-bold shadow-md hover:brightness-110 saffron-glow active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Premium Finishes</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#store-locator"
              className="py-3.5 px-6 rounded-xl bg-surface-container-lowest text-primary text-sm font-bold border border-outline-variant/60 hover:bg-surface-container active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              <span>Visit Our Studio</span>
            </a>
          </div>

          {/* Animated Metrics Strip */}
          <div
            ref={statsRef}
            className="w-full grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 pt-6 border-t border-outline-variant/30"
          >
            <div className="text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary block leading-none">
                {awardsCount}+
              </span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-1 block">
                Nerolac Awards
              </span>
            </div>

            <div className="text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary block leading-none">
                {litersCount >= 1000 ? `${(litersCount / 1000).toFixed(0)}k+` : `${litersCount}+`}
              </span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-1 block">
                Liters Tinted
              </span>
            </div>

            <div className="text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary block leading-none">
                {homesCount >= 1000 ? `${(homesCount / 1000).toFixed(1)}k+` : `${homesCount}+`}
              </span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-1 block">
                Homes Painted
              </span>
            </div>

            <div className="hidden sm:block text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-secondary-container block leading-none">
                100%
              </span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-1 block">
                Genuine Mill Seals
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Feature Showcase */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-surface-container-lowest">
            {/* Main Featured Image */}
            <div className="relative h-[280px] sm:h-[380px] lg:h-[480px] w-full overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida/ALJJyrCvllJfO5nn1m7zM-Sr3oVAq4W8sclQ6O0JiqmBXR7Stk2FKfoUfw0xN3nEfT-rFyA07FTHBnjrTjsswyN1O7swrtmIsTa4X1u8DUP5HfkKo3IU9dLYcq9MZHvIt46gy9Z0z2jBr7VmFTjhtQv00vlbWrNtdgyfV1No7GP1IwmwtNL0mmIH-DKGkI4eM-hYuywftZiHWj0wQLIYbqEQsT3ur8N_nSEskA2nXgd8z881"
                alt="Designer Living Room Finished in Authentic Premium Paints"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dynamic Tint Overlay based on selected swatch */}
              <div
                className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeColor }}
              />
              <div className="absolute inset-0 wet-coat-sheen pointer-events-none opacity-40" />
            </div>

            {/* Floating Tactile Glass Swatch Overlays (Desktop & Tablet) */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl lg:rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-secondary uppercase tracking-wider block">
                  Interactive Room Tone
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary block">
                  {activeSwatch}
                </span>
              </div>

              {/* Swatch Picker Chips */}
              <div className="flex items-center gap-2">
                {swatches.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    title={`${s.name} (${s.brand})`}
                    onClick={() => {
                      setActiveSwatch(s.name);
                      setActiveColor(s.hex);
                    }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all swatch-dot ${
                      activeSwatch === s.name
                        ? 'border-secondary-container scale-110 shadow-md ring-2 ring-secondary-container/40'
                        : 'border-white shadow-xs'
                    }`}
                    style={{ backgroundColor: s.hex }}
                    aria-label={`Select ${s.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
