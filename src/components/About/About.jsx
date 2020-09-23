import React from 'react';
import Title from '../Title/Title';
import AboutText from './AboutText/AboutText';
import './About.scss';

const About = () => {
    return (
        <div className='container'>
            <div className='about'>
                <Title />
                <AboutText />
            </div>
        </div>
    );
};

export default About;
