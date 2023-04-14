import React from 'react';
import lightmode from "../assets/img/logo-light-mode.svg";
import language from "../assets/img/logo-language.svg";

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'logo'}>
                <p className={'sugarpunch font-32'}>&lt;&gt;Jakub Krasuski&lt;/&gt;</p>
            </div>
            <div className={'header-text'}>
                <a href={'#'}>Home</a>
                <a href={'#'}>Projects</a>
                <a href={'#'}>Tech</a>
                <a href={'#'} id={'contact'}>Contact</a>
                <a href={'#'}><img src={lightmode} alt={'displaymode'} /></a>
                <a href={'#'}><img src={language} alt={'language'} /></a>
            </div>
        </div>
    );
}

export default Header;