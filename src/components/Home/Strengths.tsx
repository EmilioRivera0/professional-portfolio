import { Icon } from "@iconify/react";

import { strengths } from "@/data/Strengths";

export function Strengths(){
    return(
        <section className="w-11/12 mx-auto space-y-4">
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">Strengths</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {strengths.map((it, index) => (
                    <div
                        className={`flex flex-row py-2 px-4 items-center justify-between gap-1 rounded-xl bg-gray-200 transition hover:scale-125 hover:-translate-y-3 hover:md:-translate-y-4 hover:bg-green-400`}
                        key={index}
                    >
                        <Icon icon={it.icon} width={40} />
                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold">{it.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};