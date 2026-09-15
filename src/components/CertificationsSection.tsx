import React from 'react';
import { Award, GraduationCap, Cloud, Terminal, FlaskConical, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="certifications">
      <div className="flex flex-col gap-1.5 mb-8 sm:mb-10">
        <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
          07 // VALIDATED CREDENTIALS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed]">
          Certifications &amp; Education
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] max-w-2xl leading-relaxed">
          Official technical qualifications, cloud benchmarks, and ongoing computer science scholarship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Primary Cert: Azure AZ-900 */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-xl bg-[#1c2027] border border-[#4edea3]/40 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#4edea3]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20">
              <span className="font-mono text-[11px] text-[#4edea3] font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                MICROSOFT OFFICIAL CERTIFICATION
              </span>
              <span className="font-mono text-[11px] text-[#849495] tracking-wider">
                PASSED: MAY 2, 2026
              </span>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#262a32] border border-[#3a494b]/40 flex items-center justify-center flex-shrink-0 text-[#4edea3]">
                <Cloud className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#dfe2ed]">
                  Microsoft Azure Fundamentals
                </h3>
                <p className="font-mono text-xs text-[#00f2fe] font-medium mt-0.5">
                  EXAM AZ-900 • VERIFIED CREDENTIAL
                </p>
                <p className="text-xs sm:text-sm text-[#b9cacb] mt-2 leading-relaxed">
                  Demonstrated foundational knowledge of cloud concepts, Azure architectural services, security, compliance, governance, workload privacy, and pricing telemetry.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#3a494b]/20 flex items-center justify-between font-mono text-[11px] text-[#849495] tracking-wider">
            <span>ISSUED BY MICROSOFT</span>
            <span className="text-[#4edea3] font-semibold">AUTHENTIC • ACTIVE</span>
          </div>
        </div>

        {/* Secondary Cert: Web Dev Program */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-xl bg-[#181c23] border border-[#3a494b]/30 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20">
              <span className="font-mono text-[11px] text-[#00f2fe] font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                INTENSIVE TRAINING
              </span>
              <span className="font-mono text-[11px] text-[#849495] tracking-wider">
                COMPLETED: MARCH 15, 2024
              </span>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#262a32] border border-[#3a494b]/40 flex items-center justify-center flex-shrink-0 text-[#00f2fe]">
                <Terminal className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#dfe2ed]">
                  Web Development Program
                </h3>
                <p className="font-mono text-xs text-[#00f2fe] font-medium mt-0.5">
                  Insight Skill Development Training Program
                </p>
                <p className="text-xs sm:text-sm text-[#b9cacb] mt-2 leading-relaxed">
                  Rigorous practical training in modern frontend design paradigms, JavaScript runtime essentials, responsive layout dynamics, and industry best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#3a494b]/20 flex items-center justify-between font-mono text-[11px] text-[#849495] tracking-wider">
            <span>SKILLS ACCREDITATION</span>
            <span className="text-[#00f2fe] font-semibold">CERTIFIED GRADUATE</span>
          </div>
        </div>

        {/* Formal Degree & Education Strip */}
        <div className="lg:col-span-8 p-6 rounded-xl bg-[#181c23] border border-[#3a494b]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-[#3a494b]/20">
              <span className="font-mono text-[11px] text-[#849495] font-semibold uppercase tracking-wider">
                ACADEMIC MILESTONES
              </span>
              <span className="font-mono text-[11px] text-[#4edea3] font-semibold uppercase tracking-wider">
                ACTIVE ENROLLMENT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
              <div>
                <span className="font-mono text-[11px] text-[#00f2fe] font-semibold tracking-wider">
                  2023 – 2027 (IN PROGRESS)
                </span>
                <h4 className="font-display text-base font-bold text-[#dfe2ed] mt-1">
                  BS Information Technology (BSIT)
                </h4>
                <p className="text-xs text-[#b9cacb] mt-0.5">
                  Superior College Associated With GCUF • <span className="text-[#dfe2ed] font-medium">7th Semester</span>
                </p>
                <p className="text-xs text-[#849495] mt-1.5 leading-relaxed">
                  Coursework: Object-Oriented Programming, Web Architectures, Database Systems, Computer Networks.
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#849495] font-semibold tracking-wider">
                  COMPLETED
                </span>
                <h4 className="font-display text-base font-bold text-[#dfe2ed] mt-1">
                  Intermediate Studies
                </h4>
                <p className="text-xs text-[#b9cacb] mt-0.5">
                  Government College Mian Channu
                </p>
                <p className="text-xs text-[#849495] mt-1.5 leading-relaxed">
                  Strong foundation in analytical mathematics, computing concepts, and scientific principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Building / Honest Exploration Card */}
        <div className="lg:col-span-4 p-6 rounded-xl bg-[#1c2027] border border-[#3a494b]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-2.5 border-b border-[#3a494b]/20 text-[#00f2fe]">
              <FlaskConical className="w-4 h-4" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                CURRENTLY BUILDING &amp; EXPLORING
              </span>
            </div>

            <p className="text-xs text-[#b9cacb] mt-3 leading-relaxed">
              Honest active experiments taking place in my digital laboratory:
            </p>

            <ul className="mt-3 space-y-2 font-mono text-xs text-[#dfe2ed]">
              <li className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">•</span>
                <span>Next-gen AI career recommendation agents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">•</span>
                <span>Lightweight developer workflow utilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">•</span>
                <span>SaaS automation models with Azure services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">•</span>
                <span>Micro-frontend integrations with Angular 18</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-[#3a494b]/20 font-mono text-[10px] text-[#849495] uppercase tracking-wider">
            Continuous R&amp;D Protocol
          </div>
        </div>
      </div>
    </section>
  );
};
