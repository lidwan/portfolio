import { useEffect, useState } from 'react';
import './scrollUp.css'

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (event) => {
        event.preventDefault();

        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
            window.scrollTo(0, 0);
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="scrollUpButtonContainer isVisible">
            <a
                href="#top"
                className="scrollTopButton"
                onClick={scrollToTop}
            >
                Scroll back up?
            </a>
        </div>
    )
}

export default ScrollUp
