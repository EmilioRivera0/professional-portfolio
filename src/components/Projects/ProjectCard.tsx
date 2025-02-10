import { Project } from "@/data/Projects";

type Props ={
    content: Project;
};

export function ProjectCard({content}: Props) {
    return (
        <div>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
        </div>
    );
};