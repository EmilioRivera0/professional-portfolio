"use client"

import { useState, useEffect } from "react";

import { Project, projects, categories } from "@/data/Projects";
import { CategoryButton } from "@/components/Projects/CategoryButton";
import { ProjectCard } from "@/components/Projects/ProjectCard";

export function Projects() {
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
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            {/* Desktop Categories */}
            <div className="max-md:hidden flex flex-col h-fit md:w-2/12 lg:w-2/12 p-2 gap-4 rounded-2xl bg-gray-200/50">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start md:w-10/12 lg:w-10/12 gap-6 md:gap-2">
                {projectList.map((it, index) => (
                    <ProjectCard
                        content={it}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};