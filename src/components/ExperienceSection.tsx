import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="experience">
      <div className="flex flex-col gap-1.5 mb-8 sm:mb-10">
        <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
          02 // VERIFIED TRACK RECORD
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed]">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] max-w-2xl leading-relaxed">
          Hands-on enterprise application development, modular frontend architecture, and real-world system integrations.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-7 rounded-xl bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 transition-all duration-300 shadow-md group flex flex-col justify-between"
          >
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? 'bg-[#4edea3]' : 'bg-[#849495]'
                    }`}
                  ></span>
                  <span
                    className={`font-mono text-[11px] font-bold tracking-wider ${
                      exp.isCurrent ? 'text-[#4edea3]' : 'text-[#b9cacb]'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">
                  {exp.location}
                </span>
              </div>

              {/* Role & Company */}
              <div className="mt-4">
                <h3 className="font-display text-xl font-bold text-[#dfe2ed] group-hover:text-[#00f2fe] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#e0fdff] font-medium mt-0.5">
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#b9cacb] mt-3 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#b9cacb]">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        exp.isCurrent ? 'text-[#00f2fe]' : 'text-[#4edea3]'
                      }`}
                    />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Pills */}
            <div className="mt-6 pt-4 border-t border-[#3a494b]/20 flex flex-wrap gap-1.5">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] border border-[#3a494b]/30 ${
                    exp.isCurrent ? 'text-[#00f2fe]' : 'text-[#b9cacb]'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
