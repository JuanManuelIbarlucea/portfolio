import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';
import naomishop from '@/public/naomishop.png';
import naomishopAdmin from '@/public/naomishop-admin.png';

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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
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
  // {
  //   title: 'Word Analytics',
  //   description:
  //     'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
  //   tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
  //   imageUrl: wordanalyticsImg,
  // },
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
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
