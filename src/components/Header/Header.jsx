import React, { useState } from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <header className={`header ${isOpen ? 'header_active' : ''}`}>
            <Logo />
            <Nav isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </header>
    );
};

export default Header;
