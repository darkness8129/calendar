import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';

const navLinksItems = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/about',
        title: 'About',
    },
];

const Nav = ({ isOpen, toggleIsOpen }) => {
    const navLinks = navLinksItems.map((navLink) => {
        return (
            <li className='nav-item'>
                <NavLink
                    exact
                    to={navLink.path}
                    className='nav-link'
                    activeClassName='nav-link_active'
                    onClick={toggleIsOpen}
                >
                    {navLink.title}
                </NavLink>
            </li>
        );
    });

    return (
        <nav className='navbar navbar-expand-sm'>
            <NavBtn isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <div
                className={`collapse navbar-collapse ${isOpen ? ' show' : ''}`}
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>{navLinks}</ul>
            </div>
        </nav>
    );
};

export default Nav;
