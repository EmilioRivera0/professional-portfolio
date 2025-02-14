export type Contact = {
    icon: string;
    hrefPrefix?: string;
    src: string;
};

export const contacts: Contact[] = [
    {
        icon: 'devicon:linkedin',
        src: 'www.linkedin.com/in/emilio-rivera-macias',
    },
    {
        icon: 'devicon:github',
        src: 'github.com/EmilioRivera0',
    },
    {
        icon: 'mdi:email-outline',
        hrefPrefix: 'mailto:',
        src: 'emilioriveramacias@gmail.com',
    },
    {
        icon: 'mdi:phone',
        hrefPrefix: 'tel:+',
        src: '2224896954',
    },
];