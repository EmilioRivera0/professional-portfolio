"use client"

import { useState } from "react";

import { CategoryButton } from "@/components/Projects/CategoryButton";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Project, projects, categories } from "@/data/Projects";

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [category, setCategory] = useState<string>(categories[0]); // Default as 'All' category

  return (
    <section className="w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">My Projects</h1>
      {/* Project and Categories Container */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-2">
        {/* Desktop Categories */}
        <div className="max-md:hidden flex flex-col md:w-2/12 lg:w-1/12 gap-2">
          {categories.map((it, index) => (
            <button className="w-full text-lg font-bold rounded-xl border-2" key={index}>{it}</button>
          ))}
        </div>
        {/* Mobile Categories */}
        <div className="md:hidden">
          {categories.map((it, index) => (
            <CategoryButton
              content={it}
              category={category}
              setter={setCategory}
              key={index}
            />
          ))}
        </div>
        {/* Projects */}
        <div className="flex flex-wrap items-start md:w-10/12 lg:w-11/12">
          {projectList.map((it, index) => (
            <ProjectCard content={it} className="w-full md:w-1/2 lg:w-4/12" key={index} />
          ))}
        </div>
      </div>
    </section> 
  );
}
