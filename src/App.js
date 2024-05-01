import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="h-screen ">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Certificates/>
      <Contact />
    </div>
  );
}

export default App;
