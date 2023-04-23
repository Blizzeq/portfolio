import React from 'react';
import tagweb from '../assets/img/Tag-Web.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import js from '../assets/img/JavaScript.svg';
import typescript from '../assets/img/TypeScript.svg';
import tagframeworks from '../assets/img/Tag-Frameworks.svg';
import node from '../assets/img/node.svg';
import next from '../assets/img/Next.svg';
import taglibraries from '../assets/img/Tag-Libraries.svg';
import react from '../assets/img/react.svg';
import tailwind from '../assets/img/tailwind.svg';
import mysql from '../assets/img/mysql-logo-black-and-white.png';
import tagdatabases from '../assets/img/Tag-Data.svg';
import techimage from '../assets/img/tech-logo.svg';


function Tech(props) {
    return (
        <div className={'tech'}>
            <div className={'tech-container'}>
                <div className={'tech-text'}>
                    <div className={'tech-title Roboto-Slab'}>
                        <p className={'font-36'}>and finally,</p>
                        <p className={'font-225'}>tech.</p>
                        <p className={'font-24'}>In my personal journey, I already worked with some techonologies, and
                            here they are:</p>
                    </div>
                    <div className={'tech-web-list'}>
                        <div className={'tech-tag-item'}>
                            <img src={tagweb} alt={'tagweb'}/>
                        </div>
                        <div className={'tech-line'}>
                            <div className={'tech-web-item'}>
                                <img src={html} alt={'html'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>HTML</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                            <div className={'tech-web-item'}>
                                <img src={css} alt={'css'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>CSS</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                        </div>
                        <div className={'tech-line'}>
                            <div className={'tech-web-item'}>
                                <img src={js} alt={'js'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>JavaScript</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                            <div className={'tech-web-item'}>
                                <img src={typescript} alt={'ts'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>TypeScript</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                        </div>
                        <div className={'tech-tag-item'}>
                            <img src={tagframeworks} alt={'tagframeworks'}/>
                        </div>
                        <div className={'tech-line'}>
                            <div className={'tech-web-item'}>
                                <img src={node} alt={'node'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>Node.js</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                            <div className={'tech-web-item'}>
                                <img src={next} alt={'next'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>Next.js</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                        </div>
                        <div className={'tech-tag-item'}>
                            <img src={taglibraries} alt={'taglib'}/>
                        </div>
                        <div className={'tech-line'}>
                            <div className={'tech-web-item'}>
                                <img src={react} alt={'react'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>React</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                            <div className={'tech-web-item'}>
                                <img src={tailwind} alt={'tailwind'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>TailwindCSS</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                        </div>
                        <div className={'tech-tag-item'}>
                            <img src={tagdatabases} alt={'taglib'}/>
                        </div>
                        <div className={'tech-line'}>
                            <div className={'tech-web-item'}>
                                <img src={mysql} alt={'react'} className={'mysql'}/>
                                <div className={'tech-web-item-text'}>
                                    <p className={'font-28 roboto-serif'}>MySQL</p>
                                    <p className={'font-22 roboto-serif text-gray-tech'}>+1 year experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'tech-image'}>
                    <img src={techimage} alt={'tech-image'}/>
                </div>
            </div>
        </div>
    );
}

export default Tech;