"use client"

import { useState, useEffect } from "react";

import { CategoryButton } from "@/components/Projects/CategoryButton";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Project, projects, categories } from "@/data/Projects";

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [category, setCategory] = useState<string>(categories[0]); // Default as 'All' category

  useEffect(() => {
    function categoryFilter(it: Project){
      return it.category.includes(category);
    };
    if (category === 'All')
      setProjectList(projects);
    else
      setProjectList(projects.filter(categoryFilter))
  }, [category])

  return (
    <section className="w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">My Projects</h1>
      {/* Project and Categories Container */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-2">
        {/* Desktop Categories */}
        <div className="max-md:hidden flex flex-col md:w-2/12 lg:w-1/12 gap-2">
          <h2 className="text-center text-xl lg:text-2xl font-semibold">Filters:</h2>
          {categories.map((it, index) => (
            <CategoryButton
              content={it}
              category={category}
              setter={setCategory}
              key={index}
            />
          ))}
        </div>
        {/* Mobile Categories */}
        <div className="md:hidden flex flex-wrap gap-1 items-center justify-center">
          <select
            className="w-10/12 py-2 px-4 rounded-xl"
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
          >
            {categories.map((it, index) => (
              <option value={it} key={index}>{it}</option>
            ))}
          </select>
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
