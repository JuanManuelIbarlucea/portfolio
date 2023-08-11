'use client';
import Project from './project';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';

import useSectionInView from '@/hooks/use-section-in-view';
import { motion } from 'framer-motion';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.9);

  return (
    <motion.section
      id="projects"
      className="scroll-mt-28 mb-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}
