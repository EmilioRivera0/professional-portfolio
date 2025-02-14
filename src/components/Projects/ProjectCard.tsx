import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Project } from "@/data/Projects";

type Props ={
    content: Project;
};

export function ProjectCard({content}: Props) {
    // hooks for Intersection Observer
    const cardRef = useRef<HTMLDivElement>(null);
    const [intersect, setIntersect] = useState<boolean>(false);

    useEffect(() => {
        // create and add Interection Observer
        const observer = new IntersectionObserver(([entry]) => {
            setIntersect(entry.isIntersecting);
        }, { threshold: 0.05 });
        if (cardRef.current)
            observer.observe(cardRef.current);
        // remove Intersection Observer
        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <div
            className={`${intersect? 'visible' : 'hide'} p-4 text-base md:text-lg lg:text-xl space-y-2 rounded-2xl shadow-2xl bg-gray-200`}
            ref={cardRef}
        >
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