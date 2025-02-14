import { StrengthCard } from "./StrengthCard";
import { strengths } from "@/data/Strengths";

export function Strengths(){
    return(
        <section className="w-11/12 mx-auto space-y-4">
            <h2 className={`text-center text-xl md:text-2xl lg:text-4xl font-bold`}>Strengths</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {strengths.map((it, index) => (
                    <StrengthCard name={it.name} icon={it.icon} key={index} />
                ))}
            </div>
        </section>
    );
};