import Image from "next/image";

import { AboutMe } from "@/components/Home/AboutMe";
import { Skills } from "@/components/Home/Skills";

import Malinche from "@public/Malinche.jpg";
import Malinche_LG from "@public/Malinche-LG.jpg";

export default function Home() {
  return (
    <section className="w-11/12 mx-auto space-y-8 md:space-y-10">
      {/* About Me */}
      <section className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="flex w-full md:w-2/5 lg:w-1/3 h-[600px] md:h-[500px] lg:h-[700px] mx-auto">
          <Image
            className="lg:hidden rounded-2xl"
            src={Malinche}
            alt="Me"
          />
          <Image
            className="max-lg:hidden rounded-2xl"
            src={Malinche_LG}
            alt="Me"
          />

        </div>
        <div className="w-full md:w-3/5 lg:w-2/3">
          <AboutMe />
        </div>
      </section>

      {/* Skills */}
      <div className="flex justify-center">
        <Skills />
      </div>
    </section> 
  );
}
