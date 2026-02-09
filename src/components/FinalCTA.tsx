import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;
  const privacyLabel = lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';

  return (
    <section className="relative bg-[#0f0f0f] text-[#EAEAEA]">
      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 lg:pb-16 lg:pt-28">
        <div className="mx-auto flex justify-center">
          <div className="relative w-full max-w-4xl border border-[#333333] px-7 py-10 text-center sm:px-9 sm:py-12 lg:px-12 lg:py-14">
            <h2 className="text-2xl font-semibold text-[#EAEAEA] md:text-3xl">{t.cta.audit.title}</h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#B4B4B4] sm:text-lg">
              {t.cta.audit.subtitle}
            </p>

            <div className="mt-6 flex flex-col items-center">
              <a href={t.cta.audit.ctaHref} className="btn-primary btn-primary--audit">
                {t.cta.audit.ctaLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <div className="flex w-full flex-col gap-6 border border-[#333333] px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-8 md:text-left">
            <div className="w-full space-y-2 text-center md:max-w-3xl md:text-left">
              <h2 className="text-balance text-[clamp(1.4rem,2vw,1.85rem)] font-semibold leading-tight text-[#EAEAEA] md:leading-snug">
                {t.finalcta.headline}
              </h2>
              <p className="text-balance text-base leading-relaxed text-[#B4B4B4] lg:text-[15px]">
                {t.finalcta.subtext}
              </p>
            </div>

            <div className="flex w-full justify-center md:w-auto md:justify-end">
              <a href={ctaHref} className="btn-ghost-dark">
                {t.finalcta.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-[#B4B4B4] sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">© 2025 Simon Paris</span>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href="/privacy"
              className="text-[#EAEAEA] underline underline-offset-4 decoration-[#333333] transition-colors hover:decoration-[#E04500]"
            >
              {privacyLabel}
            </a>
            <div className="flex items-center gap-2 text-[#B4B4B4] font-mono">
              <a
                href="/fr"
                className={`transition hover:text-[#FF5A1A] ${lang === 'fr' ? 'text-[#EAEAEA]' : 'text-[#B4B4B4]'}`}
              >
                FR
              </a>
              <span className="text-[#333333]">|</span>
              <a
                href="/en"
                className={`transition hover:text-[#FF5A1A] ${lang === 'en' ? 'text-[#EAEAEA]' : 'text-[#B4B4B4]'}`}
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
