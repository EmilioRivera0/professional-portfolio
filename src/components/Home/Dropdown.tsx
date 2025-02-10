"use client"

import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";

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

type Props = {
    skill: Skill;
    className: string;
};

export function Dropdown({skill, className}: Props) {
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
            if (dropdownRef.current)
                if (!dropdownRef.current.contains(e.target))
                    setShow(!show);
        };
        if (show)
            window.addEventListener("mouseup", outsideClick);
        else
            window.removeEventListener("mouseup", outsideClick);

    }, [show]);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Button */}
            <button 
                className={`flex flex-row w-full py-2 px-4 items-center justify-between ${show? 'rounded-t-xl':'rounded-xl'} border-2 bg-gray-200`}
                onClick={click}
            >
                <Icon icon={skill.icon} width={40} />
                <h3 className="ml-2 mr-4 text-lg md:text-xl lg:text-3xl font-bold">{skill.title}</h3>
                <Icon icon="mdi:arrow-down-drop-circle-outline" width={25} />
            </button>
            {/* Hidden Dropdown */}
            <div className={`${show? 'flex flex-wrap':'hidden'} absolute z-10 w-full p-4 justify-center gap-4 rounded-b-xl bg-gray-200`}>
                {
                    skill.content.map((it, index) => (
                        <div className="flex flex-row items-center" key={index}>
                            {it.icon? (<Icon icon={it.icon} width={35} />) : (<Image width={35} src={it.img? it.img : ''} alt="Logo" />)}
                            <h3 className="ml-1 text-lg md:text-xl lg:text-2xl">{it.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};