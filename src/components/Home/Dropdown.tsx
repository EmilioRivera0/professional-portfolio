"use client"

import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";

type Skill = {
    title: string;
    icon: string;
    content: 
        {
            icon: string;
            name: string;
        }[]
};

type Props = {
    skill: Skill;
};

export function Dropdown({skill}: Props) {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    function click(e: any){
        // show/hide dropdown
        setShow(!show);
    }

    useEffect(() => {
        function outsideClick(){
            //------------------------------------------------------------------------
        };

        if (show)
            window.addEventListener("mouseup", outsideClick);
        else
            window.removeEventListener("mouseup", outsideClick);
    }, [show]);

    return (
        <div className="relative">
            {/* Button */}
            <button 
                className={`flex flex-row w-full py-2 px-4 items-center ${show? 'rounded-t-xl':'rounded-xl'} border-2 bg-gray-200`}
                onClick={click}
                ref={buttonRef}
            >
                <Icon icon={skill.icon} width={40} />
                <h3 className="ml-2 mr-4 text-lg md:text-xl lg:text-3xl font-bold">{skill.title}</h3>
                <Icon icon="mdi:arrow-down-drop-circle-outline" width={25} />
            </button>
            {/* Hidden Dropdown */}
            <div
                className={`${show? 'grid':'hidden'} absolute z-10 grid-cols-2 w-full p-2 rounded-b-xl bg-gray-200`}
                ref={dropdownRef}
            >
                {
                    skill.content.map((it, index) => (
                        <div className="flex flex-row items-center" key={index}>
                            <Icon icon={it.icon} width={30} />
                            <h3 className="ml-2 text-lg md:text-xl lg:text-2xl">{it.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};