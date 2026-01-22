import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';
import { translations, type Language } from '../i18n';

const resolveLanguage = (searchParams: URLSearchParams, storageValue: string | null): Extract<Language, 'fr' | 'en'> => {
  const paramLang = searchParams.get('lang');
  if (paramLang === 'fr' || paramLang === 'en') {
    return paramLang;
  }
  if (storageValue === 'fr' || storageValue === 'en') {
    return storageValue;
  }
  return 'en';
};

const NewsletterConfirmation: React.FC = () => {
  const { setLang } = useLanguage();
  const [resolvedLang, setResolvedLang] = useState<Extract<Language, 'fr' | 'en'>>('en');
  const copy = translations[resolvedLang].newsletter.confirmation;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const stored = window.localStorage.getItem('newsletter_lang');
    const lang = resolveLanguage(params, stored);
    setResolvedLang(lang);
    setLang(lang);
    window.localStorage.setItem('newsletter_lang', lang);
  }, [setLang]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = copy.metaTitle;
    let robots = document.head.querySelector<HTMLMetaElement>("meta[name='robots']");
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, nofollow';
  }, [copy.metaTitle]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f] text-[#EAEAEA]">
      <Header
        langToggle={{
          fr: translations.fr.newsletter.meta.canonical,
          en: translations.en.newsletter.meta.canonical
        }}
        forceDarkBackground
      />
      <main className="flex flex-1 items-center justify-center px-4 py-24 md:px-6">
        <div className="w-full max-w-[540px] border border-[#333333] p-10 sm:p-12">
          <h1 className="section-heading text-[#EAEAEA] text-balance">{copy.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-[#B4B4B4]">{copy.body}</p>
          <p className="mt-6 text-sm font-medium text-[#FF4F00]">{copy.extra}</p>
          <a href={copy.backHome.href} className="btn-primary mt-10 inline-flex w-full justify-center sm:w-auto">
            {copy.backHome.label}
          </a>
        </div>
      </main>
      <Footer
        langToggle={{
          fr: translations.fr.newsletter.meta.canonical,
          en: translations.en.newsletter.meta.canonical
        }}
      />
    </div>
  );
};

export default NewsletterConfirmation;
