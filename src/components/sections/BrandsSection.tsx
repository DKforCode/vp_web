'use client';

import React, { useState } from 'react';
import { BRANDS } from '@/lib/constants';
import { Swatch } from '@/types/paints';

export function BrandsSection() {
  const [selectedSwatch, setSelectedSwatch] = useState<{ [brandId: string]: Swatch | null }>({
    nerolac: null,
    'asian-paints': null,
    'birla-opus': null,
  });

  const handleSwatchClick = (brandId: string, swatch: Swatch) => {
    setSelectedSwatch((prev) => ({
      ...prev,
      [brandId]: prev[brandId]?.id === swatch.id ? null : swatch,
    }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/20" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Authorized Strategic Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Direct Tier-1 Authorized Brands
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
            Guaranteed 100% authentic formulations mixed directly with computerized factory codes. No diluted pigments, zero third-party intermediaries.
          </p>
        </div>

        {/* 1. Mobile Phone Horizontal Swipeable Carousel (Visible on < lg screens) */}
        <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 -mx-4 px-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="w-[84vw] max-w-[320px] shrink-0 snap-center rounded-2xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  {brand.badge}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-primary">{brand.name}</h3>
                  <p className="text-xs text-secondary font-bold mb-2">{brand.tagline}</p>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-3">
                    {brand.description}
                  </p>

                  {/* Finish Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {brand.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-surface-container text-primary font-medium border border-outline-variant/20"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>

                  {/* Shade Swatches */}
                  <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="text-[11px] text-on-surface-variant font-medium">Curated Shades:</span>
                    <div className="flex items-center gap-1.5">
                      {brand.swatches.map((swatch) => (
                        <button
                          key={swatch.id}
                          type="button"
                          title={`${swatch.name} (${swatch.code})`}
                          onClick={() => handleSwatchClick(brand.id, swatch)}
                          className={`w-6 h-6 rounded-full border-2 transition-all swatch-dot ${
                            selectedSwatch[brand.id]?.id === swatch.id
                              ? 'border-secondary-container scale-125 ring-2 ring-secondary-container/40'
                              : 'border-white shadow-xs'
                          }`}
                          style={{ backgroundColor: swatch.hex }}
                          aria-label={swatch.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 w-full py-2.5 px-3 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore {brand.name.split(' ')[0]} Catalog</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop 3-Column Bento Grid (Visible on lg+ screens) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="rounded-3xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm hover-lift flex flex-col justify-between group"
            >
              <div>
                {/* Brand Visual */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 wet-coat-sheen opacity-40 pointer-events-none" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-xs shadow-md">
                    {brand.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-extrabold text-xl text-primary">{brand.name}</h3>
                  <p className="text-xs font-bold text-secondary mb-3">{brand.tagline}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                    {brand.description}
                  </p>

                  {/* Finish Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="text-xs px-2.5 py-1 rounded-lg bg-surface-container text-primary font-semibold border border-outline-variant/20"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Wet Swatches */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-primary">
                        {selectedSwatch[brand.id] ? selectedSwatch[brand.id]?.name : 'Popular Tones:'}
                      </span>
                      <span className="text-[11px] text-on-surface-variant font-mono">
                        {selectedSwatch[brand.id] ? selectedSwatch[brand.id]?.code : 'Instant Mixing'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {brand.swatches.map((swatch) => (
                        <button
                          key={swatch.id}
                          type="button"
                          title={`${swatch.name} (${swatch.code})`}
                          onClick={() => handleSwatchClick(brand.id, swatch)}
                          className={`w-8 h-8 rounded-full border-2 transition-all swatch-dot ${
                            selectedSwatch[brand.id]?.id === swatch.id
                              ? 'border-secondary-container scale-125 ring-3 ring-secondary-container/40 shadow-md'
                              : 'border-white shadow-xs'
                          }`}
                          style={{ backgroundColor: swatch.hex }}
                          aria-label={swatch.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-surface-container text-primary hover:bg-primary-container hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-primary group-hover:text-white"
                >
                  <span>Explore Full Catalog</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
