import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    // window.onload = () => scrollCheck();
    // window.onscroll = () => scrollCheck();

    const mobileMenu = () => document.querySelector('ul').classList.toggle('mobilemenu');
    const backToButton = document.getElementById("back-to-top");
    const width = window.matchMedia("(max-width: 576px)");

    // const backToTop = () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // };



    // const scrollCheck = () =>
    //     (document.body.scrollTop > 200 ||
    //         (document.documentElement.scrollTop > 200 && !width.matches))
    //         ? (backToButton.style.display = "flex")
    //         : (backToButton.style.display = "none");

    return (
        <header>
            <div className="logo"><Link to="/portfolio_react"><p className="logo">S+>//>n</p></Link> </div>
            <nav>
                <a onClick={mobileMenu} href="#" className="hamburger"><span className="material-icons"> menu </span></a>
                <ul>
                    <li><a className="nav-item" href="#">Portfolio <i className="fas fa-chevron-down"></i></a>
                        <ul className="dropdown-list">
                            <li><a href="/portfolio_react/#home">Home</a></li>
                            <li><a href="/portfolio_react/#work">Work</a></li>
                            <li><a href="/portfolio_react/#experience">Experience</a></li>
                            <li><a href="/portfolio_react/#skills">Skills</a></li>
                            <li><Link to="/portfolio_react/gallery">Gallery</Link></li>
                            <li><Link to="/portfolio_react/animation">Animation</Link></li>
                        </ul>
                    </li>
                    <li><a className="nav-item" href="#contact-me">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;