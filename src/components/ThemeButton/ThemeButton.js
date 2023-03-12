import React from 'react';
import './ThemeButton.css';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png';

export default function Theme( {onClick, theme} ) {
  return (
    <div id='theme-button' onClick={onClick}>
      {
      theme === 'dark' 
      ? 
      <img id='theme-icon-sun' src={sun} alt='theme change button'></img> :
      <img id='theme-icon-moon' src={moon} alt='theme change button'></img>
      }
    </div>
  )
}
