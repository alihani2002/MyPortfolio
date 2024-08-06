import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import TaskEvaluation from '@/public/taskevaluation.jpeg';
import textgame from '@/public/texgame.jpeg';
import SafaryFront from '@/public/safary.jpeg';
import Swagger from '@/public/swagger.jpeg';
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
    description: "The year I joined the college is 2020 ",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Back-End Developer",
    location: "  Information Technology Institute (ITI) , El Menofia",
    description: " .Net Development ( Summer Internship ) 6 Week ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jul - 2023 Sep",
  },
] as const;

export const projectsData = [
  {
    title: "TasksEvaluation",
    description:
      "Developed a student grade CRUD operation MVC project. Implemented dependency injection for efficient component management. Currently enhancing the frontend.",
    tags: [".Net Core MVC", "Next.js", "SQL", "Bootstrap"],
    imageUrl: TaskEvaluation,
  },
  
  {
    title: "Typing Speed Text Game",
    description:
      "Crafted an engaging Typing Speed Test Game using HTML, CSS, and JavaScript, offering users an interactive platform to enhance their typing skills. The project features a sleek design, user-friendly interface, and real-time performance tracking, providing an immersive and educational experience for users and potential contributors alike.",
    tags: ["Javascript", "Bootstrap5", "Css", "HTML5"],
    imageUrl: textgame,
  },
  {
    title: "Safary Backend",
    description:
      "The Safari platform is a freelance platform for tour guides, implemented dependency injection for efficient component management, integrated JWT token authentication for secure user access.",
    tags: [".Net Core Api", "Onion archtecture", "SQL", "OOP", "Unit of work"],
    imageUrl: Swagger,
  },
  {
    title: "Safary Website",
    description:
      "he Safari platform is a freelance platform for tour guides. This the project of frontend we use many technology like (React , TypeScript , tailwind , sass , NextJs )",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Bootstrap5"],
    imageUrl: SafaryFront,
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
  "C#",
  "OOP OF C#",
  " Entity Framework Core (EF)",
  "ASP.NET Core MVC ",
  "ASP.NET Core Web API ",
  "SQL Server",
] as const;
