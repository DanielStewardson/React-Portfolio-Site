import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar( { routePath } ) {

    const [showMenu, setShowMenu] = useState('');
    const [showMenuButton, setShowMenuButton] = useState('');

    useEffect(() => {
        if (routePath === '/' && routePath.length < 2) {
            setShowMenu('hide-menu');
            setShowMenuButton('show-menu');
        } else {
            setShowMenu('show-menu');
            setShowMenuButton('hide-menu');
        };
    }, [routePath]);

    const navButtonSpin = () => {
        let menuButt = document.querySelector('.menuButton');
        if (menuButt.classList.contains('menu-spin')) {
            menuButt.classList.remove('menu-spin');
            setShowMenu('hide-menu');
        } else {
            menuButt.classList.add('menu-spin');
            setShowMenu('show-menu');
        }
    };

    const fullNavBar =    
        <div className={`navbar ${showMenu}`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Projects'>Projects</NavLink>
            <NavLink to='/About'>Info</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </div>

    const menuButton = 
        <div className={`menuButton ${showMenuButton}`} onClick={navButtonSpin}>
            <span></span>
        </div>

  return (
    <>
        {showMenuButton && menuButton}
        {showMenu && fullNavBar}
    </>
  )
}
