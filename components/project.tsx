"use client";

import { FaGithub, FaLink } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import TagList from "./tag-list";
import { projectsData } from "@/lib/data";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  github,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col sm:justify-between h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h3 className="mt-2 leading-relaxed text-gray-700">{description}</h3>
          <div className="flex justify-center align-center gap-2 mt-4">
            {url && (
              <a
                href={url}
                target="_blank"
                className="p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.10] transition cursor-pointer borderBlack"
              >
                <FaLink />
              </a>
            )}
            <a
              href={github}
              target="_blank"
              className=" bg-violet-700 text-white p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.10] transition cursor-pointer borderBlack"
            >
              <FaGithub />
            </a>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2">
            <TagList tags={tags} />
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-even:-right-[initial] group-even:-left-40
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        group-hover:scale-[1.04]
        "
        />
      </section>
    </motion.div>
  );
}
