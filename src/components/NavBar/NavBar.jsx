import { useEffect, useState } from 'react';
import './navbar.css'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="top" className={`navbar navbar-expand-lg navbar-dark siteNav${isScrolled ? ' siteNav--scrolled' : ''}`}>
            <div className="container-fluid navInner">
                <a className="navbar-brand" id="title" href="https://loayidwan.com/">Loay Idwan</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto navLinksList">

                        <li className="nav-item">
                            <a className="nav-link siteNavLink" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link siteNavLink" href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link siteNavLink" aria-current="page"
                                href="https://lsblk.dev/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link siteNavLink" href="/#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link siteNavLink" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
