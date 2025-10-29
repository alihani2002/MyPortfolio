"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  gitHubUrl?: string;
  liveDemoUrl?: string;
};

export default function Project({
  title,
  description,
  imageUrl,
  gitHubUrl,
  liveDemoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-10 last:mb-0"
    >
      <section
        className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-6 
        bg-gray-100 border border-black/5 rounded-2xl overflow-hidden 
        hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 p-6"
      >
        {/* IMAGE */}
        {imageUrl && (
          <div className="flex-shrink-0 w-full sm:w-1/2">
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={400}
              quality={95}
              className="rounded-xl object-cover w-full h-64 sm:h-full"
            />
          </div>
        )}

        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-between sm:w-1/2 h-full">
          <div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-6 mt-5 flex-wrap">
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/80 
                  hover:text-black dark:hover:text-white font-medium transition"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/80 
                  hover:text-black dark:hover:text-white font-medium transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
