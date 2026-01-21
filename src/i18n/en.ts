import { PACK_PRICE } from '../config';

export const en = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'EN/FR',
    email: 'info@simonparis.ca',
    cta: 'Diagnostic Éclair'
  },
  hero: {
    headline: 'The Assumption Mapper',
    subtitle:
      'I stress-test AI narratives. Weekly analysis on what’s broken in enterprise AI.',
    cta: {
      label: 'Subscribe for Maps',
      href: '/en/newsletter'
    }
  },
  sections: {
    problem: {
      heading:
        'I\'ve lived the chaos — and know <span style="color:#13A89E;">why it keeps you stuck</span>.',
      subheading:
        'Québec SMBs lose hours every week managing admin, chasing clients, and scrambling for compliance. I help owners clear these roadblocks — one intelligent system at a time. Here are the most common ones I see:',
      cards: [
        {
          title: 'Slow follow-ups',
          description: 'Ready-to-buy clients who move on.'
        },
        {
          title: 'Repetitive tasks',
          description: 'Copy, resend, repeat… day after day.'
        },
        {
          title: 'Compliance stress (Law 25)',
          description: 'Too many rules, not enough structure.'
        },
        {
          title: 'Disconnected tools',
          description: 'Systems that don’t talk, time that slips away.'
        }
      ]
    }
  },
  cta: {
    audit: {
      title: 'Looking for a Senior AI Operations Architect?',
      subtitle:
        'I build documented, resilient automation systems that scale. No quick hacks—just reliable Ops.',
      ctaLabel: 'View Profile on LinkedIn',
      ctaHref: 'https://www.linkedin.com/in/simonparis1/'
    }
  },
  problems: {
    title: 'Why Québec SMBs lose time (and profit) every week…',
    list: [
      {
        title: 'Lost sales',
        body: 'Missed calls and ignored forms push ready-to-buy clients to competitors.'
      },
      {
        title: 'Wasted hours',
        body: 'Manual follow-ups keep owners stuck in admin instead of growth.'
      },
      {
        title: 'Cash-flow stress',
        body: 'Invoices slip through the cracks and payouts get delayed.'
      },
      {
        title: 'Avoidable fines',
        body: 'Consent tracking gaps create unnecessary Law 25 risk.'
      }
    ],
    note: 'All of this is fixable with simple <span class="font-semibold">bilingual automations</span> built for your team.'
  },
  proofLab: {
    title: 'Featured <mark>Implementations</mark>',
    subtitle:
      'Production-ready workflows, internal tooling, and autonomous agent architectures.',
    cards: [
      {
        title: 'AI Newsletter Engine',
        highlight: 'Turn',
        description:
          'missed updates into loyal clients — without writing a word.',
        footer: 'Bilingual. Automated. Built in Québec.',
        image: {
          src: '/proof-lab-ai-newsletter.png',
          alt: 'Screenshot of the bilingual AI newsletter automation in Gmail.'
        } as { src: string; alt: string }
      },
      {
        title: 'Speed-to-Lead Engine',
        highlight: 'Turn',
        description:
          'every message into a meeting — instantly.',
        footer: 'Fully Law 25 ready. Converts while competitors sleep.',
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'CRM Command Center',
        highlight: 'Your operations,',
        description: 'finally in one flow.',
        footer: 'Clear. Connected. No new logins, no lost context.',
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'AI Receptionist',
        highlight: 'A receptionist',
        description: 'that never sleeps — or forgets a client.',
        footer: 'Books appointments, manages consents, and speaks your clients’ language.',
        image: null as { src: string; alt: string } | null
      }
    ]
  },
  growth: {
    title: 'The <span class="accent">growth engine</span> for your business: simple, bilingual, compliant.',
    gears: [
      {
        title: 'Lead Capture & Scheduling Flow',
        tagline: 'Automates forms, bookings, and follow-ups.',
        description: 'Tally → n8n → Airtable → Cal.com — every lead tracked automatically.',
        status: 'running'
      },
      {
        title: 'AI Avatar Video Engine',
        tagline: 'Creates bilingual videos to boost SMB visibility.',
        description: 'Powered by Heygen + custom AI scripts.',
        status: 'indev'
      },
      {
        title: 'AI Receptionist (Prototype)',
        tagline: '24/7 bilingual assistant for clinics and small businesses.',
        description: 'Books appointments, answers questions, and keeps everything compliant.',
        status: 'prototype'
      }
    ]
  },
  offers: {
    heading: 'Choose your <span class="accent">smart</span> path',
    list: [
      {
        title: 'DIY Packs',
        price: `$${PACK_PRICE} each`,
        desc: 'Install-ready automations. Minutes to set up.',
        cta: 'View Packs',
        href: '/packs'
      },
      {
        title: '48\u2011Hour Audit',
        price: '$249',
        desc: 'Diagnosis + 1 quick-win installed.',
        cta: 'Book the 48h Audit',
        href: '/audit',
        badge: 'Most Popular'
      },
      {
        title: 'Complete System',
        price: '$1,499',
        desc: 'All 3 packs installed + QA + handover.',
        cta: 'Get the System',
        href: '/system'
      }
    ],
    note: 'Flat pricing. No hidden fees. French-first templates.'
  },
  roi: {
    title: '<span class="accent">$199 today</span> saves clinics <span class="accent">~$600–900</span> every month',
    without: 'Lost leads, 3–4 no-shows, late invoices ≈ $600–900/mo',
    with: 'Pack from $199 → faster replies, fewer no‑shows, invoices on time',
    note: 'Many clinics recoup the pack in the first week.',
    disclaimer: 'Estimates based on ~$120–150 per appointment and typical lead leakage in Québec. Results vary.'
  },
  checklist: {
    eyebrow: 'Weekly Briefing',
    title: 'Are you really <span class="accent">Law 25</span> ready?',
    sub: 'Most clinics think they’re fine… until a no-show patient or audit proves otherwise. Join the weekly briefing to spot the hidden risks before they become costly.',
    points: [
      'Is your SMS & email consent wording valid under Québec law?',
      'Do you have timestamped proof for every message you send?',
      'Are your reminders and follow-ups fully FR-first?',
      'Can patients opt-out instantly, without risk of complaint?'
    ],
    cta: 'Join Newsletter',
    href: '/en/newsletter'
  },
  proof: {
    title: 'Clinics that automate see results fast.',
    bullets: [
      '25\u201350% fewer no-shows',
      'Replies in under 5 minutes',
      '3\u00D7 more Google reviews in 30\u201360 days'
    ]
  },
  faq: {
    title: 'FAQ',
    list: [
      {
        question: 'How quickly can you set up my automation?',
        answer: {
          intro: 'Faster than you think.',
          bullets: ['Live within 1–2 weeks', 'Hands-on support included']
        }
      },
      {
        question: 'Is this really compliant?',
        answer: {
          intro: 'Yes, and documented.',
          bullets: ['Bill 25/96-checked templates', 'Audit-ready proof provided']
        }
      },
      {
        question: "What if I'm not tech-savvy?",
        answer: {
          intro: 'Built for non-tech folks.',
          bullets: ['We set everything up', 'Human support in English & French']
        }
      },
      {
        question: 'How much does it cost?',
        answer: {
          intro: `From $${PACK_PRICE}.`,
          bullets: ['Flat pricing, no contract', 'ROI within days for many']
        }
      },
      {
        question: 'Can you help us with AI adoption or strategy?',
        answer: {
          intro: 'Absolutely.',
          bullets: ['Always testing new AI tools', 'Ask during the demo']
        }
      }
    ]
  },
  finalcta: {
    eyebrow: 'PRODUCTION SYSTEM',
    headline: 'Written By Robots',
    subtext:
      'A weekly digest on AI Operations and technical architecture. Researched by agents, drafted by LLMs, and engineered by Simon Paris.',
    cta: 'Subscribe for Insights',
    href: '/en/newsletter'
  },
  stickyCta: 'Join Newsletter',
  trustBadge: 'Built for Québec • Demo-first • Fully bilingual & Law 96\u2013compliant',
  partners: {
    title: 'Tech Stack'
  },
  newsletter: {
    meta: {
      title: 'Québec SMB AI Newsletter | The Automated SMB',
      description:
        'Weekly newsletter for Québec SMBs: save time, cut costs, and stay compliant with Law 25.',
      canonical: '/en/newsletter',
      alternate: '/fr/newsletter'
    },
    title: 'The Automated SMB',
    subtitle: 'The pragmatic newsletter to modernize your SMB',
    bodyLines: [
      'Every week: save time and cut costly mistakes.',
      'Clear, practical tips for Québec SMBs that stay compliant with Law 25.'
    ],
    emailLabel: 'Email address',
    emailPlaceholder: 'name@business.com',
    consent:
      'I consent to receive communications from The Automated SMB and understand I can unsubscribe at any time.',
    submit: 'Get the weekly newsletter',
    trust: {
      prefix: 'Your data is protected. See our ',
      linkLabel: 'Privacy Policy',
      suffix: '.'
    },
    success: {
      title: "Thanks! You're on the list.",
      body: 'Watch your inbox for the welcome email within the next few minutes.'
    },
    error: {
      title: 'Something needs your attention',
      body: 'Check your details and try again, or email hello@simonparis.ca for support.'
    },
    confirmation: {
      metaTitle: 'Newsletter confirmation | The Automated SMB',
      title: 'Subscription confirmed',
      body:
        'Thank you! Your subscription is confirmed. You’ll now receive weekly practical insights to modernize your SMB.',
      extra: '👉 Add us to your safe senders list so you never miss an issue.',
      backHome: {
        label: 'Back to homepage',
        href: '/en'
      }
    }
  },
  footer: {
    tagline: 'Bilingual automation for Québec SMBs.',
    contact: {
      emailLabel: 'Email',
      email: 'info@simonparis.ca',
      locationLabel: 'Based in',
      location: 'Québec, Canada'
    },
    links: {
      privacy: 'Privacy Policy'
    },
    copyright: '© 2025 Simon Paris Consulting'
  }
};
export type TranslationKeys = typeof en;
export default en;
