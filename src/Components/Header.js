import React, {useState} from 'react';
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
        <div className={'header'}>
            <div className={'logo'}>
                <p className={'sugarpunch font-32'}>&lt;&gt;Jakub Krasuski&lt;/&gt;</p>
            </div>
            <div className={`header-text ${isMenuOpen ? 'open' : ''}`}>
                <a href={'#'}>Home</a>
                <a href={'#'}>Projects</a>
                <a href={'#'}>Tech</a>
                <a href={'#'} id={'contact'}>Contact</a>
                <a href={'#'}><img src={lightmode} alt={'displaymode'} /></a>
                <a href={'#'}><img src={language} alt={'language'} /></a>
            </div>
            <div className={'header-text-mobile'}>
                <a onClick={handleBurgerClick}><img src={[isMenuOpen ? close : burger]} alt={'burger'} /></a>
            </div>
        </div>
    );
}

export default Header;