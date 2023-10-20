import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {

  return (
    <main className="bg-gradient-to-b from-black to-zinc-900">
      <ScrollProgress />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>g
      <section>
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
      <Nav />
    </main>
  )
}

export default App
