import { Icon } from "@iconify/react";

import { contacts } from "@/data/Contact";

export function ContactInfo() {
    return (
        <div className="w-fit p-2 mx-auto rounded-xl border-2">
            {contacts.map((it, index) => (
                <div className="justify-center text-lg md:text-xl lg:text-2xl" key={index}>
                    <div className="flex flex-row w-fit p-2 items-center gap-2">
                        <Icon icon={it.icon} width={30}/>
                        <a
                            className="font-semibold text-blue-600"
                            href={`${it.hrefPrefix? it.hrefPrefix : ''}${it.src}`}
                        >
                            {it.src}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};