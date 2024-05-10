import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
