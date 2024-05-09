"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    
     
<SectionHeading>About Me</SectionHeading>

<p className="mb-3">
    I'm an experienced developer with a strong academic background and some real-world experience.
    I'm really good at solving tough problems using my programming skills.
    My favorite part of programming is solving problems.
    I stay updated with the latest tech trends and can think through complex issues logically.
    Right now, I'm looking for a new challenge where I can work hands-on with C#, ASP .NET, and SQL Server.
    I want to learn more and build cool systems with a great team. 
</p>

  
    </motion.section>
  );
}
