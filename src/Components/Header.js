import React, { useState } from 'react';
import { Link } from 'react-scroll';
import lightmode from "../assets/img/logo-light-mode.svg";
import language from "../assets/img/logo-language.svg";
import burger from "../assets/img/burger-icon.svg";
import close from "../assets/img/close-button.svg";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <p className="sugarpunch font-32">&lt;&gt;Jakub Krasuski&lt;/&gt;</p>
            </div>
            <div className={`header-text ${isMenuOpen ? 'open' : ''}`}>
                <Link to="home" smooth={true} duration={1200}>Home</Link>
                <Link to="projects" smooth={true} duration={1200}>Projects</Link>
                <Link to="tech" smooth={true} duration={1200}>Tech</Link>
                <Link to="contact-link" smooth={true} duration={1200} id={'contact'}>Contact</Link>
            </div>
            <div className="header-text-mobile">
                <a onClick={handleBurgerClick}><img src={isMenuOpen ? close : burger} alt="burger" /></a>
            </div>
        </div>
    );
}

export default Header;
