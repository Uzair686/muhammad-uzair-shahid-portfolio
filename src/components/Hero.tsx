import React from 'react';
import { ArrowDown, Mail, Download, CheckCircle2, Layers, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section className="relative w-full py-12 lg:py-20 overflow-hidden" id="hero">
      {/* Ambient directional light glows */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#4edea3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Primary Narrative & Status */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Live System Status Beacon */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-[#262a32]/90 border border-[#3a494b]/40 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#4edea3] font-semibold uppercase tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
            <span className="text-[#3a494b]">•</span>
            <span className="font-mono text-[11px] text-[#b9cacb] font-medium">OPEN TO REMOTE</span>
          </div>

          {/* Major Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#dfe2ed] leading-[1.1]">
            I build digital products that turn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#6ff6ff] to-[#4edea3]">
              ideas into real-world experiences.
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-lg sm:text-xl text-[#e0fdff]/90 font-medium leading-snug">
            Full Stack &amp; Angular Developer building modern web applications, AI-powered tools, and scalable digital experiences.
          </p>

          {/* Bio Summary */}
          <p className="text-base text-[#b9cacb] max-w-2xl leading-relaxed">
            I'm <span className="text-[#dfe2ed] font-semibold">Muhammad Uzair Shahid</span>, a full stack and Angular developer with professional experience building responsive, user-focused web applications. I also work across frontend systems, backend APIs, databases, cloud technologies, and AI-powered applications.
          </p>

          {/* CTAs Deck */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold tracking-tight shadow-[0_0_24px_rgba(0,242,254,0.35)] hover:shadow-[0_0_36px_rgba(0,242,254,0.6)] hover:bg-[#6ff6ff] transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#262a32] text-[#dfe2ed] border border-[#3a494b]/50 hover:border-[#00f2fe]/60 hover:text-[#00f2fe] font-mono text-xs font-semibold transition-all duration-300 shadow-sm"
            >
              <span>Let's Work Together</span>
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-3 text-[#b9cacb] hover:text-[#e0fdff] font-mono text-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Micro-Details Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#3a494b]/30 mt-2">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">EXPERIENCE</span>
              <span className="text-xl font-bold text-[#00f2fe]">3+ Years</span>
              <span className="font-mono text-[11px] text-[#b9cacb]/80">Professional Track</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">SPECIALIZATION</span>
              <span className="text-xl font-bold text-[#dfe2ed]">Angular &amp; TS</span>
              <span className="font-mono text-[11px] text-[#b9cacb]/80">Component Arch</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">AI / PRODUCT</span>
              <span className="text-xl font-bold text-[#4edea3]">Full-Stack</span>
              <span className="font-mono text-[11px] text-[#b9cacb]/80">Flask • Python • LLMs</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">CLOUD OPS</span>
              <span className="text-xl font-bold text-[#7bd0ff]">AZ-900</span>
              <span className="font-mono text-[11px] text-[#b9cacb]/80">Microsoft Azure</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Technical Stack & Architecture Dossier */}
        <div className="lg:col-span-5 relative">
          <div className="w-full rounded-2xl bg-[#0f131b]/95 border border-[#3a494b]/50 shadow-[0_24px_48px_rgba(0,0,0,0.6)] p-6 sm:p-7 flex flex-col gap-5">
            {/* Header / Credential Flag */}
            <div className="flex items-center justify-between pb-4 border-b border-[#3a494b]/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f2fe] animate-pulse"></span>
                <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
                  TECHNICAL DOSSIER
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 font-mono text-[10px] text-[#4edea3] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
                AZ-900 CERTIFIED
              </span>
            </div>

            {/* Core Competencies Matrix */}
            <div className="space-y-4">
              {/* Frontend Architecture */}
              <div className="p-3.5 rounded-xl bg-[#181c23]/90 border border-[#3a494b]/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <Layers className="w-4 h-4 text-[#00f2fe]" />
                  <span className="font-mono text-xs font-bold text-[#dfe2ed]">Frontend Architecture</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#00f2fe]/10 text-[#00f2fe] font-mono text-[11px] font-semibold border border-[#00f2fe]/20">Angular 18+</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#dfe2ed] font-mono text-[11px] border border-[#3a494b]/30">TypeScript</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#b9cacb] font-mono text-[11px] border border-[#3a494b]/30">RxJS Streams</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#b9cacb] font-mono text-[11px] border border-[#3a494b]/30">Signals</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#b9cacb] font-mono text-[11px] border border-[#3a494b]/30">Tailwind CSS</span>
                </div>
              </div>

              {/* Backend & APIs */}
              <div className="p-3.5 rounded-xl bg-[#181c23]/90 border border-[#3a494b]/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <Cpu className="w-4 h-4 text-[#4edea3]" />
                  <span className="font-mono text-xs font-bold text-[#dfe2ed]">Backend &amp; API Services</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#4edea3]/10 text-[#4edea3] font-mono text-[11px] font-semibold border border-[#4edea3]/20">Python (Flask)</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#dfe2ed] font-mono text-[11px] border border-[#3a494b]/30">Node.js</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#b9cacb] font-mono text-[11px] border border-[#3a494b]/30">RESTful APIs</span>
                  <span className="px-2 py-0.5 rounded bg-[#262a32] text-[#b9cacb] font-mono text-[11px] border border-[#3a494b]/30">JWT Auth</span>
                </div>
              </div>

              {/* Cloud, Database & AI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#181c23]/90 border border-[#3a494b]/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Cloud className="w-4 h-4 text-[#7bd0ff]" />
                    <span className="font-mono text-xs font-bold text-[#dfe2ed]">Cloud &amp; DevOps</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#b9cacb] leading-tight">
                    Microsoft Azure (AZ-900), Git Workflows, Vercel Deployments
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#181c23]/90 border border-[#3a494b]/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Database className="w-4 h-4 text-[#e0fdff]" />
                    <span className="font-mono text-xs font-bold text-[#dfe2ed]">Data &amp; AI</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#b9cacb] leading-tight">
                    MongoDB, MySQL, LLM Prompt Tuning &amp; NLP Parsers
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Commitments */}
            <div className="pt-3 border-t border-[#3a494b]/30 flex flex-col gap-2 font-mono text-[11px] text-[#b9cacb]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] flex-shrink-0" />
                <span>Responsive, accessible, production-ready code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] flex-shrink-0" />
                <span>Clean component architecture &amp; scalable state design</span>
              </div>
            </div>
          </div>

          {/* Quick Skill Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
              #Angular18
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
              #TypeScript
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
              #Python
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
              #Flask
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
              #AzureAZ900
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
