import About from "./compondes/About";
import Contact from "./compondes/Contact";
import Footer from "./compondes/Footer";
import Header from "./compondes/Header";
import Hero from "./compondes/Hero";
import Projects from "./compondes/Projects";
import Resume from "./compondes/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
