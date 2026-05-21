import React from "react";
import "./App.css";
import AppBar from "./Components/AppBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-[#1c1b22] text-white min-h-screen scroll-smooth">
      <AppBar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Har section ko ek ID di gayi hai navigation ke liye */}
        <section id="home" className="pt-24 pb-12">
          <Hero />
        </section>
        
        <section id="about" className="py-12">
          <About />
        </section>

        <section id="skills" className="py-12">
          <Skills />
        </section>

        <section id="experience" className="py-12">
          <Experience />
        </section>

        <section id="projects" className="py-12">
          <Projects />
        </section>

        <section id="contact" className="py-12 mb-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;