/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { MindsetSection } from './components/MindsetSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [preselectedDomain, setPreselectedDomain] = useState<string>('angular');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle service inquiry button click
  const handleSelectService = (domainKey: string) => {
    setPreselectedDomain(domainKey);
    handleNavigate('contact');
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'services', 'certifications', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -50% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f131b] text-[#dfe2ed] selection:bg-[#00f2fe] selection:text-[#00373a] flex flex-col justify-between">
      {/* Top Floating Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Command Center Stream */}
      <main className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 flex flex-col gap-12 sm:gap-16">
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeOpen(true)}
        />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection
          onOpenCaseStudy={(id) => setActiveCaseStudy(id)}
        />

        <SkillsSection />

        <ServicesSection
          onSelectService={handleSelectService}
        />

        <MindsetSection />

        <CertificationsSection />

        <ContactSection
          preselectedDomain={preselectedDomain}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <CaseStudyModal
        studyId={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
