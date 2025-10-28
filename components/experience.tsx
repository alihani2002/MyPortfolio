"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Education } from "@/lib/types";
import toast from "react-hot-toast";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [education, setEducation] = useState<Education[]>([]);
  const [isLoadingEducation, setIsLoadingEducation] = useState(true);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  // Fetch Education
  useEffect(() => {
    const fetchEducation = async () => {
      setIsLoadingEducation(true);
      try {
        const res = await fetch("https://alyhani.tryasp.net/api/Education");
        if (!res.ok) throw new Error(`Failed to fetch education: ${res.status}`);
        const data = await res.json();
        const arr = Array.isArray(data) ? data.slice() : [];
        arr.sort((a, b) => {
          const aDate = a.endDate || a.startDate || "";
          const bDate = b.endDate || b.startDate || "";
          return new Date(bDate).getTime() - new Date(aDate).getTime();
        });
        setEducation(arr);
      } catch (err) {
        console.error("Error fetching education:", err);
        toast.error("Failed to load education data");
      } finally {
        setIsLoadingEducation(false);
      }
    };
    fetchEducation();
  }, []);

  // Fetch Experiences
  useEffect(() => {
    const fetchExperiences = async () => {
      setLoadingExperiences(true);
      try {
        const res = await fetch("https://alyhani.tryasp.net/api/Experience");
        if (!res.ok) throw new Error(`Failed to fetch experiences: ${res.status}`);
        const data = await res.json();
        const arr = Array.isArray(data) ? data.slice() : [];

        arr.sort((a, b) => {
          const aDate = a.endDate || a.startDate || a.date || "";
          const bDate = b.endDate || b.startDate || b.date || "";
          return new Date(bDate).getTime() - new Date(aDate).getTime();
        });

        setExperiences(arr);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        toast.error("Failed to load experience data");
      } finally {
        setLoadingExperiences(false);
      }
    };
    fetchExperiences();
  }, []);

  const formatDate = (d: string) => (d ? new Date(d).toLocaleDateString() : "");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      {/* EDUCATION SECTION */}
      <div className="mt-8 mb-12 w-[min(100%,50rem)] mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center"></h3>

        {isLoadingEducation ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-full bg-gray-200 dark:bg-white/10 animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : education.length === 0 ? (
          <p className="text-gray-400 text-center">No education data available.</p>
        ) : (
          <ul className="space-y-5">
            {education.map((edu) => (
              <li
                key={edu.id}
                className="p-5 border border-gray-700/40 bg-white/5 dark:bg-white/10 rounded-2xl hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="flex-1 min-w-[250px]">
                    <h4 className="font-semibold text-lg text-white mb-1">
                      {edu.institution}
                    </h4>
                    {(edu.degree || edu.fieldOfStudy) && (
                      <p className="text-gray-400 text-sm">
                        {edu.degree}
                        {edu.degree && edu.fieldOfStudy && " — "}
                        {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* EXPERIENCE TIMELINE
      <VerticalTimeline lineColor={theme === "light" ? "#d1d5db" : "rgba(255,255,255,0.2)"}>
        {loadingExperiences ? (
          <p className="text-center text-gray-400">Loading experiences...</p>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-400">No experiences available.</p>
        ) : (
          experiences.map((item, index) => {
            const title = item.title || item.position || item.institution || "";
            const location = item.location || "";
            const description =
              item.description || item.summary || item.details || "";
            const date =
              item.startDate || item.endDate
                ? `${formatDate(item.startDate)} — ${formatDate(item.endDate)}`
                : item.date || "";

            const getIcon = () => {
              const lower = (item.institution || title).toLowerCase();
              return lower.includes("university") ||
                lower.includes("college") ||
                lower.includes("faculty")
                ? React.createElement(LuGraduationCap)
                : React.createElement(CgWorkAlt);
            };

            return (
              // <VerticalTimelineElement
              //   key={index}
              //   date={date}
              //   icon={getIcon()}
              //   iconStyle={{
              //     background:
              //       theme === "light"
              //         ? "#fff"
              //         : "rgba(255,255,255,0.1)",
              //     color: theme === "light" ? "#000" : "#fff",
              //     boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              //   }}
              //   contentStyle={{
              //     background:
              //       theme === "light"
              //         ? "#f9fafb"
              //         : "rgba(255,255,255,0.05)",
              //     border: "1px solid rgba(255,255,255,0.1)",
              //     borderRadius: "1rem",
              //     boxShadow:
              //       "0 4px 15px rgba(0,0,0,0.2)",
              //     padding: "1.5rem 2rem",
              //     textAlign: "left",
              //   }}
              //   contentArrowStyle={{
              //     borderRight:
              //       theme === "light"
              //         ? "0.4rem solid #9ca3af"
              //         : "0.4rem solid rgba(255,255,255,0.3)",
              //   }}
              // >
              //   <h3 className="font-semibold text-lg text-white mb-1">
              //     {title}
              //   </h3>
              //   {location && (
              //     <p className="text-sm text-gray-400 mb-2">{location}</p>
              //   )}
              //   {description && (
              //     <p className="text-gray-300 text-sm leading-relaxed">
              //       {description}
              //     </p>
              //   )}
              // </VerticalTimelineElement>
            );
          })
        )}
      </VerticalTimeline> */}
    </section>
  );
}
