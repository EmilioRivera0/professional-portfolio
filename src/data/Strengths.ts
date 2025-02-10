//import { StaticImageData } from "next/image";

type Strength = {
    icon: string;
    //img?: StaticImageData;
    name: string;
};

export const skills: Strength[] = [
    {
        icon: 'mdi:account-group-outline',
        name: 'Leadership',
    },
    {
        icon: 'mdi:shield-check-outline',
        name: 'Confident',
    },
    {
        icon: 'mdi:chat-plus-outline',
        name: 'Social',
    },
    {
        icon: 'mdi:comment-check-outline',
        name: 'Great Communicator',
    },
    {
        icon: 'mdi:notebook-check-outline',
        name: 'Responsible',
    },
    {
        icon: 'mdi:head-lightbulb-outline',
        name: 'Initiative',
    },
    {
        icon: 'mdi:account-search-outline',
        name: 'Inquirer',
    },
    {
        icon: 'mdi:heart-flash',
        name: 'Adventurer',
    },
];