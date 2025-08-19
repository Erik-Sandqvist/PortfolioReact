import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Contact } from './components/sections/Contact';
import About from './components/sections/About';
import Projects from './components/sections/Projects.jsx';
import { RainDots } from './components/RainDots';
import MernNoteApp from './components/projects/MernNoteApp.jsx';
import Vinyl4u from './components/projects/vinyl4u.jsx';
import WixPortfolio from './components/projects/WixPortfolio.jsx';
import { Footer } from './components/Footer.jsx';
import { Illusion } from './components/sections/Illusion';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRain, setShowRain] = useState(() => localStorage.getItem('showRain') === 'true');

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'luxury');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('showRain', showRain);
  }, [showRain]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-base-100 text-base-content relative`}
      >
        {showRain && <RainDots count={80} repelRadius={150} />}

        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          showRain={showRain}
          setShowRain={setShowRain}
          theme={theme}
          setTheme={setTheme}
        />

        {menuOpen && (
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            showRain={showRain}
            setShowRain={setShowRain}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/mern-note-app" element={<MernNoteApp />} />
          <Route path="/projects/Vinyl4u" element={<Vinyl4u />} />
          <Route path="/projects/wix" element={<WixPortfolio />} />
          <Route path="/illusion" element={<Illusion />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
