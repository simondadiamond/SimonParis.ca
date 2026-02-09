import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import type { Translation } from '../i18n';

interface ButtonProps {
  href: string;
  variant?: 'teal';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, variant = 'teal', children }) => {
  const baseClasses =
    'btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantClasses = variant === 'teal' ? '' : '';

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
};

const getNestedTranslation = (translation: Translation, key: string): unknown => {
  const value = key.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, translation);

  return value;
};

const FAQ: React.FC = () => {
  const { t: translation } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const getValue = useCallback(
    (key: string) => getNestedTranslation(translation, key),
    [translation]
  );

  const t = useCallback(
    (key: string) => {
      const value = getValue(key);
      return typeof value === 'string' ? value : '';
    },
    [getValue]
  );

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

  const faqItems = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => {
        const question = t(`faq.q${index + 1}.question`);
        const answerValue = getValue(`faq.q${index + 1}.answer`);
        const answer = Array.isArray(answerValue)
          ? answerValue
          : typeof answerValue === 'string'
          ? [answerValue]
          : [];

        return { question, answer };
      }),
    [getValue, t]
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0f0f0f] py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-[720px] px-4 sm:px-6">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-semibold text-[#EAEAEA] md:text-4xl">{t('faq.title')}</h2>
        </div>

        <div
          className={`space-y-4 transition-all duration-700 delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden border-b border-[#333333] last:border-b-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:text-[#FF5A1A] focus-visible:text-[#E04500] md:px-8 md:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="pr-6 text-base font-semibold text-[#EAEAEA] md:text-lg">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-[#E04500]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#E04500]" />
                  )}
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 text-base leading-7 text-[#B4B4B4] md:px-8 md:pb-5 md:text-lg">
                      <div className="space-y-3">
                        {item.answer.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-10 flex flex-col items-center transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="max-w-md text-center text-sm leading-6 text-[#B4B4B4] opacity-90">
            {t('faq.cta.text')}
          </p>
          <div className="mt-4">
            <Button href="/diagnostic" variant="teal">
              {t('faq.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
