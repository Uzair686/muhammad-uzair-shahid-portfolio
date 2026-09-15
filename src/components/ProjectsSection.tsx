import React, { useState } from 'react';
import { ExternalLink, FileText, CheckCircle2, Cpu, ArrowUpRight, RefreshCw, ShieldCheck } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (id: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeRole, setActiveRole] = useState<'angular' | 'fullstack' | 'ai'>('angular');
  const [isScanning, setIsScanning] = useState(false);

  const roleDiagnostics = {
    angular: {
      role: 'Angular Full-Stack Engineer',
      match: 88.4,
      strengths: ['Angular 18 reactive forms & signals', 'Flask endpoint architecture & REST'],
      recommendation: 'Cloud microservice telemetry (Azure AZ-900)'
    },
    fullstack: {
      role: 'Senior TypeScript / Node Engineer',
      match: 92.1,
      strengths: ['Enterprise component hierarchies', 'RxJS asynchronous stream workflows'],
      recommendation: 'Distributed Redis pub/sub queue caching'
    },
    ai: {
      role: 'AI Product & LLM Applications Specialist',
      match: 85.6,
      strengths: ['Resume parsing algorithms & vector logic', 'Prompt engineering & conversational agents'],
      recommendation: 'Multi-modal embedding evaluation pipelines'
    }
  };

  const handleRoleChange = (role: 'angular' | 'fullstack' | 'ai') => {
    setIsScanning(true);
    setActiveRole(role);
    setTimeout(() => {
      setIsScanning(false);
    }, 450);
  };

  const currentDiag = roleDiagnostics[activeRole];

  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="projects">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
            03 // FEATURED INITIATIVES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed]">
            Things I've Built
          </h2>
          <p className="text-sm sm:text-base text-[#b9cacb] max-w-2xl leading-relaxed">
            Real projects, practical problems, and experiments turned into working digital products.
          </p>
        </div>
        <div className="font-mono text-[11px] text-[#4edea3] px-3.5 py-1.5 rounded bg-[#1c2027] border border-[#3a494b]/30 w-fit tracking-wider">
          ALL REPOSITORIES VERIFIED • PRODUCTION READY
        </div>
      </div>

      <div className="space-y-8">
        {/* FEATURED PROJECT 01: CareerPilot AI */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-xl bg-[#1c2027] border border-[#3a494b]/40 hover:border-[#00f2fe]/70 shadow-xl transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Project Brief */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#00f2fe]/10 border border-[#00f2fe]/40 font-mono text-[11px] text-[#00f2fe] font-bold tracking-wider">
                  FLAGSHIP SYSTEM
                </span>
                <span className="font-mono text-[11px] text-[#b9cacb] tracking-wider">
                  AI • CAREER INTELLIGENCE • FULL-STACK
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#dfe2ed] group-hover:text-[#00f2fe] transition-colors">
                CareerPilot AI
              </h3>

              <p className="text-base text-[#b9cacb] leading-relaxed">
                An AI-powered career intelligence platform engineered to analyze resumes, evaluate domain-specific technical skills, identify missing competencies, provide automated career guidance, and help users systematically elevate their professional trajectory.
              </p>

              {/* Feature Bullet Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2ed]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] flex-shrink-0" />
                  <span>Automated Resume Scoring &amp; Deep Parsing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2ed]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] flex-shrink-0" />
                  <span>Missing Skill &amp; Competency Gap Engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2ed]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] flex-shrink-0" />
                  <span>Intelligent AI Career Guidance Chatbot</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2ed]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] flex-shrink-0" />
                  <span>Interactive Interview Simulation Prep</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-[11px] text-[#6ff6ff] border border-[#3a494b]/30">
                  Python
                </span>
                <span className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-[11px] text-[#6ff6ff] border border-[#3a494b]/30">
                  Flask
                </span>
                <span className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-[11px] text-[#4edea3] border border-[#3a494b]/30">
                  AI Algorithms
                </span>
                <span className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
                  JavaScript
                </span>
                <span className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
                  REST APIs
                </span>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://github.com/Uzair686/careerpilot-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold hover:bg-[#6ff6ff] transition-all duration-200 shadow-sm"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenCaseStudy('careerpilot')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262a32] text-[#dfe2ed] border border-[#3a494b]/40 hover:border-[#00f2fe] font-mono text-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#00f2fe]" />
                  <span>Open Case Study</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive System Architecture & Capability Preview */}
            <div className="lg:col-span-5 rounded-xl bg-[#0f131b] p-5 sm:p-6 border border-[#3a494b]/40 text-xs shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/30">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00f2fe]" />
                  <span className="font-mono text-xs text-[#00f2fe] font-bold uppercase tracking-wider">
                    AI Intelligence Pipeline
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 font-mono text-[10px] text-[#4edea3] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                  LIVE ENGINE
                </span>
              </div>

              {/* Role switcher buttons */}
              <div className="flex items-center gap-1.5 mt-4 bg-[#181c23] p-1 rounded-lg border border-[#3a494b]/30">
                <button
                  onClick={() => handleRoleChange('angular')}
                  className={`flex-1 py-1.5 text-[11px] font-mono rounded-md transition-all cursor-pointer ${
                    activeRole === 'angular'
                      ? 'bg-[#00f2fe]/20 text-[#00f2fe] font-bold border border-[#00f2fe]/40 shadow-sm'
                      : 'text-[#b9cacb] hover:text-white'
                  }`}
                >
                  Angular Spec
                </button>
                <button
                  onClick={() => handleRoleChange('fullstack')}
                  className={`flex-1 py-1.5 text-[11px] font-mono rounded-md transition-all cursor-pointer ${
                    activeRole === 'fullstack'
                      ? 'bg-[#00f2fe]/20 text-[#00f2fe] font-bold border border-[#00f2fe]/40 shadow-sm'
                      : 'text-[#b9cacb] hover:text-white'
                  }`}
                >
                  Full-Stack
                </button>
                <button
                  onClick={() => handleRoleChange('ai')}
                  className={`flex-1 py-1.5 text-[11px] font-mono rounded-md transition-all cursor-pointer ${
                    activeRole === 'ai'
                      ? 'bg-[#00f2fe]/20 text-[#00f2fe] font-bold border border-[#00f2fe]/40 shadow-sm'
                      : 'text-[#b9cacb] hover:text-white'
                  }`}
                >
                  AI Specialist
                </button>
              </div>

              <div className="mt-4 space-y-3.5">
                {isScanning ? (
                  <div className="py-10 flex flex-col items-center justify-center gap-2 text-[#00f2fe]">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span className="font-mono text-[11px]">Evaluating vector competency alignment...</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[#849495]">Target Profile:</span>
                      <span className="text-[#dfe2ed] font-bold">{currentDiag.role}</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#b9cacb] mb-1.5 font-mono">
                        <span>Semantic Skill Match</span>
                        <span className="text-[#00f2fe] font-bold">{currentDiag.match}%</span>
                      </div>
                      <div className="w-full bg-[#262a32] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#00dce6] to-[#00f2fe] h-full rounded-full transition-all duration-500"
                          style={{ width: `${currentDiag.match}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 space-y-2">
                      <div>
                        <span className="font-mono text-[11px] text-[#4edea3] font-bold uppercase tracking-wider block mb-1">
                          Validated Core Competencies
                        </span>
                        {currentDiag.strengths.map((str, i) => (
                          <div key={i} className="text-[#b9cacb] text-xs flex items-center gap-1.5 py-0.5">
                            <span className="text-[#4edea3] font-bold">✓</span>
                            <span>{str}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-1.5 border-t border-[#3a494b]/20">
                        <span className="font-mono text-[11px] text-[#7bd0ff] font-bold uppercase tracking-wider block mb-1">
                          Recommended Growth Area
                        </span>
                        <div className="text-[#b9cacb] text-xs flex items-center gap-1.5">
                          <span className="text-[#7bd0ff]">→</span>
                          <span>{currentDiag.recommendation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-[10px] text-[#849495] flex items-center justify-between pt-1 border-t border-[#3a494b]/20">
                      <span>PIPELINE: NLP RESUME PARSER</span>
                      <span className="text-[#4edea3]">HIGH ACCURACY VECTOR</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY PROJECTS GRID: Dev Tools Hub & Encryption App */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* PROJECT 02: Dev Tools Hub */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20">
                <span className="font-mono text-[11px] text-[#4edea3] font-bold uppercase tracking-wider">
                  DEV TOOLS / AI / SAAS UTILITY
                </span>
                <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">
                  WEB SUITE
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xl font-bold text-[#dfe2ed] group-hover:text-[#00f2fe] transition-colors">
                  Dev Tools Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#b9cacb] mt-2 leading-relaxed">
                  A collection of practical developer and AI utilities designed to help developers, coders, and students complete repetitive technical tasks faster. Built with performance and immediate zero-setup utility in mind.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-[#b9cacb]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>JSON Formatter &amp; Validator</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>Entropy Password Engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>Regex Live Tester</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>AI Code Explainer Tool</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>AI Writing Assistant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00f2fe] font-mono text-sm">•</span>
                  <span>Dynamic Resume Builder</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#dfe2ed] border border-[#3a494b]/30">
                  JavaScript
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#dfe2ed] border border-[#3a494b]/30">
                  HTML5/CSS3
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#00f2fe] border border-[#3a494b]/30">
                  AI Web APIs
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#b9cacb] border border-[#3a494b]/30">
                  Vercel Edge
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3a494b]/20 flex flex-wrap items-center gap-3">
              <a
                href="https://dev-tools-hub-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold hover:bg-[#6ff6ff] transition-colors"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onOpenCaseStudy('devtools')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262a32] text-[#dfe2ed] border border-[#3a494b]/40 hover:border-[#00f2fe] font-mono text-xs transition-colors cursor-pointer"
              >
                <span>View Details</span>
              </button>
            </div>
          </div>

          {/* PROJECT 03: Encryption App */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/20">
                <span className="font-mono text-[11px] text-[#7bd0ff] font-bold uppercase tracking-wider">
                  SECURITY / WEB APPLICATION
                </span>
                <span className="font-mono text-[11px] text-[#849495] uppercase tracking-wider">
                  CRYPTOGRAPHY
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xl font-bold text-[#dfe2ed] group-hover:text-[#00f2fe] transition-colors">
                  Encryption App
                </h3>
                <p className="text-xs sm:text-sm text-[#b9cacb] mt-2 leading-relaxed">
                  A web-based cryptographic utility engineered for client-side secure text transformation, cipher visualization, and demonstrating practical encryption algorithms through an accessible, highly responsive browser interface.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-[#b9cacb]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7bd0ff] font-mono text-sm">•</span>
                  <span>Bidirectional Cipher Decryption</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7bd0ff] font-mono text-sm">•</span>
                  <span>Real-time String Transformation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7bd0ff] font-mono text-sm">•</span>
                  <span>Zero Third-Party Dependency Base</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7bd0ff] font-mono text-sm">•</span>
                  <span>Client-Side Local Computation</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#dfe2ed] border border-[#3a494b]/30">
                  JavaScript Algorithms
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#dfe2ed] border border-[#3a494b]/30">
                  Modern DOM APIs
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1c2027] font-mono text-[11px] text-[#dfe2ed] border border-[#3a494b]/30">
                  CSS Variables
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3a494b]/20 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Uzair686/encryption-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262a32] text-[#dfe2ed] border border-[#3a494b]/40 hover:border-[#00f2fe] font-mono text-xs font-semibold transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onOpenCaseStudy('encryption')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262a32] text-[#b9cacb] hover:text-[#dfe2ed] border border-[#3a494b]/30 font-mono text-xs transition-colors cursor-pointer"
              >
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
