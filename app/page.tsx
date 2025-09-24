import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
