export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer II – Junior',
    company: 'XP Investimentos',
    period: 'March 2026 — Present',
    highlights: [
      "Built the Position Cockpit, surfacing clients with open positions at day's close to speed up Risk team follow-up.",
      'Built modules for investment advisors to monitor and manage client portfolios in the Trading Bots product.',
    ],
  },
  {
    role: 'Software Engineer I – Assistant',
    company: 'XP Investimentos',
    period: 'August 2024 — February 2026',
    highlights: [
      'Shipped Trade Idea/Click Trade, integrating the front end with backend APIs to surface analyst recommendations and execute trades, with a cross-functional team.',
      'Built reusable React/TypeScript UI components and fixed bugs across complex financial interfaces, with a focus on performance and maintainability.',
    ],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    degree: 'Technologist Degree in Internet Systems',
    institution: 'Universidade Estácio de Sá',
    period: '2012 — 2015',
  },
  {
    degree: 'Web Master',
    institution: 'Microcamp',
    period: '2006 — 2008',
  },
];
