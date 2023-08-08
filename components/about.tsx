'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A passionate<span className="font-bold">Full Stack Developer</span> with
        a profound love for crafting seamless digital experiences. With a robust
        journey spanning over 5 years in the tech realm, I've been fully
        immersed in every facet of the development lifecycle. My expertise
        thrives in the realm of JavaScript, where I've masterfully wielded
        frameworks like ReactJS and harnessed the power of Node.js to bring
        innovative ideas to life. But my toolkit doesn't stop there – I'm also
        well-versed in languages like C++, C#, Python, and Java, adding
        versatility to my creative arsenal.
        <br />
        <br />
        Flexibility is my forte. I'm a dynamic problem-solver, capable of
        gracefully adapting to even the most challenging of environments. My
        penchant for clear communication is the cornerstone of my collaborative
        prowess, enabling me to seamlessly blend into team dynamics while also
        excelling autonomously. Beyond the code, I am driven by a relentless
        desire for growth. Evolving alongside the ever-shifting technological
        landscape is ingrained in my DNA.
        <br />
        <br />
        If you share a passion for technology, a thirst for knowledge, or the
        possibility of synergistic ventures, I encourage you to connect with me.
      </p>
    </motion.section>
  );
}
