import React from 'react';
import { Route } from 'lucide-react';
import { GROWTH_STEPS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Section Label & Visual Summary */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] text-[#00f2fe] font-bold tracking-wider">
              01 // IDENTITY &amp; VISION
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed] leading-tight">
            More Than <br className="hidden lg:block" />a Developer.
          </h2>

          <p className="text-sm sm:text-base text-[#b9cacb] leading-relaxed">
            I don’t just write code; I construct complete product architectures. By combining frontend engineering with backend logic, database schemas, cloud infrastructure, and AI tools, I turn raw concepts into functional, scalable software that delivers tangible value.
          </p>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-lg bg-[#181c23] border border-[#3a494b]/30">
              <span className="font-display text-3xl font-bold text-[#00f2fe]">7th</span>
              <p className="font-mono text-[11px] text-[#849495] mt-1 font-semibold uppercase tracking-wider">
                SEMESTER BSIT CANDIDATE
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#181c23] border border-[#3a494b]/30">
              <span className="font-display text-3xl font-bold text-[#4edea3]">3+</span>
              <p className="font-mono text-[11px] text-[#849495] mt-1 font-semibold uppercase tracking-wider">
                CORE PRODUCT INITIATIVES
              </p>
            </div>
          </div>
        </div>

        {/* Growth Trajectory & Horizontal Pipeline */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="p-5 sm:p-7 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20 mb-5">
              <span className="font-mono text-xs sm:text-sm text-[#dfe2ed] font-semibold flex items-center gap-2">
                <Route className="w-4 h-4 text-[#00f2fe]" />
                Product &amp; Technical Growth Pipeline
              </span>
              <span className="font-mono text-[11px] text-[#4edea3] font-semibold uppercase tracking-wider">
                CONTINUOUS ITERATION
              </span>
            </div>

            {/* Step by Step Journey */}
            <div className="relative flex flex-col gap-5">
              {GROWTH_STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded bg-[#262a32] flex-shrink-0 flex items-center justify-center font-mono text-xs font-bold text-[#00f2fe] border border-[#3a494b]/40 group-hover:border-[#00f2fe] group-hover:text-[#6ff6ff] transition-colors">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h3 className="font-display text-base font-semibold text-[#dfe2ed]">
                        {step.title}
                      </h3>
                      <span className={`font-mono text-[11px] font-medium ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#b9cacb] mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
