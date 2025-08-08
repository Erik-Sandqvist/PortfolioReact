import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Contact } from './components/sections/Contact';
import { RainDots } from './components/RainDots';
import MernNoteApp from './components/projects/MernNoteApp.jsx';

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
        <RainDots count={40} />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            setTheme={setTheme}
          />
          {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/mern-note-app" element={<MernNoteApp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
