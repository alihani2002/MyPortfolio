"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  gitHubUrl: string;
  liveDemoUrl: string;
  createdAt: string;
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://alyhani.tryasp.net/api/Project", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
        const data = await res.json();
        const arr = Array.isArray(data) ? data : [];

        // Sort by creation date (newest first)
        arr.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setProjects(arr);
      } catch (err) {
        console.error("Error fetching projects:", err);
        toast.error("Failed to load projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      {isLoading ? (
        <p className="text-center text-gray-400 mt-10">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No projects found.</p>
      ) : (
        <div>
          {projects.slice().reverse().map((project, index) => (
            <React.Fragment key={project.id || index}>
              <Project
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                gitHubUrl={project.gitHubUrl}
                liveDemoUrl={project.liveDemoUrl}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
}
