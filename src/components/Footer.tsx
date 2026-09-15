import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import usLogo from '../assets/images/us_tech_logo_1789405963076.jpg';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#3a494b]/30 bg-[#0a0e15] py-12 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3a494b]/20">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.25)] flex-shrink-0 bg-[#0a0e15]">
              <img
                src={usLogo}
                alt="US - Uzair Shahid"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display text-sm font-bold text-[#dfe2ed] flex items-center gap-1.5">
                <span>Muhammad Uzair Shahid</span>
                <span className="text-[#00f2fe] font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#00f2fe]/10 border border-[#00f2fe]/30 font-semibold">US</span>
              </span>
              <p className="font-mono text-[11px] text-[#849495]">
                Full Stack Developer • Digital Product Builder
              </p>
            </div>
          </div>

          {/* System Status Beacon */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181c23] border border-[#3a494b]/30 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="text-[#4edea3] font-semibold uppercase tracking-wider text-[11px]">
              SYSTEM ACTIVE • PRODUCTION READY
            </span>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Uzair686"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#181c23] text-[#b9cacb] hover:text-[#00f2fe] hover:bg-[#262a32] transition-colors border border-[#3a494b]/30"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-uzair-shahid"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#181c23] text-[#b9cacb] hover:text-[#00f2fe] hover:bg-[#262a32] transition-colors border border-[#3a494b]/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.fiverr.com/uzairchohan686"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#181c23] text-[#b9cacb] hover:text-[#4edea3] hover:bg-[#262a32] transition-colors border border-[#3a494b]/30"
              aria-label="Fiverr"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="mailto:uzairchohan686@gmail.com"
              className="p-2 rounded-full bg-[#181c23] text-[#b9cacb] hover:text-[#00f2fe] hover:bg-[#262a32] transition-colors border border-[#3a494b]/30"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#262a32] text-[#dfe2ed] hover:text-[#00f2fe] transition-colors border border-[#3a494b]/40 ml-2 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#849495]">
          <p>© 2026 Muhammad Uzair Shahid. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-[#dfe2ed] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#dfe2ed] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="hover:text-[#dfe2ed] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#dfe2ed] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#dfe2ed] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
