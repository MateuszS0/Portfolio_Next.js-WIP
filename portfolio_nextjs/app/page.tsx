import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Skills from "@/components/Skills/skills";
import Projects from "@/components/Projects/projects";
export default function Home() {
  return (
    <div className="m-4">
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
    </div>
  );
}
