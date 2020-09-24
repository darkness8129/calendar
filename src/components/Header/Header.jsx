import React, { useState } from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import classNames from 'classnames';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <header
            className={classNames('header', {
                header_active: isOpen,
            })}
        >
            <Logo />
            <Nav isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </header>
    );
};

export default Header;
