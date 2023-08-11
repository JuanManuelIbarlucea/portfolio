'use client';

import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portrait from '@/public/portrait.jpg';
import useSectionInView from '@/hooks/use-section-in-view';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="My portrait"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        Hi! I'm <span className="font-bold">Juan.</span>
        <br /> I am a <span className="font-bold">
          full stack developer
        </span>{' '}
        with over <span className="font-bold">5 years of experience</span>,
        involved in all stages of the development cycle. Throughout my career, I
        have primarily worked with <span className="font-bold">JavaScript</span>{' '}
        frameworks and environments such as{' '}
        <span className="font-bold">React(Next.js) and Node.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row align-center justify-center gap-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition hidden sm:block" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex justify-center gap-2">
          <a
            href="https://linkedin.com/in/jmibarlucea"
            target="_blank"
            className="flex-grow bg-blue-700 text-white p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.10] transition cursor-pointer border border-black/10"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/JuanManuelIbarlucea"
            target="_blank"
            className="flex-grow bg-violet-700 text-white p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.10] transition cursor-pointer border border-black/10"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
