import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import { Header, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';
import { translations, type Language } from '../i18n';

const ensureHeadLink = (selector: string, init: () => HTMLLinkElement) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = init();
    document.head.appendChild(link);
  }
  return link;
};

interface NewsletterPageProps {
  lang: Extract<Language, 'fr' | 'en'>;
}

const NewsletterPage: React.FC<NewsletterPageProps> = ({ lang }) => {
  const { setLang } = useLanguage();
  const copy = translations[lang].newsletter;

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    localStorage.setItem('newsletter_lang', lang);
    document.title = copy.meta.title;

    let metaDescription = document.head.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = copy.meta.description;

    const frHref = `${window.location.origin}${translations.fr.newsletter.meta.canonical}`;
    const enHref = `${window.location.origin}${translations.en.newsletter.meta.canonical}`;
    const canonicalHref = lang === 'fr' ? frHref : enHref;

    const canonical = ensureHeadLink("link[rel='canonical']", () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
    canonical.href = canonicalHref;

    const frAlt = ensureHeadLink("link[rel='alternate'][hreflang='fr']", () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = 'fr';
      return link;
    });
    frAlt.href = frHref;

    const enAlt = ensureHeadLink("link[rel='alternate'][hreflang='en']", () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = 'en';
      return link;
    });
    enAlt.href = enHref;
  }, [lang, copy.meta.description, copy.meta.title]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f] text-[#EAEAEA]">
      <Header
        langToggle={{ fr: translations.fr.newsletter.meta.canonical, en: translations.en.newsletter.meta.canonical }}
        forceDarkBackground
      />
      <main className="flex-1 px-4 pb-24 pt-32 md:px-6">
        <div className="mx-auto flex max-w-7xl justify-center">
          <SignupForm lang={lang} />
        </div>
      </main>
      <Footer langToggle={{ fr: translations.fr.newsletter.meta.canonical, en: translations.en.newsletter.meta.canonical }} />
    </div>
  );
};

export const NewsletterFR = () => <NewsletterPage lang="fr" />;
export const NewsletterEN = () => <NewsletterPage lang="en" />;

export default NewsletterPage;
