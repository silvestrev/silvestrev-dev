export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: 'Synze',
    description:
      'A locator that helps families find clinics specialized in ASD (autism spectrum disorder) treatment near them.',
    tags: ['React', 'TypeScript', 'NextJS', 'NodeJS'],
    href: '#',
  },
];
