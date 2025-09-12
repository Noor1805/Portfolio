import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;


