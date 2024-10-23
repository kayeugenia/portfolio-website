import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "cineMOOD",
    description:
      "A full-stack web application that provides movie recommendations using semantic search and content-based filtering. Integrated social media functionalities including friend request system. Achieved highest level of achievement (Artemis), awarded to the top 5% groups.",
    tags: [
      "React",
      "Javascript",
      "CSS",
      "PostgreSQL",
      "Supabase",
      "Sentence-BERT",
      "Flask",
      "Python",
      "Material-UI",
    ],
    imageUrl: "/images/cineMOOD.png",
    githubUrl: "https://github.com/kayeugenia/orbital-cinemood",
    webUrl:
      "https://www.youtube.com/watch?v=u80TqGn6L2M&ab_channel=PoonZheXuan",
  },
  {
    title: "First Prize Winner, TikTok Ads Moderation",
    description:
      "Created an optimization model with Gurobi in Python to maximize the number of ads that can be moderated in a day. Developed a full-stack website, integrating a CLIP model for detecting ad video violations and bi-encoder for efficient ad categorization.",
    tags: [
      "React.js",
      "CSS",
      "Gurobi",
      "CLIP",
      "Sentence-BERT",
      "Flask",
      "Python",
    ],
    imageUrl: "/images/tiktok.png",
    githubUrl: "https://github.com/kayeugenia/tiktok-ads-model",
    webUrl: "https://devpost.com/software/igmoid-masterchefs",
  },
  {
    title: "National Champion, ASEAN Data Science Explorers 2023",
    description:
      "Conducted data exploration and analysis pertaining the issue of slums. Devised a solution that involves the creation of website aimed at monitoring slum areas using satellite imaging and IOT sensors, as well as connecting volunteers with these communities.",
    tags: ["SAP Analytics Cloud", "Tableau", "SQL", "Excel", "Figma"],
    imageUrl: "/images/aseanDSE.png",
    githubUrl: "",
    webUrl:
      "https://drive.google.com/file/d/1KVKAttzn707f-AvDQstIUnZwkZYjdkpu/view",
  },
] as const;

export const experiencesData = [
  {
    title: "AI and Software Engineer Intern",
    company: "Pints AI, Singapore",
    description:
      "Developed a comprehensive freemium workflow, incorporating flexible trial period configuration, Stripe payment gateway integration, and a referral program which contributes to over 75% of customer conversions. Enhanced advanced company search functionality by implementing web scraping to dynamically retrieve company legal names for inaccurate queries, boosting search capabilities up to 90%.",
    skills: {
      "Next.js": "/images/next.png",
      Tailwind: "/images/tailwind.png",
      JavaScript: "/images/javascript.png",
      MongoDB: "/images/mongodb.png",
      Stripe: "/images/stripe.svg",
    },
    companyLogo: "/images/pints.jpeg",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Software Engineer Intern",
    company: "Hellmann Worldwide Logistics, Singapore",
    description:
      "Developed a full-stack web application with Excel data parsing feature and integrated CRUD functionalities",
    skills: {
      "C#": "/images/csharp.png",
      "ASP.NET": "/images/aspnet.png",
      Snowflake: "/images/snowflake.png",
      SQL: "/images/sql.png",
      Gitlab: "/images/gitlab.png",
    },
    companyLogo: "/images/hellmann.png",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2023",
  },
  {
    title: "Technology Associate",
    company: "Google Developer Student Clubs NUS",
    description:
      "Improving the DSC NUS and event websites by introducing Generative AI powered elements in existing products. Planning and leading various technical workshops.",
    skills: {
      React: "/images/react.png",
      JavaScript: "/images/javascript.png",
      HTML: "/images/html.png",
      CSS: "/images/css.png",
    },
    companyLogo: "/images/gdsc.jpeg",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - May 2024",
  },
  {
    title: "Undergraduate Teaching Assistant (CS2030)",
    company: "NUS School of Computing",
    description:
      "Teaching weekly lab sessions on advanced programming methodology in Java and Object-Oriented Programming principles",
    skills: { Java: "/images/java.png" },
    companyLogo: "/images/nusSOC.png",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - May 2024",
  },
  {
    title: "Project-Based Intern: Mobile Application Developer",
    company: "PT Bank Mandiri, Indonesia",
    description:
      "Experienced in Kotlin and in building Android applications by fetching and integrating data from RESTful APIs",
    skills: { Kotlin: "/images/kotlin.png", Postman: "/images/postman.png" },
    companyLogo: "/images/mandiri.png",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Aug 2023",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const contactData = [
  {
    name: "linkedin.com/in/kay-eugenia-purnama/",
    icon: "/images/linkedin.jpg",
    link: "https://www.linkedin.com/in/kay-eugenia-purnama/",
  },
  {
    name: "github.com/kayeugenia",
    icon: "/images/github.svg",
    link: "https://github.com/kayeugenia",
  },
  {
    name: "kayeugenia.purnama@gmail.com",
    icon: "/images/email.jpg",
    link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hey+there!&to=kayeugenia.purnama@gmail.com",
  },
] as const;

export const techStackData = [
  {
    name: "Next.js",
    icon: "/images/next.png",
  },
  {
    name: "Typescript",
    icon: "/images/typescript.png",
  },
  {
    name: "Tailwind",
    icon: "/images/tailwind.png",
  },
] as const;
