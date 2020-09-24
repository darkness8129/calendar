import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';
import classNames from 'classnames';

const navLinksItems = [
    {
        path: '/',
        title: 'Home',
        id: 1,
    },
    {
        path: '/about',
        title: 'About',
        id: 2,
    },
];

const Nav = ({ isOpen, toggleIsOpen }) => {
    const navLinks = navLinksItems.map((navLink) => {
        return (
            <li className='nav-item' key={navLink.id}>
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
                className={classNames('collapse', 'navbar-collapse', {
                    show: isOpen,
                })}
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>{navLinks}</ul>
            </div>
        </nav>
    );
};

export default Nav;
