export type Project = {
    title: string;
    description: string;
    technologies: string[];
    category: string[];
    type: string;
    link?: string;
};

export const categories: string[] = ["All", "C/C++", "Python", "JavaScript", "Bash", "C#" ];

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
        title: "Memory Tool",
        description: "This project is a hobby that I started in my free time to learn more about system calls, processes in Linux and how their memory is managed and how an external process can access and manipulate the memory of another process. Although this project is unfinished and there’s a lot of work left for it, I love working on this type of programs.",
        technologies: ["C/C++", "Bash", "Linux API", "System Calls", "Unix C Standard Library", "proc/ Directory"],
        category: ['C/C++',],
        type: "Linux Application",
        link: "https://github.com/EmilioRivera0/MemoryTool",
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
        type: "Executable",
        link: "https://github.com/EmilioRivera0/TruthTableGenerator",
    },
    {
        title: "Convex Hull",
        description: "C++ programs able to generate a Convex Hull given the specified amount of random dots to generate. The Graham Scan Algorithm is used to find the smallest perimeter and area possible given the set of points.",
        technologies: ["C++", "Bash", "C++ Standard Template Library", "Python", "Graphics.py"],
        category: ['C/C++',],
        type: "Executable",
        link: "https://github.com/EmilioRivera0/Convex_Hull",
    },
    {
        title: "ESP32 Room Status Telegram Bot",
        description: "C source code for programming an ESP32 board to read the temperature and humidity using the DHT11 sensor whenever a ‘/status’ command is sent to a Telegram Bot linked to the ESP32.",
        technologies: ["C", "ESP-IDF", "DHT11", "Telegram Bot API", "C Standard Library"],
        category: ['C/C++',],
        type: "Microcontroller Application",
        link: "https://github.com/EmilioRivera0/esp32-telegram-temperature-bot",
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
        type: "Executable",
        link: "https://github.com/EmilioRivera0/Platypus",
    },
    //JavaScript
    {
        title: "Portfolio",
        description: "Personal portfolio developed using self taught technologies to expand my software development knowledge and capabilities. This is my first project using Next.js.",
        technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind", "Bash"],
        category: ['JavaScript',],
        type: "Front End",
        link: "https://github.com/EmilioRivera0/professional-portfolio",
    },
    {
        title: "Web Pages",
        description: "Worked on the designing, development and deployment of multiple static web pages for various clients giving their companies presence and visibility on the internet as well as upgrading them to the new digital market.",
        technologies: ["JavaScript", "TypeScript", "Astro", "Tailwind"],
        category: ['JavaScript',],
        type: "Front End",
    },
    {
        title: "Web Application",
        description: "Worked on the designing, development and deployment of Database, REST API and a Web Page providing a web platform  for a private company to use and automate their internal processes.",
        technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Docker", "Bash", "JavaScript", "TypeScript", "React", "Tailwind", "AWS"],
        category: ['JavaScript', 'Python',],
        type: "Fullstack",
    },
    {
        title: "Mobile App",
        description: "Collaborating on the designing and development of a mobile application for FISAIR Puebla.",
        technologies: ["JavaScript", "React", "Ionic", "Tailwind"],
        type: "Multiplatform Application",
        category: ['JavaScript',],
    },
    {
        title: "Old Portfolio",
        description: "Previous personal portfolio developed using Vue.js.",
        technologies: ["JavaScript", "Vue.js", "Tailwind"],
        category: ['JavaScript',],
        type: "Front End",
        link: "https://github.com/EmilioRivera0/Portfolio",
    },
    // Python
    {
        title: "Engineering Faculty Repository API",
        description: "Managed, designed and developed  an API as the backend of the upcoming engineering repository for the IBERO Puebla community using Python and Django REST Framework.",
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
        type: "Script",
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
        type: "Script",
        link: "https://github.com/EmilioRivera0/hour_tracker",
    },
    //Bash
    {
        title: "Bash Scripts",
        description: "Repository containing Bash/Shell scripts that I’ve developed for various projects and use cases, and decided to start archiving them for public access and to reuse them in the future if necessary.",
        technologies: ["Bash", "GNU Coreutils", "Third Party Tools"],
        category: ['Bash',],
        type: "Automation Scripts",
        link: "https://github.com/EmilioRivera0/bash-scripts",
    },
    //C#
    {
        title: "Appointment Management System",
        description: "Designed and developed an appointment management system for a nutrition clinic using .NET MAUI.",
        technologies: ["C#", ".NET", "MAUI", "XAML",],
        category: ['C#',],
        type: "Multiplatform Application",
    },
];
