import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <a href='#'>
                <img src='/images/logo.jpg' alt='' className='logo' />
            </a>
            <nav className='navbar navbar-expand-sm'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink
                                exact
                                to='/'
                                className='nav-item'
                                activeClassName='nav-item_active'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/about'
                                className='nav-item'
                                activeClassName='nav-item_active'
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
