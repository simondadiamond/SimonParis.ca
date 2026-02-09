import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  CheckCircle,
  ShieldCheck,
  Shield
} from 'lucide-react';
import { Navbar } from './components/Layout';
import PartnerBar from './components/PartnerBar';
import FinalCTA from './components/FinalCTA';
import { useProjects } from './hooks/useProjects';

const gradientTopLeft = '#0f0f0f';

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="block">
    {children}
  </a>
);

// Hero Component
const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      id="hero"
      className="lab-grid relative isolate flex min-h-screen items-center justify-center overflow-hidden text-[#EAEAEA]"
    >

      <div className="relative z-10 mx-auto w-full max-w-[60rem] px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="hero-headline text-balance font-semibold leading-[1.12] tracking-tight text-[#EAEAEA]">
            <span className="block">{hero.headline}</span>
          </h1>

          <p className="hero-subtitle mt-[1em] text-balance text-[clamp(1rem,2.2vw,1.4rem)] leading-[1.5]">
            {hero.subtitle}
          </p>

          <div className="mt-[1.5em] flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-sm">
            <a href={hero.cta.href} className="btn-primary hero-cta w-full max-w-xs sm:max-w-none sm:w-auto">
              {hero.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentEngine = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0f0f0f] py-20 text-[#EAEAEA] sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="border border-[#333333] bg-[#1A1A1A] px-6 py-10 text-center sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-balance text-2xl font-semibold text-[#EAEAEA] md:text-3xl">
              {t.contentEngine.title}
            </h2>
            <p className="text-base text-[#EAEAEA] md:text-lg">{t.contentEngine.subtitle}</p>
            <div className="space-y-4 pt-2 text-base leading-relaxed text-[#B4B4B4] md:text-lg">
              {t.contentEngine.outcomes.map((outcome: string) => (
                <p key={outcome}>{outcome}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.contentEngine.cards.map((card: { label: string; title: string; body: string }) => (
              <div key={card.title} className="border border-[#333333] bg-[#0f0f0f] p-5 text-center">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#E04500] font-mono">
                  {card.label}
                </h4>
                <h3 className="mt-3 text-lg font-semibold text-[#EAEAEA]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B4B4B4] md:text-base">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <a href={t.contentEngine.cta.href} className="btn-primary">
              {t.contentEngine.cta.label}
            </a>
            <p className="mt-3 text-sm text-[#B4B4B4]">{t.contentEngine.ctaNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Proof Lab Component
const ProofLab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { projects, loading, error } = useProjects();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const enableVisibility = () => setIsVisible(true);

    if (window.innerWidth < 768) {
      enableVisibility();
      return;
    }

    if (!('IntersectionObserver' in window)) {
      enableVisibility();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enableVisibility();
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  const formatHighlight = (value: string) =>
    value
      .replace(/<highlight>(.*?)<\/highlight>/g, '<span class="text-[#E04500] font-semibold">$1</span>')
      .replace(/<mark>(.*?)<\/mark>/g, '<span class="text-[#E04500] font-semibold">$1</span>');

  const headingHtml = formatHighlight(t.proofLab.title);

  const skeletonCards = Array.from({ length: 4 }).map((_, index) => (
    <article
      key={`skeleton-${index}`}
      className={`group relative flex h-full flex-col overflow-hidden border border-[#333333] bg-transparent transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#333333] bg-transparent">
        <div className="h-full w-full animate-pulse bg-[#1a1a1a]" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pb-7 pt-6 md:px-7 md:pt-7">
        <div className="h-5 w-32 animate-pulse bg-[#1f1f1f]" />
        <div className="h-6 w-3/4 animate-pulse bg-[#1f1f1f]" />
        <div className="h-4 w-full animate-pulse bg-[#1a1a1a]" />
        <div className="h-4 w-2/3 animate-pulse bg-[#1a1a1a]" />
        <div className="flex gap-2">
          <div className="h-6 w-16 animate-pulse bg-[#1a1a1a]" />
          <div className="h-6 w-16 animate-pulse bg-[#1a1a1a]" />
          <div className="h-6 w-16 animate-pulse bg-[#1a1a1a]" />
        </div>
      </div>
    </article>
  ));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#0f0f0f] py-24 lg:py-32"
    >

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-balance text-3xl font-bold text-[#EAEAEA] md:text-4xl"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />
          <p className="mt-4 text-base leading-relaxed text-[#B4B4B4] md:text-lg">{t.proofLab.subtitle}</p>
        </div>

        <div
          className={`mt-14 grid grid-cols-1 gap-6 transition-all duration-1000 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 lg:gap-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {loading && skeletonCards}
          {!loading && projects.length === 0 && !error && (
            <div className="col-span-full text-center text-[#B4B4B4]">No projects available at the moment.</div>
          )}
          {!loading && error && (
            <div className="col-span-full text-center text-red-400">Unable to load projects.</div>
          )}
          {!loading &&
            projects.map((project, index) => (
              <Link key={project.id} href={`/project/${project.slug}`}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden border border-[#333333] bg-transparent transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#333333]">
                    {project.heroImages?.[0] ? (
                      <img
                        src={project.heroImages[0]}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a] text-[#B4B4B4]">
                        <ShieldCheck className="h-10 w-10" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4 px-6 pb-7 pt-6 md:px-7 md:pt-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[19px] font-semibold text-[#EAEAEA]">{project.title}</h3>
                      <span className="border border-[#333333] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#E04500] font-mono">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[15px] leading-6 text-[#B4B4B4]">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 text-[13px] font-medium text-[#B4B4B4]">
                      {project.techStack?.map((tech) => (
                        <span
                          key={`${project.slug}-${tech}`}
                          className="border border-[#333333] px-3 py-1 text-[#EAEAEA] font-mono uppercase tracking-[0.12em]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

// Offer Cards Component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const offers = t.offers.list;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ backgroundColor: gradientTopLeft }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2
          className={`section-heading mb-12 text-[#EAEAEA] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          dangerouslySetInnerHTML={{ __html: t.offers.heading }}
        />

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative flex h-full flex-col border border-[#333333] bg-transparent p-6 transition-all duration-300 ease-out md:p-8"
            >
              {offer.badge && (
                <span className="absolute right-4 top-4 border border-[#333333] px-2 py-1 text-xs font-semibold text-[#E04500] font-mono uppercase tracking-[0.12em]">
                  {offer.badge}
                </span>
              )}
              <h3
                className="mb-2 text-xl font-semibold text-[#EAEAEA]"
                dangerouslySetInnerHTML={{ __html: offer.title }}
              />
              <p className="mb-4 text-2xl font-bold text-[#EAEAEA]">{offer.price}</p>
              <p className="mb-6 flex-1 text-[#B4B4B4]">{offer.desc}</p>
              <a href={`${base}${offer.href}`} className="btn-primary mt-auto">{offer.cta}</a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[#B4B4B4]">{t.offers.note}</p>
      </div>
    </section>
  );
};

// ROI Math Component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ROIMath = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ backgroundColor: '#0f0f0f' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="section-heading mb-6 text-[#EAEAEA]"
            dangerouslySetInnerHTML={{ __html: t.roi.title }}
          />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border border-[#333333] p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold text-[#EAEAEA]">{lang === 'fr' ? 'Sans automatisation' : 'Without automation'}</h3>
            <p className="text-[#B4B4B4]">{t.roi.without}</p>
          </div>
          <div className="border border-[#333333] p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold text-[#EAEAEA]">{lang === 'fr' ? 'Avec automatisation' : 'With automation'}</h3>
            <p className="text-[#B4B4B4]">{t.roi.with}</p>
          </div>
        </div>

        <p className="mt-8 text-[#B4B4B4]">{t.roi.note}</p>
        <p className="mt-2 text-xs text-[#777777]">{t.roi.disclaimer}</p>
      </div>
    </section>
  );
};

// Checklist Component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Checklist = () => {
  const { t, lang } = useLanguage();
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  return (
    <section className="relative overflow-hidden py-16 lg:py-20" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="border border-[#333333] p-6 text-center md:p-8">
          <div className="mb-4 inline-flex items-center text-sm font-medium text-[#B4B4B4] font-mono uppercase tracking-[0.12em]">
            <Shield className="mr-2 h-5 w-5 text-[#E04500]" />
            <span>{t.checklist.eyebrow}</span>
          </div>
          <h3
            className="text-headline mb-4 text-[#EAEAEA]"
            dangerouslySetInnerHTML={{ __html: t.checklist.title }}
          />
          <p className="mb-6 text-[#B4B4B4]">{t.checklist.sub}</p>
          <ul className="mb-6 space-y-2 text-left text-[#B4B4B4]">
            {t.checklist.points.map((p: string, i: number) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-[#E04500]" />
                <span dangerouslySetInnerHTML={{ __html: p }} />
              </li>
            ))}
          </ul>
            <a
              href={
                t.checklist.href.startsWith('/fr') || t.checklist.href.startsWith('/en')
                  ? t.checklist.href
                  : newsletterHref
              }
              className="btn-primary px-8 py-4"
            >
            {t.checklist.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnerBar />
      <ProofLab />
      <ContentEngine />
      {/* <OfferCards /> */}
      {/* <ROIMath /> */}
      {/* <Checklist /> */}
      <FinalCTA />
    </div>
  );
}
export default App;
