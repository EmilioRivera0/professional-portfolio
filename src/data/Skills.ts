import { StaticImageData } from "next/image";

import Django from "@public/Django.svg";
import Sqlalchemy from "@public/Sqlalchemy.svg";
import Postgresql from "@public/Postgresql.svg";
import Dotnet from "@public/Dotnet.svg";

type Skill = {
    title: string;
    icon: string;
    content: 
        {
            icon?: string;
            img?: StaticImageData;
            name: string;
        }[]
};

export const skills: Skill[] = [
    {
        title: 'Languages',
        icon: 'mdi:earth',
        content: [
            {
                icon: 'mdi:account-tie-voice',
                name: 'English'
            },
            {
                icon: 'mdi:account-tie-voice',
                name: 'Spanish'
            },
        ],
    },
    {
        title: 'Front End',
        icon: 'mdi:web-check',
        content: [
            {
                icon: 'devicon:react',
                name: 'React',
            },
            {
                icon: 'devicon:nextjs',
                name: 'Next.js',
            },
            {
                icon: 'devicon:astro',
                name: 'Astro',
            },
            {
                icon: 'devicon:vuejs',
                name: 'Vue',
            },
            {
                icon: 'devicon:tailwindcss',
                name: 'Tailwind',
            },
            {
                icon: 'devicon:javascript',
                name: 'Javascript',
            },
            {
                icon: 'devicon:typescript',
                name: 'Typescript',
            },
        ],
    },
    {
        title: 'Back End',
        icon: 'mdi:server-outline',
        content: [
            {
                icon: 'devicon:python',
                name: 'Python',
            },
            {
                icon: 'devicon:flask',
                name: 'Flask',
            },
            {
                img: Django,
                name: 'Django',
            },
            {
                img: Sqlalchemy,
                name: 'SQLAlchemy',
            },
        ],
    },
    {
        title: 'Databases',
        icon: 'mdi:database-outline',
        content: [
            {
                icon: 'devicon:mysql',
                name: 'MySQL',
            },
            {
                icon: 'devicon:sqlite',
                name: 'SQLite',
            },
            {
                img: Postgresql,
                name: 'PostgreSQL',
            },
        ],
    },
    {
        title: 'Linux',
        icon: 'devicon:linux',
        content: [
            {
                icon: 'devicon:bash',
                name: 'Bash',
            },
            {
                icon: 'devicon:archlinux',
                name: 'Arch',
            },
            {
                icon: 'mdi:code-greater-than-or-equal',
                name: 'CLI',
            },
        ],
    },
    {
        title: 'C/C++',
        icon: 'devicon:cplusplus',
        content: [
            {
                icon: 'devicon:c',
                name: 'C',
            },
            {
                icon: 'mdi:file-code-outline',
                name: 'Linux API',
            },
            {
                icon: 'mdi:file-code-outline',
                name: 'GNU C Library',
            },
            {
                icon: 'mdi:file-code-outline',
                name: 'POSIX Library',
            },
            {
                icon: 'mdi:file-code-outline',
                name: 'STL',
            },
        ],
    },
    {
        title: 'C#',
        icon: 'devicon:csharp',
        content: [
            {
                img: Dotnet,
                name: 'NET',
            },
            {
                img: Dotnet,
                name: 'NET MAUI',
            },
        ],
    },
    {
        title: 'Technologies',
        icon: 'mdi:tools',
        content: [
            {
                icon: 'devicon:docker',
                name: 'Docker',
            },
            {
                icon: 'devicon:postman',
                name: 'Postman',
            },
            {
                icon: 'devicon:git',
                name: 'Git',
            },
            {
                icon: 'devicon:figma',
                name: 'Figma',
            },
            {
                icon: 'devicon:java',
                name: 'Java',
            },
            {
                icon: 'devicon:amazonwebservices-wordmark',
                name: 'AWS',
            },
        ],
    },
];