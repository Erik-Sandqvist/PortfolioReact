import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Contact } from './components/sections/Contact';
import About from './components/sections/About'
import Projects from './components/sections/Projects.jsx';
import { RainDots } from './components/RainDots';
import MernNoteApp from './components/projects/MernNoteApp.jsx';
import Vinyl4u from './components/projects/vinyl4u.jsx';
import { Footer } from './components/Footer.jsx';
import { Illusion } from './components/sections/Illusion'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'luxury'; // default DaisyUI theme
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-base-100 text-base-content relative`}
      >
        {/* <RainDots count={40} /> */}
        <RainDots count={60} repelRadius={150} />
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            setTheme={setTheme}
          />
          {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/mern-note-app" element={<MernNoteApp />} />
            <Route path="/projects/Vinyl4u" element={<Vinyl4u />} />
            <Route path="/illusion" element={<Illusion />} />
          </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
