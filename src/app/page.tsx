import { Pictures } from "@/components/Home/Pictures";
import { AboutMe } from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="flex w-full md:w-2/5 lg:w-1/3 h-[500px] lg:h-[700px]">
          <Pictures/>
        </div>
        <div className="w-full md:w-3/5 lg:w-2/3">
          <AboutMe />
        </div>
      </div>
    </section> 
  );
}
