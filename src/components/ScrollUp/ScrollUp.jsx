import './scrollUp.css'

const ScrollUp = () => {
    const scrollToTop = () => {
        if (typeof window === "undefined") return;

        try {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="scrollUpButtonContainer">
            <button type="button" className="scrollTopButton" onClick={scrollToTop}>
                Scroll back up?
            </button>
        </div>
    )
}

export default ScrollUp
