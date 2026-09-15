import React from 'react';
import { X, Download, Printer, Mail, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0e15]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#181c23] border border-[#3a494b]/60 shadow-[0_24px_64px_rgba(0,0,0,0.85)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3a494b]/30">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#00f2fe] uppercase tracking-wider">
              VERIFIED RESUME &amp; DOSSIER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#262a32] hover:bg-[#31353d] text-xs font-mono text-[#dfe2ed] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#262a32] text-[#b9cacb] hover:text-[#dfe2ed] hover:bg-[#31353d] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="bg-[#0f131b] p-6 sm:p-8 rounded-xl border border-[#3a494b]/40 text-xs sm:text-sm text-[#b9cacb] space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#3a494b]/30">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#dfe2ed]">
                Muhammad Uzair Shahid
              </h2>
              <p className="font-mono text-xs text-[#00f2fe] font-semibold mt-1">
                Full Stack Developer • Digital Product Builder
              </p>
            </div>
            <div className="space-y-1 font-mono text-xs text-[#849495]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00f2fe]" />
                <a href="mailto:uzairchohan686@gmail.com" className="text-[#dfe2ed] hover:underline">
                  uzairchohan686@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>Mian Channu, Punjab, PK (Open to Remote)</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="leading-relaxed">
              Full Stack Developer with 3+ years of professional hands-on experience designing and implementing scalable web applications. Proficient in Angular 17/18, TypeScript, RxJS, and modern CSS architectures, paired with full-stack capabilities across Python (Flask), Node.js, relational and document databases, and AI tooling. Microsoft Azure AZ-900 certified.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-3">
              Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#00f2fe] pl-3.5 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-[#dfe2ed] text-sm">
                      Angular Developer
                    </h4>
                    <span className="text-xs text-[#00dce6]">Globulars Software Company</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#4edea3]">2023 – 2026</span>
                </div>
                <p className="text-xs text-[#b9cacb] pt-1">
                  Architecting modular Angular components, orchestrating reactive RxJS streams, and integrating high-frequency REST APIs for enterprise client deliverables.
                </p>
              </div>

              <div className="border-l-2 border-[#4edea3] pl-3.5 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-[#dfe2ed] text-sm">
                      Web Developer
                    </h4>
                    <span className="text-xs text-[#00dce6]">Superior</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#849495]">2023 – 2024</span>
                </div>
                <p className="text-xs text-[#b9cacb] pt-1">
                  Built responsive web interfaces using semantic HTML5, CSS3, and JavaScript with an emphasis on mobile responsiveness and cross-device speed optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div>
            <h3 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-3">
              Key Projects &amp; Digital Products
            </h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-[#dfe2ed]">CareerPilot AI: </span>
                <span>AI-powered career intelligence platform with automated resume parsing, gap identification, and guidance chatbot built with Python, Flask, and AI prompting.</span>
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">Dev Tools Hub: </span>
                <span>Suite of fast developer utilities (JSON validator, regex tester, secure password generator, AI code explainer) live on Vercel Edge.</span>
              </div>
              <div>
                <span className="font-semibold text-[#dfe2ed]">Encryption App: </span>
                <span>Client-side cryptographic tool providing instant bidirectional cipher execution without third-party network transmissions.</span>
              </div>
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h3 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-2">
                Education
              </h3>
              <p className="font-semibold text-[#dfe2ed]">BS Information Technology (BSIT)</p>
              <p className="text-xs text-[#b9cacb]">Superior College / GCUF (2023 – 2027 In Progress, 7th Sem)</p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-2">
                Certifications
              </h3>
              <p className="font-semibold text-[#4edea3]">Microsoft Azure Fundamentals (AZ-900)</p>
              <p className="text-xs text-[#b9cacb]">Insight Web Development Program Graduate</p>
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold hover:bg-[#6ff6ff] transition-colors"
          >
            Close Resume View
          </button>
        </div>
      </div>
    </div>
  );
};
