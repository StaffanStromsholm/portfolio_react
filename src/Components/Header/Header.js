import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const mobileMenu = () => document.querySelector('ul').classList.toggle('mobilemenu');
    const backToButton = document.getElementById("back-to-top");
    const width = window.matchMedia("(max-width: 576px)");
    const closeMobileMenu = (e) => {
        if(e.target.textContent === 'Home' ||
        e.target.textContent === 'Work' ||
        e.target.textContent === 'Experience' ||
        e.target.textContent === 'Skills' ||
        e.target.textContent === 'Animation' ||
        e.target.textContent === 'Gallery'){
            mobileMenu();
        }
    }

    document.addEventListener('click', closeMobileMenu);

    return (
        <header>
            <div className="logo"><Link to="/portfolio_react"><p className="logo">|S+>//>n| <br></br> Strömsholm</p></Link> </div>
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