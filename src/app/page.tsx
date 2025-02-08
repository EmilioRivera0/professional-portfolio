import { Pictures } from "@/components/Home/Pictures";
import { AboutMe } from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <section className="w-11/12 mx-auto border-2">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Pictures/>
        </div>
        <div className="w-full md:w-2/3">
          <AboutMe />
        </div>
      </div>
    </section> 
  );
}
