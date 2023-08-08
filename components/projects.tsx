import Image from 'next/image';
import React from 'react';
import SectionHeading from './section-heading';
import {projectsData} from '@/lib/data'

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map(project => (
        <div>
          <Image src={project.imageUrl} alt={project.description}/>
        </div>
      ))}
    </section>
  );
}
