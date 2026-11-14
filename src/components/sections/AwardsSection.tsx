'use client';

import React from 'react';
import { AWARDS, TRUST_BADGES, TESTIMONIALS } from '@/lib/constants';

export function AwardsSection() {
  // Duplicate awards list for seamless infinite loop on desktop
  const marqueeList = [...AWARDS, ...AWARDS, ...AWARDS];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/20 overflow-hidden" id="awards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[16px]">military_tech</span>
            <span>13-Time Nerolac Dealer of Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            Recognized for Unmatched Quality & Authenticity
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
            Over a decade of unbroken regional excellence awards conferred by Kansai Nerolac Paints Ltd. for retail integrity, client satisfaction, and genuine pigment distribution.
          </p>
        </div>

        {/* 1. Desktop Continuous Infinite Running Marquee Ticker (Hidden on Mobile) */}
        <div className="hidden lg:block relative mb-16 -mx-12 overflow-hidden py-4">
          {/* Gradient Masks for Seamless Edge Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />

          {/* Running Track */}
          <div className="animate-marquee flex gap-6 items-center">
            {marqueeList.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-80 shrink-0 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 flex items-center gap-4 group/trophy"
              >
                <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 border border-outline-variant/20 bg-surface-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/trophy:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider bg-secondary-fixed/50 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-sm text-primary mt-1 leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 line-clamp-1">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Trust Badges Bento (Mobile 2x2, Desktop 4-col) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-14">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 card-depth-1 hover-lift flex flex-col sm:flex-row items-start gap-3 sm:gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  {badge.icon}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-primary leading-tight">
                  {badge.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-snug">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Customer Testimonials */}
        {/* Mobile: Single Compact Review Card */}
        <div className="lg:hidden p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 card-depth-2">
          <div className="flex items-center gap-1 text-secondary-container mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined material-symbols-filled text-[18px]">
                star
              </span>
            ))}
            <span className="text-xs font-bold text-on-surface ml-1.5">
              5.0 (480+ Google Reviews)
            </span>
          </div>
          <blockquote className="text-xs text-on-surface-variant italic leading-relaxed">
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
          <div className="mt-3 flex items-center justify-between text-[11px] text-outline">
            <span className="font-bold text-primary">{TESTIMONIALS[0].name}</span>
            <span>{TESTIMONIALS[0].date}</span>
          </div>
        </div>

        {/* Desktop: 2 Full Testimonial Cards */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-secondary-container">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined material-symbols-filled text-[20px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-on-surface-variant font-medium">{t.date}</span>
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-primary block">{t.name}</span>
                  <span className="text-xs text-on-surface-variant block">{t.role}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-[11px] font-semibold text-primary">
                  Verified Purchase
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
