import React from 'react';
import { Check } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
            06 // MINDSET &amp; METHOD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed] leading-tight">
            From Code to <br />Business Ideas.
          </h2>
          <p className="text-sm sm:text-base text-[#b9cacb] leading-relaxed">
            I think beyond the interface. A great developer writes reliable code; a great digital product builder solves actual problems that humans and companies are willing to invest in.
          </p>

          {/* Product Principles Checklist */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 space-y-3 mt-2">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <div className="w-4 h-4 rounded-full bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">User Experience First: </span>
                <span className="text-[#b9cacb]">Frictionless intuitive ergonomics</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <div className="w-4 h-4 rounded-full bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">Measurable Business Value: </span>
                <span className="text-[#b9cacb]">Focused on ROI &amp; engagement</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <div className="w-4 h-4 rounded-full bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">Modular Scalability: </span>
                <span className="text-[#b9cacb]">Built to grow without rewrites</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <div className="w-4 h-4 rounded-full bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">Continuous Learning: </span>
                <span className="text-[#b9cacb]">Always testing new tools &amp; APIs</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Product Pillars Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Pillar 01 */}
          <div className="p-5 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 flex flex-col justify-between hover:border-[#00f2fe]/40 transition-colors shadow-sm">
            <div>
              <div className="font-mono text-2xl font-bold text-[#00f2fe]">01</div>
              <h3 className="font-display text-base font-bold text-[#dfe2ed] mt-2">
                Identify
              </h3>
              <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                Find real-world bottlenecks, pain points, and workflow inefficiencies worth solving for real users.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#849495] pt-4 border-t border-[#3a494b]/20 tracking-wider">
              PROBLEM VALIDATION
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="p-5 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 flex flex-col justify-between hover:border-[#4edea3]/40 transition-colors shadow-sm">
            <div>
              <div className="font-mono text-2xl font-bold text-[#4edea3]">02</div>
              <h3 className="font-display text-base font-bold text-[#dfe2ed] mt-2">
                Build
              </h3>
              <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                Transform conceptual solutions into functional, responsive, and reliable digital applications swiftly.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#849495] pt-4 border-t border-[#3a494b]/20 tracking-wider">
              RAPID EXECUTION
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="p-5 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-colors shadow-sm">
            <div>
              <div className="font-mono text-2xl font-bold text-[#7bd0ff]">03</div>
              <h3 className="font-display text-base font-bold text-[#dfe2ed] mt-2">
                Grow
              </h3>
              <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                Iterate relentlessly with real user telemetry, behavioral feedback, and strategic market adaptations.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#849495] pt-4 border-t border-[#3a494b]/20 tracking-wider">
              CONTINUOUS REFINEMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
