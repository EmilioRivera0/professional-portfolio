"use client"

import { useState } from "react";

import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Project, projects, categories } from "@/data/Projects";

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>(projects);

  return (
    <section className="w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">My Projects</h1>
      {/* Project and Categories Container */}
      <div className="flex flex-row">
        {/* Categories */}
        <div className="w-2/12 border-2"></div>
        {/* Projects */}
        <div className="w-10/12 border-2">
          {projectList.map((it, index) => (
            <ProjectCard content={it} key={index} />
          ))}
        </div>
      </div>
    </section> 
  );
}
