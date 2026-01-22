import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Menu, X } from 'lucide-react';

const getTargetHref = (
  targetLang: 'fr' | 'en',
  langToggle?: { fr: string; en: string }
) => (targetLang === 'fr' ? langToggle?.fr ?? '/fr' : langToggle?.en ?? '/');

export const Header: React.FC<{
  langToggle?: { fr: string; en: string };
  forceDarkBackground?: boolean;
}> = ({ langToggle, forceDarkBackground }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const isPrivacyPage =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/privacy' ||
      window.location.pathname === '/fr/politique-confidentialite');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resolvedTextClass = 'text-[#EAEAEA]';
  const textClass = resolvedTextClass;
  const LanguageToggle = ({ tone = 'desktop' }: { tone?: 'desktop' | 'mobile' }) => {
    const toggleLanguage = () => {
      const targetLang = lang === 'fr' ? 'en' : 'fr';
      setLang(targetLang);
      localStorage.setItem('lang', targetLang);
      const href = getTargetHref(targetLang, langToggle);
      window.location.href = href;
    };

    const isLight = textClass.includes('#121C2D');
    const isMobile = tone === 'mobile';
    const activeClass = isMobile
      ? 'text-[#EAEAEA]'
      : isLight
      ? 'text-[#121C2D]'
      : 'text-[#EAEAEA]';
    const inactiveClass = isMobile
      ? 'text-[#B4B4B4]'
      : isLight
      ? 'text-[#121C2D]/55'
      : 'text-[#B4B4B4]';
    const dividerClass = isMobile
      ? 'text-[#333333]'
      : isLight
      ? 'text-[#121C2D]/35'
      : 'text-[#333333]';

    const wrapperClass =
      tone === 'desktop'
        ? 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] font-mono'
        : 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] font-mono';

    const nextLang = lang === 'fr' ? 'en' : 'fr';
    const label = nextLang === 'fr' ? 'Switch language to French' : 'Switch language to English';

    return (
      <button
        type="button"
        onClick={toggleLanguage}
        className={`${wrapperClass} transition-colors hover:text-[#FF4F00] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4F00]`}
        aria-label={label}
      >
        <span className={lang === 'fr' ? activeClass : inactiveClass}>FR</span>
        <span className={`mx-[6px] ${dividerClass}`}>|</span>
        <span className={lang === 'en' ? activeClass : inactiveClass}>EN</span>
      </button>
    );
  };

  const headerBackgroundClass = forceDarkBackground
    ? 'bg-[#0f0f0f] border-b border-[#333333]'
    : isPrivacyPage
    ? 'bg-[#0f0f0f] border-b border-[#333333]'
    : isScrolled
    ? 'bg-[#0f0f0f] border-b border-[#333333]'
    : 'bg-[#0f0f0f] border-b border-[#333333]';

  const headerClassName = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBackgroundClass}`;

  return (
    <>
      <header className={headerClassName}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href={lang === 'fr' ? '/fr' : '/'}
            onClick={() => localStorage.setItem('lang', lang)}
            className={`text-xl font-semibold tracking-tight ${resolvedTextClass}`}
          >
            {t.header.brand}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${resolvedTextClass}`} />
              ) : (
                <Menu className={`w-6 h-6 ${resolvedTextClass}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0f0f0f]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 border-l border-[#333333] bg-[#0f0f0f] text-[#EAEAEA] transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col gap-8 p-6 pt-24">
            <LanguageToggle tone="mobile" />
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ langToggle?: { fr: string; en: string } }> = ({
  langToggle,
}) => {
  const { t, lang, setLang } = useLanguage();
  const resolvedLangToggle = {
    fr: langToggle?.fr ?? '/fr',
    en: langToggle?.en ?? '/',
  };

  const toggleFooterLanguage = () => {
    const targetLang = lang === 'fr' ? 'en' : 'fr';
    setLang(targetLang);
    localStorage.setItem('lang', targetLang);
    const href = getTargetHref(targetLang, resolvedLangToggle);
    window.location.href = href;
  };

  const nextLang = lang === 'fr' ? 'en' : 'fr';
  const footerLabel = nextLang === 'fr' ? 'Switch language to French' : 'Switch language to English';

  return (
    <footer className="lab-grid border-t border-[#333333] text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-sm text-[#B4B4B4]">© 2025 Simon Paris</span>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={lang === 'fr' ? '/fr/politique-confidentialite' : '/privacy'}
              className="text-sm text-[#B4B4B4] transition hover:text-[#FF4F00]"
            >
              {t.footer.links.privacy}
            </a>

            <button
              type="button"
              onClick={toggleFooterLanguage}
              className="flex items-center text-sm font-semibold tracking-[0.25em] text-[#B4B4B4] transition hover:text-[#FF4F00] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4F00] font-mono"
              aria-label={footerLabel}
            >
              <span className={lang === 'fr' ? 'text-[#EAEAEA]' : 'text-[#B4B4B4]'}>FR</span>
              <span className="mx-2 text-[#333333]">|</span>
              <span className={lang === 'en' ? 'text-[#EAEAEA]' : 'text-[#B4B4B4]'}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
