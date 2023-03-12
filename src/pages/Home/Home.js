import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div id='home'>
        <header id='welcome-message'>
            <h1>Daniel Stewardson</h1>
            <p>Front-end web developer</p>
            <div id='call-to-action-buttons'>
                <Link to='/Projects'>&#x2192; See my projects</Link>
                <Link to='/Contact'>&#x2192; Contact me</Link>
            </div>
        </header>
    </div>
  )
}
