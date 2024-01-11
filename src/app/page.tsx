import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Page() {
    return (
        <main className="px-[3rem] md:px-[6rem] lg:px-[8.5rem]">
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </main>
    )
}
