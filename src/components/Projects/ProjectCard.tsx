import { Project } from "@/data/Projects";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

type Props ={
    content: Project;
};

export function ProjectCard({content}: Props) {
    return (
        <div className="p-4 text-base md:text-lg lg:text-xl space-y-2 rounded-2xl shadow-2xl bg-gray-200 transition hover:scale-105 md:hover:scale-110">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{content.title}</h3>
            <p>{content.description}</p>
            {/* Used Technologies */}
            <div className="flex flex-wrap gap-2">
                {content.technologies.map((it, index) => (
                    <div className="px-2 py-1 text-sm rounded-xl bg-green-300 text-green-950 font-semibold" key={index}>{it}</div>
                ))}
            </div>
            {/* Project Type */}
            <div className="flex flex-row items-center text-sm md:text-base font-semibold gap-1">
                <h3 className="px-2 py-1 rounded-xl bg-orange-300 text-orange-950">{content.type}</h3>
            </div>
            {content.link && (
                <Link 
                    className="flex flex-row w-fit px-4 py-2 items-center gap-2 rounded-xl bg-black"
                    href={content.link}
                >
                    <Image src="/Github.svg" alt="Github Logo" width={25} height={25} />
                    <h3 className="text-sm md:text-base font-semibold text-white">Source Code</h3>
                </Link>
            )}
        </div>
    );
};