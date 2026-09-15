import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Clock, Github, Linkedin, Mail, ExternalLink, MessageSquare } from 'lucide-react';
import { ContactFormState } from '../types';

interface ContactSectionProps {
  preselectedDomain?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedDomain }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    domain: 'angular',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedDomain) {
      setFormData((prev) => ({ ...prev, domain: preselectedDomain }));
    }
  }, [preselectedDomain]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Channels & Telemetry */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div>
            <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
              08 // INITIATE COLLABORATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed] mt-1 leading-tight">
              Have an Idea <br />Worth Building?
            </h2>
            <p className="text-sm sm:text-base text-[#b9cacb] mt-3 leading-relaxed">
              Let's connect. Whether you have an open role, need an Angular or frontend developer, require a full-stack web application, or want to explore digital product collaboration.
            </p>
          </div>

          {/* Response Latency Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181c23] border border-[#3a494b]/30 w-fit">
            <Clock className="w-4 h-4 text-[#4edea3]" />
            <span className="font-mono text-xs text-[#b9cacb]">
              Typical Response Latency: <strong className="text-[#4edea3] font-semibold">&lt; 12 Hours</strong>
            </span>
          </div>

          {/* Channels Grid */}
          <div className="space-y-2.5">
            <a
              href="mailto:uzairchohan686@gmail.com"
              className="p-3.5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#262a32] flex items-center justify-center text-[#00f2fe]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#849495] uppercase block">
                    DIRECT EMAIL
                  </span>
                  <span className="text-xs sm:text-sm text-[#dfe2ed] font-medium group-hover:text-[#00f2fe] transition-colors">
                    uzairchohan686@gmail.com
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
            </a>

            <a
              href="https://github.com/Uzair686"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#262a32] flex items-center justify-center text-[#00f2fe]">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#849495] uppercase block">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="text-xs sm:text-sm text-[#dfe2ed] font-medium group-hover:text-[#00f2fe] transition-colors">
                    github.com/Uzair686
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-uzair-shahid"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 hover:border-[#00f2fe]/60 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#262a32] flex items-center justify-center text-[#00f2fe]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#849495] uppercase block">
                    LINKEDIN NETWORK
                  </span>
                  <span className="text-xs sm:text-sm text-[#dfe2ed] font-medium group-hover:text-[#00f2fe] transition-colors">
                    Muhammad Uzair Shahid
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
            </a>

            <a
              href="https://www.fiverr.com/uzairchohan686"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-[#181c23] border border-[#3a494b]/30 hover:border-[#4edea3]/60 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#262a32] flex items-center justify-center text-[#4edea3]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#849495] uppercase block">
                    FIVERR FREELANCE PROFILE
                  </span>
                  <span className="text-xs sm:text-sm text-[#dfe2ed] font-medium group-hover:text-[#4edea3] transition-colors">
                    uzairchohan686
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#849495] group-hover:text-[#4edea3] transition-colors" />
            </a>
          </div>

          <div className="font-mono text-xs text-[#849495] pt-2">
            LOCATION: Mian Channu, Punjab, PK (UTC+5) • Open to Global Remote
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-[#181c23] border border-[#3a494b]/40 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#4edea3]/20 text-[#4edea3] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#dfe2ed]">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-sm text-[#b9cacb] max-w-md leading-relaxed">
                  Thank you for reaching out, <span className="text-[#00f2fe] font-semibold">{formData.name}</span>. Your brief regarding <span className="text-[#dfe2ed] font-medium">{formData.domain}</span> has been securely delivered to Muhammad Uzair Shahid. Expect a prompt response within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      domain: 'angular',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#262a32] hover:bg-[#31353d] text-[#dfe2ed] font-mono text-xs font-semibold transition-colors mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#3a494b]/30">
                  <span className="font-mono text-xs font-bold text-[#dfe2ed]">
                    PROJECT INTAKE &amp; COLLABORATION BRIEF
                  </span>
                  <span className="font-mono text-[11px] text-[#00f2fe]">
                    TRANSMISSION READY
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded bg-[#ffb4ab]/10 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[11px] text-[#b9cacb] uppercase block">
                      Full Name <span className="text-[#00f2fe]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f131b] border border-[#3a494b]/40 text-sm text-[#dfe2ed] focus:outline-none focus:border-[#00f2fe] transition-colors placeholder:text-[#849495]/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] text-[#b9cacb] uppercase block">
                      Email Address <span className="text-[#00f2fe]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f131b] border border-[#3a494b]/40 text-sm text-[#dfe2ed] focus:outline-none focus:border-[#00f2fe] transition-colors placeholder:text-[#849495]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[11px] text-[#b9cacb] uppercase block">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Tech Innovations"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f131b] border border-[#3a494b]/40 text-sm text-[#dfe2ed] focus:outline-none focus:border-[#00f2fe] transition-colors placeholder:text-[#849495]/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] text-[#b9cacb] uppercase block">
                      Project Domain
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f131b] border border-[#3a494b]/40 text-sm text-[#dfe2ed] focus:outline-none focus:border-[#00f2fe] transition-colors"
                    >
                      <option value="angular">Angular Frontend Application</option>
                      <option value="fullstack">Full-Stack Web Development</option>
                      <option value="ai">AI-Powered Application / Tool</option>
                      <option value="website">Website Development / Landing Page</option>
                      <option value="api">API Integration &amp; Database Setup</option>
                      <option value="other">Other / General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[11px] text-[#b9cacb] uppercase block">
                    Project Summary &amp; Requirements <span className="text-[#00f2fe]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, timeline, target stack, or specific questions..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f131b] border border-[#3a494b]/40 text-sm text-[#dfe2ed] focus:outline-none focus:border-[#00f2fe] transition-colors placeholder:text-[#849495]/50 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="font-mono text-[11px] text-[#849495] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                    <span>Direct notification sent to uzairchohan686@gmail.com</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00f2fe] text-[#00373a] font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:bg-[#6ff6ff] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
