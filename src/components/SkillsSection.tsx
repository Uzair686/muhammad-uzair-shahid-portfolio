import React, { useState } from 'react';
import { Code, Server, Database, Cloud, Bot, Layers, Check } from 'lucide-react';
import { SKILL_CATEGORIES, PIPELINE_STEPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedPipelineStep, setSelectedPipelineStep] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string, color: string) => {
    const props = { className: 'w-4 h-4', style: { color } };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'Bot':
        return <Bot {...props} />;
      case 'Layers':
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="skills">
      <div className="flex flex-col gap-1.5 mb-8 sm:mb-10">
        <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
          04 // SYSTEM SPECIFICATIONS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed]">
          Technical Toolkit &amp; Ecosystem
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] max-w-2xl leading-relaxed">
          Every tier of the digital product pipeline mastered for high-concurrency, maintainable web execution.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-xl bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/40 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-[#3a494b]/20">
              {getCategoryIcon(cat.icon, cat.color)}
              <span
                className="font-mono text-xs font-bold tracking-wider"
                style={{ color: cat.color }}
              >
                {cat.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-xs text-[#dfe2ed] border border-[#3a494b]/30 hover:border-[#00f2fe]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Flow Diagram Bar */}
      <div className="mt-8 p-5 sm:p-7 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 shadow-md">
        <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20 mb-5">
          <span className="font-mono text-[11px] text-[#849495] font-semibold uppercase tracking-wider">
            END-TO-END PRODUCT FLOW INTEGRATION
          </span>
          <span className="font-mono text-[11px] text-[#00f2fe] font-semibold uppercase tracking-wider">
            SYNCHRONIZED PIPELINE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          {PIPELINE_STEPS.map((step, idx) => {
            const isSelected = selectedPipelineStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setSelectedPipelineStep(isSelected ? null : idx)}
                className={`p-3.5 rounded-lg transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#262a32] border-[#00f2fe] shadow-[0_0_16px_rgba(0,242,254,0.2)]'
                    : 'bg-[#262a32]/80 border-[#3a494b]/30 hover:border-[#3a494b]'
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-bold block ${
                    idx === 0
                      ? 'text-[#00f2fe]'
                      : idx === 1
                      ? 'text-[#dfe2ed]'
                      : idx === 2
                      ? 'text-[#4edea3]'
                      : idx === 3
                      ? 'text-[#7bd0ff]'
                      : 'text-[#6ff6ff]'
                  }`}
                >
                  {step.step}. {step.title}
                </span>
                <span className="text-xs text-[#dfe2ed] font-medium block mt-0.5">
                  {step.detail}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Expander */}
        {selectedPipelineStep !== null && (
          <div className="mt-4 p-3.5 rounded bg-[#181c23] border border-[#00f2fe]/30 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#00f2fe]">
                Stage {PIPELINE_STEPS[selectedPipelineStep].step}: {PIPELINE_STEPS[selectedPipelineStep].title} — {PIPELINE_STEPS[selectedPipelineStep].detail}
              </span>
              <p className="text-xs text-[#b9cacb] mt-0.5">
                {PIPELINE_STEPS[selectedPipelineStep].desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
