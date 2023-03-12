import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import ThemeButton from './components/ThemeButton/ThemeButton';
import NameHeader from './components/NameHeader/NameHeader';

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const {pathname} = useLocation();
  const [routePath, setRoutepath] = useState(null);
  useEffect(() => {
    setRoutepath(pathname);
  }, [pathname]);

  return (
    <div className={`App ${theme}`}>
      <div id='content-box'>
        <div>
          <Navbar routePath={routePath} />
          <ThemeButton onClick={toggleTheme} theme={theme}/>
          <NameHeader routePath={routePath} />
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
