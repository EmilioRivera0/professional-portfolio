import { Projects } from "@/components/Projects/Projects";

export default function ProjectsPage() {

  return (
    <section className="w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">My Projects</h1>
      <Projects />
    </section> 
  );
}
