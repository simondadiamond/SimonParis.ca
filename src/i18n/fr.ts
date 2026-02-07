import type { TranslationKeys } from './en';
import { PACK_PRICE } from '../config';

const fr: TranslationKeys = {
  navbar: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    cta: 'Diagnostic Éclair'
  },
  hero: {
    headline: "L'Architecte Meta",
    subtitle: "Concevoir l'architecture de l'effet de levier. Amplifié par des agents, vérifié par un humain.",
    cta: {
      label: 'Voir les systèmes',
      href: '#projects'
    }
  },
  contentEngine: {
    title: 'Du contenu qui sonne comme vous. À grande échelle.',
    subtitle: 'La plupart du contenu IA se lit comme du contenu IA. Pas le vôtre.',
    outcomes: [
      'Une session de recherche. Des publications illimitées — chacune indéniablement la vôtre.'
    ],
    cards: [
      {
        label: 'RECHERCHE',
        title: 'Contexte en profondeur',
        body: "Votre sujet, décortiqué à travers le prisme de votre marque, votre audience et ce qui capte réellement l'attention — pas des résumés génériques."
      },
      {
        label: 'STRUCTURE',
        title: "Architecture d'intelligence",
        body: "Chaque angle, intention et insight cartographié dans une couche de savoir réutilisable. Une session de réflexion, des rendements composés."
      },
      {
        label: 'OUTPUT',
        title: 'Contenu natif par plateforme',
        body: "Conçu pour l'algorithme et la culture de chaque plateforme. Pas du copier-coller. Pas du contenu IA générique."
      }
    ],
    cta: {
      label: 'Accéder en avant-première',
      href: '#'
    },
    ctaNote: 'Présentement en construction. Première cohorte : places limitées.'
  },
  sections: {
    problem: {
      heading:
        'J\'ai connu le chaos — et je sais <span style="color:#13A89E;">pourquoi ça bloque</span>.',
      subheading:
        'Chaque semaine, les PME du Québec perdent des heures à gérer la paperasse, relancer les clients et courir après la conformité. J\'aide les dirigeants à éliminer ces blocages — un système intelligent à la fois. Voici les plus fréquents :',
      cards: [
        {
          title: 'Suivis trop tardifs',
          description: 'Des clients prêts à acheter qui passent à autre chose.'
        },
        {
          title: 'Tâches répétitives',
          description: 'Copier, renvoyer, recommencer... chaque jour.'
        },
        {
          title: 'Stress de conformité (Loi 25)',
          description: 'Trop de règles, pas assez d’organisation.'
        },
        {
          title: 'Outils dispersés',
          description: 'Des systèmes qui ne se parlent pas, du temps perdu.'
        }
      ]
    }
  },
  cta: {
    audit: {
      title: 'Vous cherchez un Architecte principal des systèmes ?',
      subtitle:
        'Je conçois des cadres qui inscrivent l’intelligence dans la structure. Pas de solutions temporaires, seulement une excellence opérationnelle structurelle.',
      ctaLabel: 'Voir le profil stratégique',
      ctaHref: 'https://www.linkedin.com/in/simonparis1/'
    }
  },
  problems: {
    title: 'Pourquoi les PME du Québec perdent du temps chaque semaine…',
    list: [
      {
        title: 'Ventes perdues',
        body: 'Appels manqués et formulaires ignorés font filer les prospects ailleurs.'
      },
      {
        title: 'Heures gaspillées',
        body: 'Des suivis manuels gardent les propriétaires coincés dans l’administratif.'
      },
      {
        title: 'Stress de trésorerie',
        body: 'Des factures impayées ralentissent les dépôts chaque mois.'
      },
      {
        title: 'Amendes évitables',
        body: 'Des preuves de consentement incomplètes augmentent le risque Loi 25.'
      }
    ],
    note: 'Tout cela se règle avec des <span class="font-semibold">automatisations bilingues</span> pensées pour votre équipe.'
  },
  proofLab: {
    title: 'Implémentations <mark>mises en avant</mark>',
    subtitle:
      'Workflows prêts pour la production, outils internes et architectures d’agents autonomes.',
    cards: [
      {
        title: 'Moteur d’infolettres IA',
        highlight: 'Transformez',
        description:
          'vos suivis manqués en clients fidèles — sans rédiger une ligne.',
        footer: 'Bilingue. Automatisé. Conçu au Québec.',
        image: {
          src: '/proof-lab-ai-newsletter.png',
          alt: 'Capture d’écran Gmail de l’automatisation d’infolettre bilingue.'
        } as { src: string; alt: string }
      },
      {
        title: 'Moteur Speed-to-Lead',
        highlight: 'Convertissez',
        description:
          'chaque message en rendez-vous — en quelques secondes.',
        footer: 'Entièrement conforme à la Loi 25. Convertit pendant que vos concurrents dorment.',
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Centre de commande CRM',
        highlight: 'Vos opérations,',
        description:
          'enfin alignées dans un seul flux.',
        footer: 'Clair. Connecté. Aucun nouvel outil, aucun contexte perdu.',
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Réceptionniste IA',
        highlight: 'Un assistant',
        description:
          'qui ne dort jamais — et n’oublie aucun client.',
        footer: 'Planifie les rendez-vous, gère les consentements et parle la langue de vos clients.',
        image: null as { src: string; alt: string } | null
      }
    ]
  },
  growth: {
    title: 'Des <span class="accent">automatisations prêtes</span> pour faire croître votre entreprise.',
    gears: [
      {
        title: 'Flux de capture et de planification',
        tagline: 'Automatise formulaires, réservations et suivis.',
        description: 'Tally → n8n → Airtable → Cal.com : chaque piste est suivie automatiquement.',
        status: 'running'
      },
      {
        title: 'Générateur de vidéos IA (avatars)',
        tagline: 'Crée des vidéos bilingues pour renforcer la présence des PME.',
        description: 'Propulsé par Heygen + scripts IA personnalisés.',
        status: 'indev'
      },
      {
        title: 'Réceptionniste IA (prototype)',
        tagline: 'Assistant bilingue 24/7 pour cliniques et petites entreprises.',
        description: 'Planifie des rendez-vous, répond aux questions et assure la conformité.',
        status: 'prototype'
      }
    ]
  },
  offers: {
    heading: 'Trois parcours <span class="accent">efficaces</span>',
    list: [
      {
        title: 'Packs DIY',
        price: `${PACK_PRICE} $ chacun`,
        desc: 'Automatisations prêtes à l’emploi. Installation en minutes.',
        cta: 'Voir les packs',
        href: '/packs'
      },
      {
        title: 'Audit 48 h',
        price: '249 $',
        desc: 'Diagnostic + un gain rapide installé.',
        cta: 'Réserver l’audit 48 h',
        href: '/audit',
        badge: 'Le plus choisi'
      },
      {
        title: 'Système complet',
        price: '1 499 $',
        desc: 'Les 3 packs + QA + transfert.',
        cta: 'Obtenir le système',
        href: '/system'
      }
    ],
    note: 'Prix fixes. Aucun frais caché. Modèles français d’abord.'
  },
  roi: {
    title: '<span class="accent">199 $</span> pour protéger <span class="accent">600–900 $</span> chaque mois',
    without: 'Leads perdus, 3–4 no‑shows, factures en retard ≈ 600–900 $ / mois',
    with: 'Pack dès 199 $ → réponses plus rapides, moins d’absences, factures à temps',
    note: 'Beaucoup de cliniques rentabilisent le pack dès la première semaine.',
    disclaimer: 'Estimations basées sur ~120–150 $ par rendez‑vous et des pertes typiques de leads au Québec. Résultats variables.'
  },
  checklist: {
    eyebrow: 'Hebdo IA',
    title: 'Êtes-vous vraiment prêt pour la <span class="accent">Loi 25</span>?',
    sub: 'La plupart des cliniques croient que oui… jusqu’à ce qu’un absent ou un audit révèle le contraire. Joignez l’infolettre hebdo pour repérer les failles avant qu’elles ne coûtent cher.',
    points: [
      'Vos formulaires de consentement pour SMS et courriels sont-ils vraiment conformes?',
      'Avez-vous une preuve horodatée de chaque message envoyé?',
      'Vos rappels et suivis sont-ils 100 % en français d’abord (FR-first)?',
      'Vos patients peuvent-ils se désabonner instantanément, sans plainte possible?'
    ],
    cta: 'Joindre l’infolettre',
    href: '/fr/newsletter'
  },
  proof: {
    title: 'Les cliniques qui automatisent voient des résultats rapides.',
    bullets: [
      '25–50 % d’absences en moins',
      'Réponses en moins de 5 min',
      '3× plus d’avis Google en 30–60 jours'
    ]
  },
  faq: {
    title: 'FAQ',
    list: [
      {
        question: 'En combien de temps pouvez-vous configurer mon automatisation?',
        answer: {
          intro: 'Rapide, sans tracas.',
          bullets: ['Configuration en 1–2 semaines', 'Support complet pendant l’installation']
        }
      },
      {
        question: 'C’est vraiment conforme?',
        answer: {
          intro: 'Oui, documenté.',
          bullets: ['Modèles vérifiés Loi 25/96', 'Preuves prêtes pour audit']
        }
      },
      {
        question: 'Et si je ne suis pas à l’aise avec la technologie?',
        answer: {
          intro: 'Pensé pour les non‑tech.',
          bullets: ['Installation gérée pour vous', 'Accompagnement humain en français']
        }
      },
      {
        question: 'Combien ça coûte?',
        answer: {
          intro: `À partir de ${PACK_PRICE} $.`,
          bullets: ['Prix fixes, aucun contrat', 'Retour rapide sur investissement']
        }
      },
      {
        question: 'Pouvez-vous nous aider avec l’adoption ou la stratégie IA?',
        answer: {
          intro: 'Bien sûr.',
          bullets: ['Veille constante des outils IA', 'Conseils lors de la démo']
        }
      }
    ]
  },
  finalcta: {
    eyebrow: 'SYSTÈME EN PRODUCTION',
    headline: 'Meta-Insights',
    subtext:
      "Plans occasionnels sur les systèmes, l'effet de levier et l'écart de production de 11 %.",
    cta: 'Bientôt',
    href: '/fr/newsletter'
  },
  stickyCta: 'Joindre l’infolettre',
  trustBadge: 'Conçu pour le Québec • Démo en direct • Bilingue et conforme à la Loi 96',
  partners: {
    title: 'Stack technique'
  },
  newsletter: {
    meta: {
      title: 'Infolettre PME Québec | The Automated SMB',
      description:
        'Infolettre hebdo pour les PME québécoises : gagnez du temps, réduisez vos coûts et restez conforme à la Loi 25.',
      canonical: '/fr/newsletter',
      alternate: '/en/newsletter'
    },
    title: 'The Automated SMB',
    subtitle: 'L’infolettre pragmatique pour moderniser votre PME',
    bodyLines: [
      'Chaque semaine : gagnez du temps et évitez les erreurs coûteuses.',
      'Des conseils clairs, pensés pour les PME québécoises et conformes à la Loi 25.'
    ],
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'nom@entreprise.com',
    consent:
      'Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps.',
    submit: 'Recevoir l’infolettre chaque semaine',
    trust: {
      prefix: 'Vos données sont protégées. Consultez notre ',
      linkLabel: 'Politique de confidentialité',
      suffix: '.'
    },
    success: {
      title: 'Merci! Votre inscription est prise en compte.',
      body: 'Surveillez votre boîte de réception : un courriel de bienvenue arrive sous peu.'
    },
    error: {
      title: 'Une vérification est nécessaire',
      body: 'Vérifiez vos informations et réessayez, ou écrivez-nous à hello@simonparis.ca.'
    },
    confirmation: {
      metaTitle: 'Confirmation infolettre | The Automated SMB',
      title: 'Inscription confirmée',
      body:
        'Merci! Votre inscription à l’infolettre est confirmée. Vous recevrez chaque semaine des conseils pratiques pour moderniser votre PME.',
      extra: '👉 Ajoutez-nous à vos expéditeurs sûrs pour ne rien manquer.',
      backHome: {
        label: 'Retour à l’accueil',
        href: '/fr'
      }
    }
  },
  footer: {
    tagline: 'Automatisation bilingue pour les PME du Québec.',
    contact: {
      emailLabel: 'Courriel',
      email: 'info@simonparis.ca',
      locationLabel: 'Basé à',
      location: 'Québec, Canada'
    },
    links: {
      privacy: 'Politique de confidentialité'
    },
    copyright: '© 2025 Simon Paris Consulting'
  }
};

export default fr;
