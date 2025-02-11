"use client"

import Link from "next/link";

import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";

export type PagePath = {
    title: string;
    path: string;
};

type Props = {
    content: PagePath[],
    className: string;
};

export function HeaderDropdown({content, className}: Props) {
    const [show, setShow] = useState<boolean>(false);
    // refs to dropdown elements
    const dropdownRef = useRef<HTMLDivElement>(null);

    function click(e: any){
        // show/hide dropdown
        setShow(!show);
    }

    useEffect(() => {
        // add or remove event listener
        function outsideClick(e: any){
            setShow(!show);
        };

        if (show)
            window.addEventListener("mouseup", outsideClick);
        else
            window.removeEventListener("mouseup", outsideClick);

    }, [show]);

    return (
        <div className={`relative flex justify-end ${className}`} ref={dropdownRef}>
            {/* Button */}
            <button 
                className="py-2 px-4 items-center"
                onClick={click}
            >
                <Icon icon="mdi:format-list-bulleted-square" width={30} />
            </button>
            {/* Hidden Dropdown */}
            <div className={`${show? 'flex flex-col':'hidden'} absolute -bottom-[200px] z-10 w-full p-4 justify-center gap-4 text-lg font-semibold rounded-xl bg-gray-200/80`}>
                {content.map((it, index) => (
                    <Link
                        className="border-b-2 border-black"
                        href={it.path}
                        key={index}
                    >{
                        it.title}
                    </Link>
                ))}
                <Link
                    className="border-b-2 border-black"
                    href="/CV.pdf"
                >
                    CV
                </Link>
            </div>
        </div>
    );
};