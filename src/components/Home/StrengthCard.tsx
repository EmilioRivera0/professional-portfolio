import { Icon } from "@iconify/react";

type Props = {
    icon: string;
    name: string;
};

export function StrengthCard({icon, name}: Props) {
    return(
        <div
            className={`flex flex-row py-2 px-4 items-center justify-between gap-1 rounded-xl bg-gray-200 transition hover:scale-125 hover:-translate-y-3 hover:md:-translate-y-4 hover:bg-green-400`}
        >
            <Icon icon={icon} width={40} />
            <h3 className="text-lg md:text-xl lg:text-3xl font-bold">{name}</h3>
        </div>
    )
};