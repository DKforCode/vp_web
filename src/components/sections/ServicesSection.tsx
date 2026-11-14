import React from 'react';
import { SERVICE_STEPS } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary text-surface relative overflow-hidden" id="services">
      {/* Subtle Pattern & Ambient Glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Turnkey Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            End-to-End A-to-Z Painting Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-primary-container mt-2 max-w-2xl mx-auto leading-relaxed">
            From digital protimeter moisture scanning to dust-free vacuum sanding and final inspection warranty, our master painters handle every square foot with robotic precision.
          </p>
        </div>

        {/* 1. Mobile Phone Vertical Timeline (Visible on < lg) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-white/20 space-y-6 sm:space-y-8 my-8 ml-2">
          {SERVICE_STEPS.map((step) => (
            <div key={step.step} className="relative group">
              {/* Timeline Marker Pin */}
              <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-secondary-container text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-primary">
                {step.step}
              </div>

              {/* Step Card Content */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-secondary-fixed uppercase tracking-wider">
                    {step.timeframe}
                  </span>
                  <span className="material-symbols-outlined text-secondary-container text-[18px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-white">{step.title}</h3>
                <p className="text-xs text-on-primary-container leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop 5-Step Process Timeline Grid (Visible on lg+) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mb-14">
          {SERVICE_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-secondary-container text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-bold text-secondary-fixed uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                    {step.timeframe}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-on-primary-container leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-1.5 text-xs text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
                <span>Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-secondary-container to-secondary text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-1">
              Need a Site Laser Scan & Moisture Check?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl">
              Get an expert certified painter to inspect your plaster, scan for hidden dampness, and provide a computer-calculated paint estimate at zero cost.
            </p>
          </div>
          <a
            href="#contact"
            className="py-3.5 px-7 rounded-xl bg-surface-container-lowest text-primary font-bold text-xs sm:text-sm shadow-md hover:bg-surface-container hover:scale-105 active:scale-95 transition-all shrink-0 text-center"
          >
            Book Free Painting Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
