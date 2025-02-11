"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

import { PagePath, HeaderDropdown } from "./HeaderDropdown";

const pages : PagePath[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Projects',
        path: '/projects',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
];

export function Header() {
    const path = usePathname();
    return (
        <section className="fixed top-0 z-20 w-full font-semibold rounded-2xl backdrop-blur-sm bg-gray-200/50">
            {/* Desktop Devices */}
            <section className="flex flex-row max-md:hidden px-6 py-2 justify-between text-lg lg:text-xl">
                <div className="w-5/12 lg:w-4/12 my-auto">
                    <h2>Emilio Rivera Macías</h2>
                    <h3>Computer Systems Engineer</h3>
                </div>
                <div className="flex flex-row w-2/12 lg:w-8/12 my-auto justify-center gap-3 lg:gap-16">
                    {pages.map((it, index) => (
                        <Link
                            className={`${path === it.path? 'bg-blue-500/50' : ''} px-4 py-2 rounded-3xl`}
                            href={it.path}
                            key={index}
                        >
                            {it.title}
                        </Link>))}
                </div>
                <div className="flex w-5/12 lg:w-4/12 my-auto justify-end">
                    <Link className="mr-12 lg:mr-12" href='/CV.pdf'>CV</Link>
                </div>
            </section>
            {/* Mobile Devices */}
            <section className="md:hidden flex flex-row px-6 py-2 justify-between">
                <div className="w-7/12 my-auto">
                    <h2>Emilio Rivera Macías</h2>
                    <h3>Computer Systems Engineer</h3>
                </div>
                <HeaderDropdown
                    content={pages}
                    className="w-5/12"
                    path={path}
                />
            </section>
        </section>
    );
}
