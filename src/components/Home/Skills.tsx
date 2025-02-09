import { Dropdown } from "./Dropdown";

type Skill = {
    title: string;
    icon: string;
    content: [
        {
            icon: string;
            name: string;
        }
    ]
};

const skills: Skill[] = [
    {
        title: 'Front End',
        icon: 'devicon:aarch64',
        content: [
            {
                icon: 'devicon:aarch64',
                name: 'temp',
            }
        ],
    },
];

export function Skills() {
    return(
        <section>
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">Skills</h2>
            <div></div>
            {skills.map((it, index) => (
                <Dropdown {...it} key={index} />
            ))}
        </section>
    );
}