import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Greeting from "./components/Greeting/Greeting.jsx";
import About from "./components/About/About.jsx";

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
        <Footer/>
    </>
  )
}

export default App
