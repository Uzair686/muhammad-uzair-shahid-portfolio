import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudyModalProps {
  studyId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ studyId, onClose }) => {
  if (!studyId) return null;

  const study = CASE_STUDIES[studyId];
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0e15]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181c23] border border-[#3a494b]/60 shadow-[0_24px_64px_rgba(0,0,0,0.8)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#262a32] text-[#b9cacb] hover:text-[#dfe2ed] hover:bg-[#31353d] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <span className="font-mono text-xs font-bold text-[#00f2fe] uppercase tracking-wider">
            {study.category}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#dfe2ed] mt-1">
            {study.title}
          </h2>
          <p className="text-sm text-[#4edea3] font-medium mt-1">
            {study.tagline}
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-6 text-sm text-[#b9cacb]">
          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-[#0f131b] border border-[#3a494b]/30">
            <h4 className="font-mono text-xs font-bold text-[#ffb4ab] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>01.</span> Challenge &amp; Problem Space
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              {study.problem}
            </p>
          </div>

          {/* Solution & Architecture */}
          <div className="p-4 rounded-xl bg-[#0f131b] border border-[#3a494b]/30">
            <h4 className="font-mono text-xs font-bold text-[#00f2fe] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>02.</span> Engineering &amp; Architecture Solution
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              {study.solution}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="font-mono text-xs font-bold text-[#dfe2ed] uppercase tracking-wider mb-3">
              Core Technical Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {study.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#dfe2ed]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-xs font-bold text-[#849495] uppercase tracking-wider mb-2.5">
              Component Stack &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#262a32] font-mono text-xs text-[#00f2fe] border border-[#3a494b]/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#3a494b]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262a32] hover:bg-[#31353d] text-[#dfe2ed] font-mono text-xs font-semibold transition-colors border border-[#3a494b]/40"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00f2fe] hover:bg-[#6ff6ff] text-[#00373a] font-mono text-xs font-bold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live App</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#b9cacb] hover:text-white transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
