import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './NameHeader.css';

export default function NameHeader( {routePath} ) {

    const [headerPosition, setHeaderPosition] = useState('headerCentered');
    const [movement, setMovement] = useState('');
    const [size, setSize] = useState('');
    const [visibility, setVisibility] = useState('');

    useEffect(() => {
        if (routePath === '/' && routePath.length < 2) {
            setHeaderPosition('headerCentered')
            if (movement === 'move-top-left') {
                setMovement('move-to-centre');
                setSize('size-up');
                setVisibility('fade-in');
            }
        } else {
            setHeaderPosition('headerTopLeft')
            setMovement('move-top-left');
            setSize('size-down');
            setVisibility('fade-out');
        };
    }, [routePath, movement]);

  return (
    <div id='name-header' className={`${headerPosition} ${movement}`}>
        <h1 className={`${size}`}>Daniel Stewardson</h1>
        <div id='welcome-message' className={`${visibility}`}>
            <p>Front-end web developer</p>
            <div id='call-to-action-buttons'>
                <Link to='/Projects'>&#x2192; See my projects</Link>
                <Link to='/Contact'>&#x2192; Contact me</Link>
            </div>
        </div>
    </div>
  )
}
