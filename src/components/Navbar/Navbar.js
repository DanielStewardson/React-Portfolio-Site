import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const {pathname} = useLocation();

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (pathname === '/' && pathname.length < 2) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }, [pathname]);

    console.log(pathname);
    console.log(showMenu);

    const navbar = showMenu ?
    <div  id='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Projects'>Projects</NavLink>
        <NavLink to='/About'>Info</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
    </div>
    :
    <div  id='navbar'>
        Burger
    </div>

  return (
    <>
        {navbar}
    </>
  )
}
