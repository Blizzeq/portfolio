import React from 'react';
import finished from "../assets/img/finished.svg";
import landingpage from "../assets/img/Landing-page.svg";
import left from "../assets/img/chevron_left.svg";
import right from "../assets/img/chevron_right.svg";
import ellipse from "../assets/img/Ellipse.svg";
import ellipseactive from "../assets/img/Ellipse-Active.svg";
import open from "../assets/img/open_in_new.svg";
import github from "../assets/img/GitHub.svg";
import projectone from "../assets/img/projectone-img.png";
import firebase from "../assets/img/firebase-budget.png";
import sharex from "../assets/img/share-x.png";
import currency from "../assets/img/currency-converter.png";
import apple3d from "../assets/img/apple-3d.png";

function Projects(props) {

    const projects = [
        {
            projectone: [
                {
                    name: 'Project One',
                    description: 'This project is a website that provides a description and interactive 3D model of the Mercedes AMG Project One car.',
                    image: 'projectone'
                }
            ],
        },
        {
            firebase: [
                {
                    name: 'Firebase Budget',
                    description: 'This project is a website that allows you to manage your budget.',
                    image: 'firebase'
                }
            ],
        },
        {
            sharex: [
                {
                    name: 'ShareX',
                    description: 'This project is a website that allows you to share your files.',
                    image: 'sharex'
                }
            ],
        },
        {
            currency: [
                {
                    name: 'Currency Converter',
                    description: 'This project is a website that allows you to convert currencies.',
                    image: 'currency'
                }
            ],
        },
        {
            apple3d: [
                {
                    name: 'Apple 3D',
                    description: 'This project is a copy of Apple\'s homepage incorporating fully functional 3D animation. It was built using React, ThreeJS(WebGL) and GSAP.',
                    image: 'apple3d'
                }
            ],
        }
    ];



    return (
        <div className={'Projects'}>
            <div className={'Projects-title'}>
                <p>Projects</p>
            </div>
            <hr></hr>
            <div className={'Projects-container'}>
                <div className={'Projects-container-text'}>
                    <div className={'Projects-status'}>
                        <img src={finished} alt={'finished'}/>
                        <p>|</p>
                        <p>Finished</p>
                    </div>
                    <div className={'Projects-name'}>
                        <p>DFL</p>
                    </div>
                    <div className={'Projects-description'}>
                        <p>An application that will help you to report garbage
                            outbreaks and find trash collection points in your city.</p>
                    </div>
                    <div className={'Projects-button'}>
                        <a href={'#'}>
                            <button className={'button-projects'}>
                                VISIT APP WEBSITE
                            </button>
                        </a>
                    </div>
                </div>
                <div className={'Projects-image'}>
                    <img src={landingpage} alt={'landingpage'}/>
                </div>
            </div>
            <div className={'Projects-menu-controller'}>
                <button className={'menu-controller-left'}>
                    <img src={left} alt={'previous'}/>
                </button>
                <img src={ellipseactive} alt={'eclipse'}/>
                <img src={ellipse} alt={'eclipse'}/>
                <img src={ellipse} alt={'eclipse'}/>
                <button className={'menu-controller-right'}>
                    <img src={right} alt={'previous'}/>
                </button>
            </div>
            <div className={'Projects-technologies-title'}>
                <p>Technologies used to build the application services:</p>
            </div>
            <div className={'Projects-technologies-container'}>
                <div className={'Projects-technologies-front'}>
                    <div className={'Technologies-name'}>
                        <p>Frontend</p>
                        <a href={'#'}>
                            <img src={open} alt={'open'}/>
                        </a>
                    </div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript (w/Typescript)</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                        <li>TailwindCSS</li>
                        <li>SASS</li>
                    </ul>
                </div>
                <div className={'Projects-technologies-back'}>
                    <div className={'Technologies-name'}>
                        <p>Backend</p>
                        <a href={'#'}>
                            <img src={open} alt={'open'}/>
                        </a>
                    </div>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySql</li>
                        <li>Firebase</li>
                        <li>Postman</li>
                    </ul>
                </div>
                <div className={'Projects-technologies-pm'}>
                    <div className={'Technologies-name'}>
                        <p>Project Management Tools</p>
                        <a href={'#'}>
                            <img src={open} alt={'open'}/>
                        </a>
                    </div>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Slack</li>
                        <li>Trello</li>
                        <li>Jira</li>
                    </ul>
                </div>
            </div>
            <div className={'Projects-technologies-button'}>
                <a href={'#'}>
                    <button className={'button-technologies'}>
                        <img src={github} alt={'github'}/>
                        <p>Check other repositories</p>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Projects;