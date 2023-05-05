import React from 'react';
import image1 from '../assets/img/ending-image-1.svg';

function Ending(props) {
    return (
        <div className={'ending'}>
            <div className={'ending-container'}>
                <div className={'ending-text'}>
                    <p>WANT TO HAVE AN AWESOME PROJECT DONE?</p>
                </div>
                <div className={'ending-input'}>
                    <input type="text" placeholder={'Enter your e-mail here'}/>
                    <button className={'ending-button'}>Contact</button>
                </div>
            </div>
            <div className={'ending-image-1'}>
                <img src={image1} alt={'ending-image-1'}/>
            </div>
        </div>
    );
}

export default Ending;