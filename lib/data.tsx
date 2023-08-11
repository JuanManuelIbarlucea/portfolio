import naomishop from '@/public/naomishop.png';
import naomishopAdmin from '@/public/naomishop-admin.png';
import salesbricks from '@/public/salesbricks.jpeg';
import truepill from '@/public/truepill.jpeg';
import ulu from '@/public/ulu.jpeg';
import jupiterone from '@/public/jupiterone.jpeg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    company: 'ulu',
    title: 'Software Developer',
    location: 'Buenos Aires, Argentina',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: ulu,
    date: 'Jun 2017 - Sept 2021',
  },
  {
    company: 'Truepill',
    title: 'Full-Stack Developer',
    location: 'Hayward, CA (Remote)',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: truepill,
    date: 'Sept 2021 - Jun 2022',
  },
  {
    company: 'salesbricks',
    title: 'Full-Stack Developer',
    location: 'San Francisco, CA (Remote)',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: salesbricks,
    date: 'Jun 2022 - Ene 2023',
  },
  {
    company: 'JupiterOne',
    title: 'Full-Stack Developer',
    location: 'Cary, NC (Remote)',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: jupiterone,
    date: 'Mar 2023 - May 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Naomishop',
    description: 'Ecommerce project I made with Next.js.',
    tags: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
    imageUrl: naomishop,
    url: 'https://naomishop.vercel.app/',
    github: 'https://github.com/JuanManuelIbarlucea/naomishop-front',
  },
  {
    title: 'NaomishopAdmin',
    description: 'Admin page for Naomishop.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    imageUrl: naomishopAdmin,
    url: 'https://naomishop-admin.vercel.app/',
    github: 'https://github.com/JuanManuelIbarlucea/naomishop-admin',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
  'Styled Components',
  'C#',
  'C++',
] as const;
