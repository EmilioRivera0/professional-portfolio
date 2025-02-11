export type Project = {
    title: string;
    description: string;
    technologies: string[];
    category: string[];
    type: string;
    link?: string;
};

export const categories: string[] = ["All", "C/C++", "Python", "JavaScript", "C#" ];

export const projects: Project[] = [
    //C/C++
    {
        title: "Kharon Safe Directory",
        description: "Kharon Safe Directory project consists of a pair of softwares used to protect, manage and log the access to a directory and its entries through a client server architecture.",
        technologies: ["C/C++", "Bash", "POSIX Threads", "POSIX Semaphores", "POSIX Shared Memory", "Linux FIFOs", "Linux Filesystem API", "Unix C Standard Library"],
        category: ['C/C++',],
        type: "Linux Application",
        link: "https://github.com/EmilioRivera0/KharonSafeDirectory",
    },
    {
        title: "IPC on Linux using Shared Memory & Signals",
        description: "C++ programs based on the Client-Server architecture that achieve communication between the Server and the multiple Clients through the implementation of Shared Memory, Semaphores, Monitors and Signals.",
        technologies: ["C/C++", "Bash", "POSIX Signals", "POSIX Shared Memory", "Unix C Standard Library"],
        category: ['C/C++',],
        type: "Linux Application",
        link: "https://github.com/EmilioRivera0/Client_Server_IPC_Linux",
    },
    {
        title: "Truth Table Generator",
        description: "Software developed in C that receives a logical expression and generates its respective truth table.",
        technologies: ["C", "C Standard Library"],
        category: ['C/C++',],
        type: "Multiplatform Executable",
        link: "https://github.com/EmilioRivera0/TruthTableGenerator",
    },
    {
        title: "Convex Hull",
        description: "C++ programs able to generate a Convex Hull given the specified amount of random dots to generate. The Graham Scan Algorithm is used to find the smallest perimeter and area possible given the set of points.",
        technologies: ["C++", "Bash", "C++ Standard Template Library", "Python", "Graphics.py"],
        category: ['C/C++',],
        type: "Multiplatform Executable",
        link: "https://github.com/EmilioRivera0/Convex_Hull",
    },
    {
        title: "Atmega328P Car",
        description: "C source code for a bluetooth remotely controlled car using an Atmega328P microcontroller.",
        technologies: ["C", "Atmega328P"],
        category: ['C/C++',],
        type: "Microcontroller Application",
        link: "https://github.com/EmilioRivera0/ATmega328P_Car",
    },
    {
        title: "Atmega328P 8-bit Snake",
        description: "C source code for an 8-bit snake with four physical direction buttons.",
        technologies: ["C", "Atmega328P"],
        category: ['C/C++',],
        type: "Microcontroller Application",
        link: "https://github.com/EmilioRivera0/ATmega328P_8-bit_Snake",
    },
    {
        title: "Platypus Programming Language Lexical Analyzer",
        description: "Platypus programming language lexical analyzer developed using vanilla C++.",
        technologies: ["C++", "Bash", "C++ Standard Template Library"],
        category: ['C/C++',],
        type: "Multiplatform Executable",
        link: "https://github.com/EmilioRivera0/Platypus",
    },
    //JavaScript
    {
        title: "Portfolio",
        description: "Personal portfolio developed using self taught technologies to expand my software development knowledge and capabilities. This is my first ever project using Vue.",
        technologies: ["JavaScript", "Vue", "Tailwind"],
        category: ['JavaScript',],
        type: "Front End",
        link: "https://github.com/EmilioRivera0/Portfolio",
    },
    {
        title: "Mobile App",
        description: "Collaborating on the designing and development of a mobile application for FISAIR Puebla.",
        technologies: ["JavaScript", "React", "Ionic", "Tailwind"],
        type: "Multiplatform Application",
        category: ['JavaScript',],
    },
    // Python
    {
        title: "Engineering Faculty Repository API",
        description: "I'm managing, designing and developing an API as the backend of the upcoming engineering repository for the IBERO Puebla community using Python and Django REST Framework.",
        technologies: ["Python", "Django", "Django REST Framework", "Postman", "SQLite"],
        type: "Back End (REST API)",
        category: ['Python',],
    },
    {
        title: "Videogame API",
        description: "Python developed API that has the CRUD functions and a search engine to interact with a PostgreSQL database containing information about videogames.",
        technologies: ["Python", "Flask", "PostgreSQL"],
        category: ['Python',],
        type: "Back End (REST API)",
        link: "https://github.com/EmilioRivera0/videogame_api",
    },
    {
        title: "Ecommerce",
        description: "This repository holds a basic Ecommerce website for selling any type of product.",
        technologies: ["Python", "Django", "SQLite", "MDB Bootstrap"],
        category: ['Python',],
        type: "Full Stack",
        link: "https://github.com/EmilioRivera0/ecommerce_backend",
    },
    {
        title: "Sobel Filter",
        description: "Python program capable of detecting the vertical and horizontal edges of an image by applying the Sobel filters.",
        technologies: ["Python", "OpenCV", "Matplotlib", "Numpy"],
        category: ['Python',],
        type: "Multiplatform Script",
        link: "https://github.com/EmilioRivera0/Sobel_Filter",
    },
    {
        title: "Basic Task API",
        description: "API to manage a to do tasks list.",
        technologies: ["Python", "Flask"],
        category: ['Python',],
        type: "Back End (REST API)",
        link: "https://github.com/EmilioRivera0/basic_task_api",
    },
    {
        title: "Basic Task API Client",
        description: "Web Client to interact with the task management API.",
        technologies: ["Python", "Flask"],
        category: ['Python',],
        type: "Back End (REST API)",
        link: "https://github.com/EmilioRivera0/basic_task_api_client",
    },
    {
        title: "Hour Tracker",
        description: "Python developed software that automates and manages the hours covered by students in their social service.",
        technologies: ["Python", "SQL", "MySQL"],
        category: ['Python',],
        type: "Multiplatform Script",
        link: "https://github.com/EmilioRivera0/hour_tracker",
    },
    //C#
    {
        title: "Appointment Management System",
        description: "Designing and developing an appointment management system for a nutrition clinic using .NET MAUI.",
        technologies: ["C#", ".NET", "MAUI", "XAML",],
        category: ['C#',],
        type: "Multiplatform Application",
    },
];
