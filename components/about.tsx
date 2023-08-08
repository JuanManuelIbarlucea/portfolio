"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:m-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        A passionate <span className="font-bold">Full Stack Developer</span>{" "}
        with a profound love for crafting seamless digital experiences. I'm also
        well-versed in languages like{" "}
        <span className="font-bold">C++, C#, Python, and Java</span>, adding
        versatility to my creative arsenal.
        <br />
        <br />
        <span className="font-bold">Flexibility</span> is my forte. I'm a{" "}
        <span className="font-bold">dynamic problem-solver</span>, capable of
        gracefully adapting to even the most challenging of environments. My
        penchant for <span className="font-bold">clear communication</span> is the cornerstone of my collaborative
        prowess, enabling me to seamlessly blend into team dynamics while also
        excelling autonomously. Beyond the code, I am driven by a <span className="font-bold">relentless
        desire for growth</span>. Evolving alongside the ever-shifting technological
        landscape is ingrained in my DNA.
        <br />
        <br />
        If you share a passion for technology, a thirst for knowledge, or the
        possibility of synergistic ventures, I encourage you to connect with me.
      </p>
    </motion.section>
  );
}
