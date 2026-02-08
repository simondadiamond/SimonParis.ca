import React, { useEffect } from 'react';
import { Navbar, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';

const PrivacyPolicy = () => {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang('en');
  }, [setLang]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#EAEAEA]">
      <Navbar langToggle={{ fr: '/fr/politique-confidentialite', en: '/privacy' }} />
      <main className="max-w-[800px] mx-auto pt-52 md:pt-60 p-4 md:p-8">
        <h1 className="section-heading text-[#EAEAEA] text-balance mb-6">Privacy Policy (Law 25 &amp; CASL Compliance)</h1>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">
          Welcome to Simon Paris Consulting. We respect your privacy and are committed to protecting your personal information under Quebec’s Law 25 and Canada’s Anti-Spam Legislation (CASL). This policy explains how we collect, use, disclose, and safeguard your data.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">1. Data Controller</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">
          <strong>Controller:</strong> Simon Paris (sole proprietor)<br />
          <strong>Address:</strong> 1234 Rue Exemple, Québec (QC) G1A 0A0<br />
          <strong>Email:</strong> <a href="mailto:privacy@simonparis.ca" className="text-[#2280FF] hover:underline">privacy@simonparis.ca</a>
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">2. Personal Data We Collect</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[#333333] border-collapse text-left text-[0.9rem] md:text-base">
            <thead className="bg-[#0f0f0f] text-[#EAEAEA] font-mono uppercase tracking-[0.12em] text-[0.75rem]">
              <tr>
                <th className="border border-[#333333] px-4 py-2">Data Element</th>
                <th className="border border-[#333333] px-4 py-2">Source</th>
                <th className="border border-[#333333] px-4 py-2">Purpose</th>
                <th className="border border-[#333333] px-4 py-2">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">First Name</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Opt-in form</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Personalization, outreach</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Consent</td>
              </tr>
              <tr>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Email</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Opt-in form</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Newsletter, updates</td>
                <td className="border border-[#333333] px-4 py-2 text-[#B4B4B4]">Consent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">3. Storage &amp; Security</h2>
        <ul className="list-disc list-inside mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">
          <li><strong>Locations:</strong> Systeme.io, Airtable (encrypted at rest)</li>
          <li><strong>Access:</strong> Simon Paris, designated assistant, CRM</li>
          <li><strong>Security:</strong> HTTPS, strong passwords, periodic access reviews</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">4. Retention &amp; Destruction</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">
          <strong>Retention period:</strong> 24 months from last interaction.<br />
          <strong>Destruction:</strong> Secure deletion logged in our register.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">5. Your Rights</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">
          You may request to access, correct, or erase your data at any time. To exercise your rights, contact <a href="mailto:privacy@simonparis.ca" className="text-[#2280FF] hover:underline">privacy@simonparis.ca</a>. You may also file a complaint with the Commission d’accès à l’information du Québec.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">6. Cookies &amp; Tracking</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">We use only essential cookies after consent. No marketing or analytics cookies fire before opt-in.</p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">7. Third-Party Sharing</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">We share data only with systeme.io and Airtable under Law 25-equivalent agreements.</p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#EAEAEA] mb-4 mt-8">8. Changes to this Policy</h2>
        <p className="text-[0.9rem] md:text-base text-[#B4B4B4] leading-relaxed">Last updated: August 5, 2025. We will email you if there’s a material change.</p>
      </main>
      <Footer langToggle={{ fr: '/fr/politique-confidentialite', en: '/privacy' }} />
    </div>
  );
};

export default PrivacyPolicy;
