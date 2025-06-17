import { StaticImageData } from "next/image";

import Django from "@public/Django.svg";
import Sqlalchemy from "@public/Sqlalchemy.svg";
import Postgresql from "@public/Postgresql.svg";
import Dotnet from "@public/Dotnet.svg";
import Chatgpt from "@public/chatgpt.svg";

export type Skill = {
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
        title: 'C#',
        icon: 'devicon:csharp',
        content: [
            {
                img: Dotnet,
                name: 'NET Core',
            },
            {
                img: Dotnet,
                name: 'ASP.NET',
            },
            {
                img: Dotnet,
                name: 'Entity Framework',
            },
            {
                img: Dotnet,
                name: 'ADO.NET',
            },
            {
                img: Dotnet,
                name: 'NET MAUI',
            },
        ],
    },
    {
        title: 'Python',
        icon: 'devicon:python',
        content: [
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
            {
                icon: 'devicon:tensorflow',
                name: 'Tensorflow',
            },
            {
                icon: 'devicon:scikitlearn',
                name: 'Scikitlearn',
            },
            {
                icon: 'devicon:pandas',
                name: 'Pandas',
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
                icon: 'devicon:blazor',
                name: 'Blazor/Razor',
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
                icon: 'devicon:vim',
                name: 'Vim',
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
                icon: 'devicon:swagger',
                name: 'Swagger',
            },
            {
                icon: 'devicon:git',
                name: 'Git',
            },
            {
                icon: 'devicon:visualstudio',
                name: 'Visual Studio',
            },
            {
                img: Chatgpt,
                name: 'OpenAI API',
            },
            {
                icon: 'devicon:figma',
                name: 'Figma',
            },
            {
                icon: 'devicon:vscode',
                name: 'VS Code',
            },
            {
                icon: 'devicon:neovim',
                name: 'NVim',
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