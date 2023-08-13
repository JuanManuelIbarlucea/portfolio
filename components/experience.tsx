"use client";

import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import TagList from "./tag-list";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/use-section-in-view";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={item.date}
              icon={<Image src={item.icon.src} alt={item.company} fill />}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                overflow: "hidden",
                content: "cover",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h4 className="mb-3">{item.company}</h4>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
             <TagList tags={item.stack}/>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
