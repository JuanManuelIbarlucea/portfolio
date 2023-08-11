'use client';
import Project from './project';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';

import useSectionInView from '@/hooks/use-section-in-view';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
