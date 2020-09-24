import React from 'react';
import './NavBtn.scss';
import classNames from 'classnames';

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
                className={classNames('toggler-icon', {
                    'toggler-icon_active': isOpen,
                })}
            ></span>
        </button>
    );
};

export default NavBtn;
