'use client';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import useSectionInView from '@/hooks/use-section-in-view';
import { motion } from 'framer-motion';

const fadeInAnimationsVariant = {
  initial: { opacity: 0, y: 100 },
  animate: ({ time = 0, index = 0 }: { time?: number; index?: number }) => ({
    opacity: 1,
    y: 0,
    transition: { delay: time * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.9);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[.1] rounded-xl px-5 py-3"
            variants={fadeInAnimationsVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={{ time: 0.05, index }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
