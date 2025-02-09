import { Icon } from "@iconify/react";

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

export function Dropdown(props: Skill) {
    return (
        <button className="flex flex-row py-2 px-4 items-center rounded-2xl border-2">
            <Icon icon={props.icon} width={40} />
            <h3 className="ml-2 mr-4 text-lg md:text-xl lg:text-3xl font-bold">{props.title}</h3>
            <Icon icon="mdi:arrow-down-drop-circle-outline" width={25} />
        </button>
    );
};