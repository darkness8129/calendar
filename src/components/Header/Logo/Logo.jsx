import React from 'react';
import './Logo.scss';
import logo from '../../../images/logo.jpg';

const Logo = () => {
    return (
        <a href='https://werdevs.studio/'>
            <img src={logo} alt='logo' className='logo' />
        </a>
    );
};

export default Logo;
