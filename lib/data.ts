import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated Computer Science",
    location: "Egypt, El-Menofia",
    description:
      "The year I joined the college is 2020 ",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Back-End Developer",
    location: "  Information Technology Institute (ITI) , El Menofia",
    description:
      " .Net Development ( Summer Internship ) 6 Week ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jul - 2023 Sep",
  },
  
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap5",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git, GitHub",
  "Tailwind",
  "Sasa", 
  "C#" , 
  "OOP OF C#",
  " Entity Framework Core (EF)",
  "ASP.NET Core MVC ",
  "ASP.NET Core Web API ",
  "SQL Server",
  "Solid Principles ",
  "Design Pattern",

] as const;
