import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Greeting from "../../components/Greeting/Greeting.jsx";
import About from "../../components/About/About.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import ScrollUp from "../../components/ScrollUp/ScrollUp.jsx";
import Projects from "../../components/Projects/Projects.jsx";
const Home = () => {
    return (
        <>
            <NavBar />
            <main className="mainPage">
                <Greeting />
                <About />
                <Projects />
                <Contact />
            </main>
            <ScrollUp />
            <Footer />
        </>
    )
}

export default Home;
