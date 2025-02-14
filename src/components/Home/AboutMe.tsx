import Image from "next/image";

import { Description } from "@/components/Home/Description";

import Malinche from "@public/Malinche.webp";
import Malinche_LG from "@public/Malinche-LG.webp";

export function AboutMe() {
    return (
        <section className="flex flex-col md:flex-row md:h-[500px] lg:h-[600px] gap-2 md:gap-4">
            <div className="flex w-10/12 md:w-2/5 lg:w-1/3 h-[450px] mx-auto">
                <Image
                    className="lg:hidden rounded-2xl"
                    src={Malinche}
                    alt="Me"
                    unoptimized
                />
                <Image
                    className="max-lg:hidden rounded-2xl"
                    src={Malinche_LG}
                    alt="Me"
                    unoptimized
                />
            </div>
            <div className="w-full md:w-3/5 lg:w-2/3 mx-auto">
                <Description />
            </div>
        </section>

    );
};