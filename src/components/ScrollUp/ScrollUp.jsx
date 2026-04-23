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

    return (
        <div className={`scrollUpButtonContainer${isVisible ? ' isVisible' : ''}`}>
            <a href="#"><button type="button" className="btn btn-dark scrollTopButton">Scroll back up?</button></a>
        </div>
    )
}

export default ScrollUp
