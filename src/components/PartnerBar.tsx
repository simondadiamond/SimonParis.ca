import React from 'react';
import { useLanguage } from '../LanguageProvider';

const PartnerBar: React.FC = () => {
  const { t } = useLanguage();

  const stack = ['n8n', 'OpenAI', 'Supabase', 'JavaScript', 'REST APIs', 'Airtable', 'C#'];

  return (
    <section className="bg-[#0f0f0f] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B4B4B4] font-mono">
          {t.partners.title}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {stack.map((item) => (
            <span
              key={item}
              className="border border-[#333333] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#EAEAEA] font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBar;
