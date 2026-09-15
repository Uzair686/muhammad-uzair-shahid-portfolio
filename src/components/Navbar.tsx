import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import usLogo from '../assets/images/us_tech_logo_1789405963076.jpg';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none">
      <div
        className={`h-16 sm:h-20 max-w-[1360px] w-full flex items-center justify-between pointer-events-auto rounded-full px-4 sm:px-6 transition-all duration-300 ${
          scrolled
            ? 'bg-[#181c23]/90 backdrop-blur-xl border border-[#3a494b]/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#181c23]/85 backdrop-blur-xl border border-[#3a494b]/30 shadow-[0_8px_32px_rgba(0,0,0,0.36)]'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.3)] group-hover:shadow-[0_0_24px_rgba(0,242,254,0.55)] group-hover:border-[#00f2fe] transition-all duration-300 flex-shrink-0 bg-[#0a0e15]">
              <img
                src={usLogo}
                alt="US - Uzair Shahid"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#dfe2ed] group-hover:text-[#00f2fe] transition-colors flex items-center gap-1.5">
                <span>Uzair Shahid</span>
                <span className="text-[#00f2fe] font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#00f2fe]/10 border border-[#00f2fe]/30 font-semibold">US</span>
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-[#849495] tracking-tight">
                Full Stack Developer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0a0e15]/60 p-1.5 rounded-full border border-[#3a494b]/30">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#262a32] text-[#e0fdff] font-semibold shadow-sm'
                    : 'text-[#b9cacb] hover:text-[#dfe2ed] hover:bg-[#262a32]/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="relative inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold tracking-tight shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_28px_rgba(0,242,254,0.55)] hover:bg-[#6ff6ff] transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00373a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00373a]"></span>
            </span>
            <span className="hidden xs:inline">Let's Work Together</span>
            <span className="xs:hidden">Collaborate</span>
          </a>

          {/* Quick Profile / Resume trigger */}
          <button
            onClick={onOpenResume}
            title="View Profile Summary & Resume"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#262a32] hover:bg-[#31353d] text-[#00f2fe] border border-[#3a494b]/50 hover:border-[#00f2fe]/60 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00f2fe] shadow-sm"
          >
            <User className="w-4 h-4" />
            <span className="sr-only">View Profile Summary &amp; Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-[#262a32] text-[#dfe2ed] hover:text-[#00f2fe] border border-[#3a494b]/50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden fixed top-24 left-4 right-4 bg-[#181c23]/95 backdrop-blur-2xl border border-[#3a494b]/60 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 z-50">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#262a32] text-[#00f2fe] font-semibold'
                    : 'text-[#b9cacb] hover:bg-[#262a32]/50 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
