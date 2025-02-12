import { Dropdown } from "./Dropdown";
import { skills } from "@/data/Skills";

export function Skills() {
    return(
        <section className="w-11/12 mx-auto space-y-4 reveal">
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((it, index) => (
                    <Dropdown skill={it} key={index} className="w-10/12 md:w-5/12 lg:w-3/12 animate-border" />
                ))}
            </div>
        </section>
    );
}