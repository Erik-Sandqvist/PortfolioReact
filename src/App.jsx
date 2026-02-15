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
import LightRays from './components/LightRays';
import MernNoteApp from './components/projects/MernNoteApp.jsx';
import Stationkoll from './components/projects/Stationkoll';
import Vinyl4u from './components/projects/vinyl4u.jsx';
import WixPortfolio from './components/projects/WixPortfolio.jsx';
import Keylinx from './components/projects/Keylinx.jsx';
import Fandf from './components/projects/fandf.jsx';
import Store from './components/projects/store.jsx';
import Patches from './components/projects/patches';
import Covers from './components/projects/covers';
import Nocco from './components/projects/nocco.jsx';
import Ro from './components/projects/ro';
import { Footer } from './components/Footer.jsx';
import { Illusion } from './components/sections/Illusion';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [showRain, setShowRain] = useState(() => {
    const saved = sessionStorage.getItem('userRainPreference');
    return saved !== null ? JSON.parse(saved) : false;
  });
  
  useEffect(() => {
    sessionStorage.setItem('userRainPreference', JSON.stringify(showRain));
  }, [showRain]);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'luxury');
  const [secondaryColor, setSecondaryColor] = useState('#f7d00c');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Get secondary color from CSS variable
    const root = getComputedStyle(document.documentElement);
    const secondaryHSL = root.getPropertyValue('--s').trim();
    
    if (secondaryHSL) {
      const [h, s, l] = secondaryHSL.split(' ').map(v => parseFloat(v));
      setSecondaryColor(`hsl(${h}, ${s}%, ${l}%)`);
    }
  }, [theme]);

  if (!isLoaded) {
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  return (
    <>
      <ScrollToTop smooth />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-100/10 to-secondary text-base-content relative">
        {/* Global Light Rays Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <LightRays
            key={theme}
            raysOrigin="top-center"
            raysColor={secondaryColor}
            raysSpeed={1.5}
            lightSpread={1.2}
            rayLength={2.5}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0.05}
            distortion={0.08}
            saturation={0.9}
          />
        </div>

        {showRain && (
          <RainDots
            color="secondary"
            count={80}
            repelRadius={150}
            className="-z-20"
          />
        )}

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
          <Route path="/projects/stationkoll" element={<Stationkoll />} />
          <Route path="/projects/vinyl4u" element={<Vinyl4u />} />
          <Route path="/projects/wix" element={<WixPortfolio />} />
          <Route path="/projects/keylinx" element={<Keylinx />} />
          <Route path="/projects/fandf" element={<Fandf />} />
          <Route path="/projects/store" element={<Store />} />
          <Route path="/illusion" element={<Illusion />} />
          <Route path="/projects/patches" element={<Patches />} />
          <Route path="/projects/covers" element={<Covers />} />
          <Route path="/projects/nocco" element={<Nocco />} />
          <Route path="/projects/ro" element={<Ro />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
