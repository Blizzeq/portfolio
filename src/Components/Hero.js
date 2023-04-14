import React from 'react';
import heroleft from "../assets/img/hero-image-left.svg";
import heroright from "../assets/img/hero-image-right.svg";
import herolefts from "../assets/img/hero-image-left-s.svg";
import mail from "../assets/img/mail.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import mouse from "../assets/img/mouse.svg";
import doublearrow from "../assets/img/keyboard_double_arrow_down.svg";


function Hero(props) {
    return (
        <div className={'hero'}>
            <div className={'hero-img-left'}>
                <img src={heroleft} alt={'background'}/>
                <img src={herolefts} alt={'background'} className={'hero-img-left-s'}/>
            </div>
            <div className={'hero-text'}>
                <p className={'sugarpunch font-32'}>HI , I'M</p>
                <p className={'sugarpunch font-128'} style={{marginTop : '25px'}}>JAKUB KRASUSKI</p>
                <p className={'roboto-serif font-32'} style={{marginTop : '25px'}}>Frontend developer and IT student</p>
                <button className={'Inter-SemiBold font-18 button-hero'} style={{marginTop : '25px'}}>Contact</button>
                <div className={'socials'}>
                    <a href={'mailto:kj.krasuski.mail@gmail.com'}><img src={mail} alt={'mail'}/></a>
                    <a href={'tel:+48603524300'}><img src={whatsapp} alt={'whatsapp'}/></a>
                </div>
                <a href={'#'}>
                <img src={mouse} alt={'down'} className={'mouse'}/>
                <img src={doublearrow} alt={'down'} className={'arrow'}/>
                </a>
            </div>
            <div className={'hero-img-right'}>
                <img src={heroright} alt={'background'}/>
            </div>
        </div>
    );
}

export default Hero;