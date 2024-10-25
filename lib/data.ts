import jupiterone from "@/public/jupiterone.jpeg";
import naomishop from "@/public/naomishop.png";
import naomishopAdmin from "@/public/naomishop-admin.png";
import portfolio from "@/public/portfolio.png";
import salesbricks from "@/public/salesbricks.jpeg";
import truepill from "@/public/truepill.jpeg";
import ulu from "@/public/ulu.jpeg";
import valley from "@/public/valley.jpeg";
import solidity from "@/public/solidity.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "ulu",
    title: "Software Developer",
    location: "Buenos Aires, Argentina",
    description:
      "Contributed to Ulusoft's evolution and its commitment to cultivating enduring client relationships. Collaborated on projects that prioritize quality, effective communication, and creative problem-solving, ultimately delivering outstanding products. Played a role in shaping a team-oriented and forward-thinking environment that embraces change and innovation.",
    icon: ulu,
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Git",
      "Express",
      "SQL",
      "Java",
    ],
    date: "Jun 2017 - Sept 2021",
  },
  {
    company: "Truepill",
    title: "Full-Stack Developer",
    location: "Hayward, CA (Remote)",
    description:
      "Played a role in building an end-to-end virtual pharmacy experience that offers a seamless journey for customers seeking safe and affordable medicines. Contributed to enhancing healthcare management infrastructure by integrating modern tech solutions, such as pharmacy transfers, secure account management, and user-friendly checkout processes.",
    icon: truepill,
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "Git",
      "Express",
      "MongoDB",
      "GraphQL",
    ],
    date: "Sept 2021 - Jun 2022",
  },
  {
    company: "salesbricks",
    title: "Full-Stack Developer",
    location: "San Francisco, CA (Remote)",
    description:
      "Played a role in enhancing the efficiency of SaaS sales processes by providing a comprehensive solution for usage-based billing and subscription management. Contributed to creating a platform that helps SaaS companies better manage their customer relationships and billing structures.",
    icon: salesbricks,
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "Python",
      "Django",
      "Git",
      "Express",
      "MongoDB",
      "GraphQL",
    ],
    date: "Jun 2022 - Ene 2023",
  },
  {
    company: "JupiterOne",
    title: "Full-Stack Developer",
    location: "Cary, NC (Remote)",
    description:
      "Played a part in realizing the vision of simplifying cybersecurity and providing individuals and organizations with the tools to secure their digital worlds effectively. Contributed to creating a platform that empowers cybersecurity professionals with the necessary insights and information to protect against modern cyber threats.",
    icon: jupiterone,
    stack: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Python",
      "Django",
      "Git",
      "Express",
      "MongoDB",
    ],
    date: "Mar 2023 - May 2023",
  },
  {
    company: "Valley",
    title: "Full-Stack Developer",
    location: "San Francisco, CA (Remote)",
    description:
      "Worked on a part in a multi-faceted platform that automates the end-to-end appointment setting process for B2B companies. Contributed to creating a platform that helps companies better manage their customer relationships and appointment scheduling processes.",
    icon: valley,
    stack: [
      "Next.js",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "Nest.js",
      "Git",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "OpenAI API",
    ],
    date: "Oct 2023 - May 2024",
  },
  {
    company: "Solidity.io",
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Led a data-driven project focused on building a scalable system to compile, process, and update property data from multiple sources, ensuring high performance and reliability. Contributed to a Web3 project by integrating ERC721 tokens, providing a secure and seamless experience for tokenized assets. Additionally, reworked a webpage from scratch based on Figma designs, delivering a pixel-perfect, responsive interface that enhanced both aesthetics and functionality.",
    icon: solidity,
    stack: [
      "Next.js",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "Nest.js",
      "PostgreSQL",
      "GraphQL",
    ],
    date: "May 2024 - Oct 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Naomishop",
    description: "Ecommerce project I made with Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Styled Components"],
    imageUrl: naomishop,
    url: "https://naomishop.vercel.app/",
    github: "https://github.com/JuanManuelIbarlucea/naomishop-front",
  },
  {
    title: "NaomishopAdmin",
    description: "Admin page for Naomishop.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: naomishopAdmin,
    url: "https://naomishop-admin.vercel.app/",
    github: "https://github.com/JuanManuelIbarlucea/naomishop-admin",
  },
  {
    title: "Portfolio",
    description: "This very portfolio!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfolio,
    url: null,
    github: "https://github.com/JuanManuelIbarlucea/portfolio",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
  "Styled Components",
  "C#",
  "C++",
  "SQL",
  "Java",
] as const;
