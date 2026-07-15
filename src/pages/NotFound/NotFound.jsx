import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./notFound.css";

const NotFound = () => {
    return (
        <>
            <NavBar />
            <main className="mainPage notFoundPage">
                <section className="wholePageSection">
                    <div className="centerContainer notFoundCard glass-panel">
                        <p className="notFoundEyebrow">404</p>
                        <h1>Page not found</h1>
                        <p className="notFoundDescription">The page you requested does not exist on this site.</p>
                        <a className="notFoundLink" href="/">
                            Return to the homepage
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default NotFound;
