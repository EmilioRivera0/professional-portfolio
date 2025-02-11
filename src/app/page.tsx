import { AboutMe } from "@/components/Home/AboutMe";
import { Skills } from "@/components/Home/Skills";
import { Strengths } from "@/components/Home/Strengths";

export default function Home() {
  return (
    <section className="w-11/12 mx-auto space-y-24 md:space-y-32">
      <AboutMe />
      <Skills />
      <Strengths />
    </section> 
  );
}
