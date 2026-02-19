import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark siteNav">
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
                                href="https://blog.loayidwan.com/">Blog</a>
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
