import React from 'react';
import './NavBtn.scss';

const NavBtn = ({ isOpen, toggleIsOpen }) => {
    return (
        <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={toggleIsOpen}
        >
            <span
                className={`toggler-icon ${
                    isOpen ? 'toggler-icon_active' : ''
                }`}
            ></span>
        </button>
    );
};

export default NavBtn;
