import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div class="logo"><Link to="/"><img src="img/logo2-light.svg" alt="logo" /></Link> </div>
            <nav>
                <a onclick="mobileMenu()" href="#" class="hamburger"><span class="material-icons"> menu </span></a>
                <ul>
                    <li><a class="nav-item" href="#">Portfolio <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/animation">Animation</Link></li>
                        </ul>
                    </li>
                    <li><a class="nav-item" href="#contact-me">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;