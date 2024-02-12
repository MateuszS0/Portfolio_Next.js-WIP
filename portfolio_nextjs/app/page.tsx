import Header from "@/components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
import Skills from "@/components/Header/Skills/skills";
import Projects from "@/components/Header/Projects/projects";
import Animation from "@/components/Header/Animation/animation";
export default function Home() {
  return (
    <div className="m-4">
      <Navbar/>
      <Header/>
      <Animation/>
      <Skills/>
      <Projects/>
    </div>
  );
}
