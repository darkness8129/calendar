import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img src='/images/logo.jpg' alt='' className='logo' />
            <nav className='nav'>
                <NavLink exact to='/' className='nav-item'>
                    Home
                </NavLink>
                <NavLink to='/about' className='nav-item'>
                    About
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
