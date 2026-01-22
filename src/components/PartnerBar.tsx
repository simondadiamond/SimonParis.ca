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
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-7">
          {stack.map((item) => (
            <span
              key={item}
              className="flex h-10 items-center justify-center border border-[#333333] px-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#EAEAEA] font-mono"
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
