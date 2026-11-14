import React from 'react';
import { PREP_MATERIALS } from '@/lib/constants';

export function WallPrepSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto" id="prep">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-bold text-xs uppercase tracking-wider mb-2.5">
          <span className="material-symbols-outlined text-[16px]">construction</span>
          <span>Foundation & Substrates</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
          Wall Preparation & Construction Materials
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed">
          The durability of any luxury paint coat begins with a flawless, moisture-sealed base. We supply certified civil contractors and homeowners with high-yield substrates.
        </p>
      </div>

      {/* 1. Mobile 2x2 Touch-Friendly Grid (Visible on < lg) */}
      <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4">
        {PREP_MATERIALS.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-2.5">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                {item.badge}
              </span>
              <h3 className="font-bold text-sm text-primary mt-0.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] text-on-surface-variant line-clamp-2 mt-1 leading-normal">
                {item.description}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-3 text-[11px] font-bold text-secondary-container flex items-center gap-1"
            >
              <span>Get Rate</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>

      {/* 2. Desktop 5-Card Bento Grid (Visible on lg+) */}
      <div className="hidden lg:grid grid-cols-12 gap-6">
        {/* Card 1: Putty (Span 4) */}
        <div className="col-span-4 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 hover-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">format_paint</span>
              </div>
              <span className="text-xs font-bold text-secondary uppercase bg-secondary-fixed/40 px-2.5 py-1 rounded-full">
                Grade A Base
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">Polymer Wall Putty</h3>
            <p className="text-xs font-semibold text-secondary mb-3">Ultra-Fine Surface Substrate</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
              White cement-based water-resistant polymer putty creating a smooth, silky pore-free base for interior & exterior walls.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-medium">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                High Tensile Adhesion
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Prevents Paint Flaking
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Superior Whiteness
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-semibold">20kg / 40kg Bags</span>
            <a href="#contact" className="text-xs font-bold text-secondary-container hover:underline flex items-center gap-1">
              Bulk Inquiry <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Card 2: White Cement (Span 4) */}
        <div className="col-span-4 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 hover-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">domain</span>
              </div>
              <span className="text-xs font-bold text-primary uppercase bg-surface-container px-2.5 py-1 rounded-full">
                High Compressive
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">Architectural White Cement</h3>
            <p className="text-xs font-semibold text-secondary mb-3">Structural Masonry Base</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
              High-grade Portland white cement for decorative terrazzo floors, pre-cast panels, tile grouting, and marble laying.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-medium">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Uniform Consistency
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Crack-Resistant Setting
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Maximum Light Reflectance
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-semibold">1kg to 50kg Bags</span>
            <a href="#contact" className="text-xs font-bold text-secondary-container hover:underline flex items-center gap-1">
              Bulk Inquiry <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Card 3: Plaster of Paris (Span 4) */}
        <div className="col-span-4 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 hover-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <span className="text-xs font-bold text-tertiary-container uppercase bg-tertiary-fixed/50 px-2.5 py-1 rounded-full">
                Quick Setting
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">Plaster of Paris (POP)</h3>
            <p className="text-xs font-semibold text-secondary mb-3">Gypsum Sculpting & Cornices</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
              Ultra-fine hemihydrate gypsum for ornamental false ceilings, cornices, moldings, and leveling uneven plaster.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-medium">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Superfine 300 Mesh Pass
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Zero Setting Shrinkage
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Mirror-Smooth Finish
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-semibold">25kg Standard Packs</span>
            <a href="#contact" className="text-xs font-bold text-secondary-container hover:underline flex items-center gap-1">
              Bulk Inquiry <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Card 4: Waterproof Primers (Span 6) */}
        <div className="col-span-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 hover-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">water_drop</span>
              </div>
              <span className="text-xs font-bold text-secondary uppercase bg-secondary-fixed px-2.5 py-1 rounded-full">
                Damp-Proof Shield
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">Waterproof Primers & Damp-Proof Sealers</h3>
            <p className="text-xs font-semibold text-secondary mb-3">Moisture Defense Behind Coatings</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Deep-penetrating acrylic primers blocking efflorescence, alkali attacks, and rising dampness behind luxury coatings.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">Anti-Alkali</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">Deep Penetration</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">Micro-Pore Sealing</span>
            </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-semibold">1L, 4L, 10L, 20L Buckets</span>
            <a href="#contact" className="text-xs font-bold text-secondary-container hover:underline flex items-center gap-1">
              Bulk Inquiry <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Card 5: Rustic & Mineral Textures (Span 6) */}
        <div className="col-span-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 card-depth-1 hover-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">texture</span>
              </div>
              <span className="text-xs font-bold text-primary uppercase bg-surface-container px-2.5 py-1 rounded-full">
                Designer Grade
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">Rustic & Mineral Textures</h3>
            <p className="text-xs font-semibold text-secondary mb-3">Architectural Feature Wall Compounds</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Quartz-embedded specialty base coats delivering tactile rustic, travertine marble, and concrete-slate designer finishes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">UV Weather Proof</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">Travertine Finish</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-surface-container text-primary font-medium">Concrete Slate Look</span>
            </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-semibold">Specialty Buckets with Stencils</span>
            <a href="#contact" className="text-xs font-bold text-secondary-container hover:underline flex items-center gap-1">
              Bulk Inquiry <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
