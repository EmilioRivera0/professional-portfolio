import { Dropdown } from "./Dropdown";
import { skills } from "@/data/Skills";



export function Skills() {
    return(
        <section>
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {skills.map((it, index) => (
                    <Dropdown skill={it} key={index} />
                ))}
            </div>
        </section>
    );
}