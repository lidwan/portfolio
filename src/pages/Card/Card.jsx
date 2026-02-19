import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './card.css';
const Card = () => {
    useEffect(() => {
        const metaTags = [
            { name: "robots", content: "noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" },
            { name: "Googlebot", content: "noindex, nofollow" },
            { name: "GPTBot", content: "noindex, nofollow" },
            { name: "ChatGPT-User", content: "noindex, nofollow" },
            { name: "Google-Extended", content: "noindex, nofollow" },
            { name: "CCBot", content: "noindex, nofollow" },
            { name: "anthropic-ai", content: "noindex, nofollow" },
            { name: "Claude-Web", content: "noindex, nofollow" },
            { name: "Meta-ExternalAgent", content: "noindex, nofollow" },
            { name: "Amazonbot", content: "noindex, nofollow" }
        ];

        const addedElements = [];

        const existingRobots = document.querySelector('meta[name="robots"]');
        let originalRobotsContent = null;
        if (existingRobots) {
            originalRobotsContent = existingRobots.getAttribute('content');
            existingRobots.setAttribute('content', metaTags[0].content);
        } else {
            const meta = document.createElement('meta');
            meta.name = metaTags[0].name;
            meta.content = metaTags[0].content;
            document.head.appendChild(meta);
            addedElements.push(meta);
        }

        for (let i = 1; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const meta = document.createElement('meta');
            meta.name = tag.name;
            meta.content = tag.content;
            document.head.appendChild(meta);
            addedElements.push(meta);
        }

        return () => {
            if (existingRobots && originalRobotsContent) {
                existingRobots.setAttribute('content', originalRobotsContent);
            }
            addedElements.forEach(el => {
                if (el.parentNode) el.parentNode.removeChild(el);
            });
        };
    }, []);

    return (
        <>
            <NavBar />
            <main className="mainPage cardPage">
                <section className="wholePageSection centerContainer cardContainer">
                    <div className="contactCard">
                        <div className="cardHeader">
                            <h2>Loay Idwan</h2>
                        </div>

                        <div className="cardLinks">
                            <a href="tel:0780055770" className="cardLink">
                                <span className="iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </span>
                                <div className="linkText">
                                    <span className="linkTitle">Phone</span>
                                    <span className="linkValue">0780055770</span>
                                </div>
                            </a>

                            <a href="mailto:Loay@Lidwan.com" className="cardLink">
                                <span className="iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </span>
                                <div className="linkText">
                                    <span className="linkTitle">Email</span>
                                    <span className="linkValue">Loay@Lidwan.com</span>
                                </div>
                            </a>

                            <a href="https://wa.me/962780055770" target="_blank" rel="noreferrer" className="cardLink">
                                <span className="iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                </span>
                                <div className="linkText">
                                    <span className="linkTitle">WhatsApp</span>
                                    <span className="linkValue">Message on WhatsApp</span>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/loayidwan" target="_blank" rel="noreferrer" className="cardLink">
                                <span className="iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </span>
                                <div className="linkText">
                                    <span className="linkTitle">Instagram</span>
                                    <span className="linkValue">@Loayidwan</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Card;
