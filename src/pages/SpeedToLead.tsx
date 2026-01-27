import React, { useState } from 'react';
import { Navbar, Footer } from '../components/Layout';
import PartnerBar from '../components/PartnerBar';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ShieldCheck,
  Shield,
  Clock,
  Languages,
  Star,
  Mail,
  Zap,
  CalendarCheck,
  CalendarX,
  Lock
} from 'lucide-react';

type Lang = 'fr' | 'en';

const leadResponseConfig = {
  response_delay_minutes: 2,
  business_hours: { start: '08:30', end: '17:00', timezone: 'America/Toronto' },
  has_online_booking: true
} as const;

const content = {
  fr: {
    navDemo: 'Réserver une démo',
    hero: {
      headline: 'Ne manquez plus jamais un patient.',
      sub: 'Répondez à chaque demande en moins de 3 minutes — français d’abord, conforme à la Loi 25 et à la Loi 96.',
      cta: 'Réserver une démo de 15 min',
      bullets: ['Réponse < 3 min', 'Français d’abord', 'Équipe alertée'],
      footnote: 'Généralement 30–60 s; délai réglable 0–3 min pour plus de réalisme.'
    },
    whyTitle: 'Le coût des demandes manquées',
    whyCopy:
      '<strong>Chaque demande non traitée est un rendez-vous perdu.</strong> Les patients comparent plusieurs cliniques et la première réponse claire l’emporte souvent. Un suivi lent crée des trous d’horaire et du stress. Une réponse français d’abord, envoyée en quelques minutes, saisit l’intention, précise la suite et pousse à réserver — même hors heures.',
    pain: [
      { pain: 'Si\u00e8ges vides', outcome: 'Plus de cr\u00e9neaux remplis' },
      { pain: 'Suivi lent', outcome: 'R\u00e9ponses instantan\u00e9es, m\u00eame hors heures' },
      { pain: 'Stress de conformit\u00e9', outcome: 'Fran\u00e7ais d’abord, tra\u00e7able, conforme' }
    ],
    howTitle: 'Comment \u00e7a marche',
    howCopy:
      '<strong>Speed\u2011to\u2011Lead travaille discr\u00e8tement en coulisses.</strong> Une demande patient d\u00e9clenche un courriel que notre robot capte instantan\u00e9ment. <strong>En quelques secondes, une r\u00e9ponse bilingue est envoy\u00e9e avec une invitation chaleureuse \u00e0 r\u00e9server ou \u00e0 appeler.</strong> Votre \u00e9quipe re\u00e7oit le transcript et peut intervenir au besoin. Le syst\u00e8me garde les \u00e9changes organis\u00e9s, conformes et toujours align\u00e9s \u00e0 votre marque. Aucun nouveau logiciel \u00e0 ma\u00eetriser et aucune application \u00e0 installer pour les patients.',
    how: [
      '1. Un patient vous écrit (site, Cliniko, GoRendezvous, etc.) → vous recevez un courriel',
      '2. Nous détectons ce courriel et répondons en français en quelques secondes',
      '3. Le patient reçoit une réponse conviviale et la prochaine étape; votre équipe est alertée'
    ],
    proofTitle: 'Résultats attendus',
    proofCopy:
      '<strong>Des réponses plus rapides convertissent davantage.</strong> Les cliniques constatent moins d’absences et plus de créneaux remplis lorsqu’une prochaine étape claire est envoyée immédiatement.',
    stats: [
      '25–50 % d’absences en moins',
      'Réponses en moins de 5 min doublent les conversions',
      '3× plus d’avis Google'
    ],
    case: {
      title: 'Scénario clinique illustratif',
      before: 'Avant : 8 demandes/semaine sans réponse; trous d’horaire l’après-midi.',
      after: 'Après (30 jours) : 0 perdues; +35 % de créneaux remplis; moins de rappels.',
      impact: 'Impact : ~X $/semaine récupérés.',
      disclaimer: 'Projection illustrative basée sur des tests/repères; résultats variables.',
      quote: '« On a cessé de perdre des patients du jour au lendemain. »'
    },
    founders: {
      badge: 'Offre Fondateurs',
      copy:
        '99 $ en DWY (valeur régulière 400 $+). Nous ouvrons quelques places pour les premiers utilisateurs à une fraction du prix régulier. En échange, nous demandons un court témoignage public ou une étude de cas une fois le système en place. L’offre se termine après 5 à 10 témoignages et ne sera pas répétée. Premier arrivé, premier servi.',
      primary: 'Réserver ma place Fondateur (99 $)',
      secondary: 'Réserver une démo'
    },
    faqIntro: 'Vous avez demandé, nous avons répondu.',
    faq: [
      { q: 'Est-ce compatible avec notre système?', a: 'Oui. Si vous recevez un courriel pour une demande, c’est compatible. Sinon, nous configurons un simple formulaire conforme.' },
      { q: 'Est-ce conforme à la Loi 25 et à la Loi 96?', a: 'Oui: français d’abord, consentement et confidentialité clairs.' },
      { q: 'Combien de temps pour démarrer?', a: '48 h pour l’installation standard.' },
      { q: 'Offrez-vous du support continu?', a: 'En option (forfait séparé).' },
      { q: 'Et hors des heures d’ouverture?', a: 'Les réponses partent quand même, avec mention claire des heures de rappel.' },
      { q: 'Où sont stockées les données?', a: 'Stockage sécurisé; détails dans notre Politique de confidentialité.' },
      { q: 'Peut-on choisir le délai de réponse ?', a: 'Oui, les réponses se font généralement en 30–60 s et vous pouvez régler un délai de 0 à 3 min.' }
    ],
    final: {
      title: 'Prêt à ne plus manquer de patients ?',
      copy:
        '<strong>Voyez-le en action en 15 minutes.</strong> Aucun chantier — on travaille avec vos outils actuels.',
      primary: 'Réserver une démo',
      secondary: 'Réserver ma place Fondateur (99 $)'
    },
    consent: 'En soumettant, vous consentez à recevoir des communications liées à votre demande.',
    footer: { privacy: 'Confidentialité', terms: 'Conditions', contact: 'Contact' }
  },
  en: {
    navDemo: 'Book Demo',
    hero: {
      headline: 'Never miss a patient again.',
      sub: 'Reply to every inquiry in under 3 minutes \u2014 French‑first and compliant with Law 25 & Bill 96.',
      cta: 'Book a 15-minute demo',
      bullets: ['Replies < 3 min', 'French-first', 'Team alerted'],
      footnote: 'Typically 30–60s; adjustable delay 0–3 min for realism.'
    },
    whyTitle: 'The cost of missed inquiries',
    whyCopy:
      '<strong>Every missed inquiry is lost revenue.</strong> Patients compare multiple clinics and the first clear reply usually wins. Slow follow‑up means empty chairs tomorrow and stressed staff. A French‑first reply within minutes captures intent while it’s high, sets expectations for next steps, and nudges patients to book — even after hours.',
    pain: [
      { pain: 'Empty chairs', outcome: 'More filled slots' },
      { pain: 'Slow follow-up', outcome: 'Instant replies, even after hours' },
      { pain: 'Compliance stress', outcome: 'French-first, trackable, compliant' }
    ],
    howTitle: 'How it works',
    howCopy:
      '<strong>Speed-to-Lead works quietly behind the scenes.</strong> A patient inquiry triggers an email that our bot sees instantly. <strong>Within seconds a bilingual reply is sent with a friendly prompt to book or call.</strong> Your team receives the transcript and can jump in whenever needed. The system keeps conversations organized, compliant, and always on-brand. No new software to learn and no apps for patients to install.',
    how: [
      '1. A patient contacts you (site, Cliniko, GoRendezvous, etc.) → you get an email',
      '2. We detect that email and reply in French within seconds',
      '3. Patient gets a friendly reply and a next step; your team is alerted'
    ],
    proofTitle: 'Results you can expect',
    proofCopy:
      '<strong>Faster replies convert more patients.</strong> Clinics see fewer no-shows and more filled slots when every inquiry gets a clear next step right away.',
    stats: [
      '25–50% fewer no-shows',
      'Replies in under 5 minutes double conversions',
      '3× more Google reviews'
    ],
    case: {
      title: 'Illustrative clinic scenario',
      before: 'Before: 8 unreturned inquiries/week; calendar gaps most afternoons.',
      after: 'After (30 days): 0 lost inquiries; +35% booked slots; fewer staff callbacks.',
      impact: 'Business impact: ~$X/week recovered from previously missed appointments.',
      disclaimer: 'Illustrative projection based on early tests/benchmarks; results vary.',
      quote: '“We stopped losing patients overnight.”'
    },
    founders: {
      badge: 'Founders Offer',
      copy:
        '$99 Done‑With‑You (normally $400+ value). We’re opening a handful of early‑adopter spots at a fraction of the regular price. In exchange, we ask for a short public review or case study once you’re live. This offer closes after we collect 5–10 testimonials and won’t be repeated. First come, first served.',
      primary: 'Claim Founders Spot ($99)',
      secondary: 'Book a demo'
    },
    faqIntro: 'You asked, we answered.',
    faq: [
      { q: 'Will this work with our system?', a: 'Yes. If your inquiries trigger an email, it\u2019s compatible. If not, we set up a simple compliant form.' },
      { q: 'Is this compliant with Law\u202f25 & Bill\u202f96?', a: 'Yes: French-first with clear consent & privacy.' },
      { q: 'How fast can we go live?', a: '48 hours for standard setup.' },
      { q: 'Do you offer ongoing support?', a: 'Optional (separate plan).' },
      { q: 'What about after hours?', a: 'Replies still go out with a clear callback window.' },
      { q: 'Where is data stored?', a: 'Secure storage; see our Privacy Policy.' },
      { q: 'Can we choose the reply delay?', a: 'Yes, typical replies are 30\u201360s, and you can set a 0\u20133 minute delay.' }
    ],
    final: {
      title: 'Ready to stop missing patients?',
      copy:
        '<strong>See it working in 15 minutes.</strong> No rebuild required — we work with your existing systems.',
      primary: 'Book a demo',
      secondary: 'Claim Founders Spot ($99)'
    },
    consent: 'By submitting, you consent to receive communications related to your inquiry.',
    footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact' }
  }
} as const;

const LandingFAQ: React.FC<{ title: string; intro: string; items: { q: string; a: string }[] }> = ({ title, intro, items }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-[#B4B4B4] mb-8">{intro}</p>
        <div className="space-y-3">
          {items.map((qa, i) => (
            <div key={i} className="card-light overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-3 md:py-4 text-left hover:border-[#FF4F00] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg font-semibold text-[#EAEAEA]">{qa.q}</span>
                {open === i ? (
                  <ChevronUp className="w-6 h-6 text-[#FF4F00]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#FF4F00]" />
                )}
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-[#B4B4B4]">{qa.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Landing: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = content[lang];
  const frHref = '/fr/ne-manquez-aucun-patient';
  const enHref = '/never-miss-a-patient';
  const bulletIcons = [Clock, Languages, Mail];
  const howIcons = [Mail, Zap, CalendarCheck];
  const statIcons = [CheckCircle, Clock, Star];
  const painIcons = [CalendarX, Clock, Shield];

  return (
    <div className="font-sans bg-[#0f0f0f] text-[#EAEAEA]">
      <Navbar langToggle={{ fr: frHref, en: enHref }} ctaHref="#demo" ctaLabel={t.navDemo} />

      <main>
        <section
          className="relative flex items-center bg-[#0f0f0f] text-[#EAEAEA] pt-24 pb-16 overflow-hidden"
          style={{ minHeight: '75vh' }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="section-heading text-[#EAEAEA] mb-4">{t.hero.headline}</h1>
              <p className="mb-6 max-w-md text-[#B4B4B4]">{t.hero.sub}</p>
              <a href="#demo" data-action="demo" className="btn-primary text-lg px-8 py-4">
                {t.hero.cta}
              </a>
              <ul className="mt-6 space-y-2">
                {t.hero.bullets.map((b, i) => {
                  const Icon = bulletIcons[i];
                  return (
                    <li key={i} className="flex items-center text-sm text-[#B4B4B4]">
                      <Icon className="w-4 h-4 text-[#FF4F00]" />
                      <span className="ml-2">{b}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center space-x-3 mt-6">
                <span className="flex items-center border border-[#333333] px-3 py-1 text-xs font-medium font-mono uppercase tracking-[0.12em]">
                  <ShieldCheck className="w-4 h-4 mr-1 text-[#FF4F00]" />
                  {lang === 'fr' ? 'Loi 96' : 'Bill 96'}
                </span>
                <span className="flex items-center border border-[#333333] px-3 py-1 text-xs font-medium font-mono uppercase tracking-[0.12em]">
                  <ShieldCheck className="w-4 h-4 mr-1 text-[#FF4F00]" />
                  {lang === 'fr' ? 'Loi 25' : 'Law 25'}
                </span>
              </div>
              <p className="mt-2 text-xs text-[#B4B4B4]">{t.hero.footnote}</p>
            </div>
            <div className="mt-10 md:mt-0">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video bg-[#1a1a1a] border border-[#333333]"
              />
            </div>
          </div>
        </section>

        <PartnerBar />

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.whyTitle}</h2>
            <p className="mb-10 text-[#B4B4B4]" dangerouslySetInnerHTML={{ __html: t.whyCopy }} />
            <div className="grid md:grid-cols-3 gap-6">
              {t.pain.map((item, i) => {
                const Icon = painIcons[i];
                return (
                  <div key={i} className="card-light p-6 flex items-start space-x-3">
                    <Icon className="w-6 h-6 text-[#FF4F00] flex-shrink-0" />
                    <p className="text-[#B4B4B4]">
                      {item.pain} → <strong>{item.outcome}</strong>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.howTitle}</h2>
            <p className="mb-10 text-[#B4B4B4]" dangerouslySetInnerHTML={{ __html: t.howCopy }} />
            <div className="mb-10">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video bg-[#1a1a1a] border border-[#333333]"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.how.map((step, i) => {
                const Icon = howIcons[i];
                return (
                  <div key={i} className="card-light p-6 flex items-start space-x-3">
                    <div className="w-10 h-10 border border-[#333333] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#FF4F00]" />
                    </div>
                    <p className="font-semibold text-[#EAEAEA]">{step}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <h3 className="font-semibold mb-3">{lang === 'fr' ? 'Timing intelligent' : 'Smart timing'}</h3>
              <div className="space-y-2 text-sm text-[#B4B4B4]">
                <p>
                  {lang === 'fr'
                    ? `Heures d’ouverture : « Bien reçu — je termine quelque chose, je vous rappelle dans ~${leadResponseConfig.response_delay_minutes} minutes. »`
                    : `During business hours: “Got your message — just wrapping up, I’ll call you in ~${leadResponseConfig.response_delay_minutes} minutes.”`}
                </p>
                <p>
                  {lang === 'fr' ? (
                    <>
                      Hors heures : « Merci pour votre message — nous vous rappelons demain 8\u00a0h\u00a030–9\u00a0h. Vous préférez réserver maintenant\u00a0? »
                      {leadResponseConfig.has_online_booking && (
                        <a href="#" className="text-[#FF4F00] underline ml-1">Lien de réservation</a>
                      )}
                    </>
                  ) : (
                    <>
                      After hours: “Thanks for your message — we’ll call tomorrow 8:30–9:00. Prefer to book now?”
                      {leadResponseConfig.has_online_booking && (
                        <a href="#" className="text-[#FF4F00] underline ml-1">Booking link</a>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.proofTitle}</h2>
            <p className="mb-10 text-[#B4B4B4]" dangerouslySetInnerHTML={{ __html: t.proofCopy }} />
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {t.stats.map((s, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={i} className="card-light p-6 flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-[#FF4F00]" />
                    <p className="font-medium text-[#B4B4B4]">{s}</p>
                  </div>
                );
              })}
            </div>
            <div className="card-light p-8">
              <h3 className="font-semibold mb-3">{t.case.title}</h3>
              <p className="text-sm mb-1 text-[#B4B4B4]">{t.case.before}</p>
              <p className="text-sm mb-1 text-[#B4B4B4]">{t.case.after}</p>
              <p className="text-sm mb-1 text-[#B4B4B4]">{t.case.impact}</p>
              <p className="text-xs text-[#777777] mb-4">{t.case.disclaimer}</p>
              <p className="text-sm italic text-[#B4B4B4]">{t.case.quote}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="card-light p-8 relative" data-spots="7">
              <span className="absolute top-4 left-4 border border-[#333333] text-[#FF4F00] text-xs font-semibold px-3 py-1 font-mono uppercase tracking-[0.12em]">
                {t.founders.badge}
              </span>
              <p className="mb-6 text-[#B4B4B4]" dangerouslySetInnerHTML={{ __html: t.founders.copy }} />
              <div className="flex justify-center space-x-4">
                <a
                  href="https://buy.stripe.com/FOUNDERS99"
                  data-action="founders"
                  className="btn-primary"
                >
                  {t.founders.primary}
                </a>
                <a href="#demo" data-action="demo" className="btn-outline">
                  {t.founders.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <LandingFAQ title="FAQ" intro={t.faqIntro} items={t.faq} />

        <section id="demo" className="bg-[#0f0f0f] text-[#EAEAEA] py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">{t.final.title}</h2>
            <p className="mb-8 text-[#B4B4B4]" dangerouslySetInnerHTML={{ __html: t.final.copy }} />
            <div className="flex justify-center space-x-4 mb-8">
              <a href="#demo" data-action="demo" className="btn-primary">
                {t.final.primary}
              </a>
              <a
                href="https://buy.stripe.com/FOUNDERS99"
                data-action="founders"
                className="btn-outline"
              >
                {t.final.secondary}
              </a>
            </div>
            <div className="flex justify-center space-x-6 mb-8 text-sm text-[#B4B4B4] font-mono uppercase tracking-[0.12em]">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-1 text-[#FF4F00]" />
                {lang === 'fr' ? 'Loi 96' : 'Bill 96'}
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-1 text-[#FF4F00]" />
                {lang === 'fr' ? 'Loi 25' : 'Law 25'}
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-1 text-[#FF4F00]" />
                {lang === 'fr' ? 'Paiement s\u00e9curis\u00e9' : 'Secure payment'}
              </div>
            </div>
            <form
              action="/api/lead"
              method="POST"
              className="max-w-md mx-auto text-left space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder={lang === 'fr' ? 'Nom' : 'Name'}
                className="w-full p-2 border border-[#333333] bg-[#0f0f0f] text-[#EAEAEA]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={lang === 'fr' ? 'Courriel' : 'Email'}
                className="w-full p-2 border border-[#333333] bg-[#0f0f0f] text-[#EAEAEA]"
                required
              />
              <input
                type="text"
                name="clinic"
                placeholder={lang === 'fr' ? 'Type de clinique' : 'Clinic type'}
                className="w-full p-2 border border-[#333333] bg-[#0f0f0f] text-[#EAEAEA]"
                required
              />
              <label className="flex items-start text-sm">
                <input type="checkbox" required className="mr-2 mt-1" />
                <span>{t.consent}</span>
              </label>
              <button type="submit" className="btn-primary w-full">
                {lang === 'fr' ? 'Envoyer' : 'Send'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        href="#demo"
        data-action="demo"
        className="fixed bottom-4 right-4 z-50 btn-primary md:hidden"
      >
        {t.hero.cta}
      </a>

      <Footer langToggle={{ fr: frHref, en: enHref }} />
    </div>
  );
};

export const LandingFR: React.FC = () => <Landing lang="fr" />;
export const LandingEN: React.FC = () => <Landing lang="en" />;

export default Landing;
