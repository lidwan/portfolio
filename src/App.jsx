import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Greeting from "./components/Greeting/Greeting.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {

  return (
    <>
        <NavBar/>
        <div>
            <Greeting/>
        </div>
        <div>
            <About />
        </div>
        <div>
            <Projects />
        </div>
        <div>
            <Contact />
        </div>
        <ScrollUp />
        <Footer/>
    </>
  )
}

export default App
