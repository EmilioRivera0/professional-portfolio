import { Project } from "@/data/Projects";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Props ={
    content: Project;
    className: string;
};

export function ProjectCard({content, className}: Props) {
    return (
        <div className={`${className} p-4 text-base md:text-lg lg:text-xl rounded-2xl border-2`}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{content.title}</h3>
            <p className="mt-1">{content.description}</p>
            {/* Used Technologies */}
            <div className="flex flex-wrap mt-3 gap-1">
                {content.technologies.map((it, index) => (
                    <div className="p-1 text-sm md:text-base lg:text-lg rounded-xl border-2" key={index}>{it}</div>
                ))}
            </div>
            {content.link && (
                <Link 
                    className="flex flex-row w-fit p-1 mt-4 items-center gap-2 rounded-xl border-2"
                    href={content.link}
                >
                    <Icon icon='devicon:github' />
                    <h3>Source Code</h3>
                </Link>
            )}
        </div>
    );
};