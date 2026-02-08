import React from 'react';
import { useLanguage } from '../LanguageProvider';

const MiniAuditCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0F0F0F] py-24 lg:py-32">
      <div className="mx-auto flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="mini-audit-card group relative w-full max-w-[1100px] overflow-hidden text-[#EAEAEA] lg:w-4/5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,69,0,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(224,69,0,0.12),transparent_65%)]" />
            <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E04500]/25 blur-[160px]" />
          </div>

          <div className="relative mx-auto flex flex-col items-center gap-6 px-8 py-12 text-center sm:px-10 sm:py-14 lg:max-w-4xl lg:px-16 lg:py-16">
            <h2 className="section-heading text-[#EAEAEA]">
              {t.cta.audit.title}
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-[#B4B4B4] sm:text-lg">
              {t.cta.audit.subtitle}
            </p>

            <div className="flex flex-col items-center">
              <a href={t.cta.audit.ctaHref} className="btn-primary btn-primary--audit">
                {t.cta.audit.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAuditCTA;
