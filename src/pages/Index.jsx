import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
const Index = () => {
  return <div className="min-h-screen bg-background relative">
      <StarBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>;
};
var Index_default = Index;
export {
  Index_default as default
};
