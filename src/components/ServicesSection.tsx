import React from 'react';
import { Globe, Code2, Layers, Sparkles, Monitor, RefreshCw, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (domainKey: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const renderIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'web':
        return <Globe className={`w-5 h-5 ${colorClass}`} />;
      case 'integration':
        return <Code2 className={`w-5 h-5 ${colorClass}`} />;
      case 'layers':
        return <Layers className={`w-5 h-5 ${colorClass}`} />;
      case 'auto_awesome':
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      case 'devices':
        return <Monitor className={`w-5 h-5 ${colorClass}`} />;
      case 'sync_alt':
      default:
        return <RefreshCw className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const getServiceColor = (idx: number) => {
    switch (idx) {
      case 0:
        return { text: 'text-[#00f2fe]', border: 'group-hover:border-[#00f2fe]/60' };
      case 1:
        return { text: 'text-[#4edea3]', border: 'group-hover:border-[#4edea3]/60' };
      case 2:
        return { text: 'text-[#7bd0ff]', border: 'group-hover:border-[#7bd0ff]/60' };
      case 3:
        return { text: 'text-[#6ff6ff]', border: 'group-hover:border-[#6ff6ff]/60' };
      case 4:
        return { text: 'text-[#dfe2ed]', border: 'group-hover:border-[#00f2fe]/60' };
      case 5:
      default:
        return { text: 'text-[#4edea3]', border: 'group-hover:border-[#4edea3]/60' };
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 border-t border-[#3a494b]/20" id="services">
      <div className="flex flex-col gap-1.5 mb-8 sm:mb-10">
        <span className="font-mono text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider">
          05 // CAPABILITIES &amp; OFFERS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#dfe2ed]">
          What I Can Build For You
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] max-w-2xl leading-relaxed">
          High-velocity development tailored for forward-thinking startups, growing businesses, and international freelance clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv, idx) => {
          const styling = getServiceColor(idx);
          return (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.domainKey)}
              className={`p-6 sm:p-7 rounded-xl bg-[#181c23] border border-[#3a494b]/30 ${styling.border} transition-all duration-300 shadow-sm flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                <div className="w-10 h-10 rounded bg-[#262a32] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {renderIcon(srv.iconName, styling.text)}
                </div>

                <h3
                  className={`font-display text-lg font-bold text-[#dfe2ed] transition-colors`}
                >
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#b9cacb] mt-2 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#3a494b]/20 flex items-center justify-between">
                <span className={`font-mono text-[11px] font-semibold tracking-wider ${styling.text}`}>
                  {srv.tags}
                </span>
                <span className="text-[#849495] group-hover:text-[#00f2fe] group-hover:translate-x-1 transition-all text-xs flex items-center gap-1 font-mono">
                  Inquire <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
