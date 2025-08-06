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
import MernNoteApp from "./components/projects/MernNoteApp.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme ? theme === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-[#7794c7] text-custom-yellow-2 dark:bg-[#081A3A] dark:text-[#D3B60A] relative`}>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <RainDots count={40} />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
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