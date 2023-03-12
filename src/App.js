import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import ThemeButton from './components/ThemeButton/ThemeButton';

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className={`App ${theme}`}>
      <div id='content-box'>
        <div>
          <Navbar />
          <ThemeButton onClick={toggleTheme} theme={theme}/>
        </div>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='projects' element={ <Projects/> } />
          <Route path='about' element={ <About/> } />
          <Route path='contact' element={ <Contact/> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
