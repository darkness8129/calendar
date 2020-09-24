import React from 'react';
import AboutText from './AboutText/AboutText';
import './About.scss';

const About = () => {
    return (
        <div className='container'>
            <div className='about'>
                <h1 className='title'>Lorem ipsum dolor sit.</h1>
                <AboutText />
            </div>
        </div>
    );
};

export default About;
