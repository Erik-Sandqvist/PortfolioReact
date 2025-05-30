import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
        } bg- #081A3A text-#D3B60A-100`}>
        
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        <Home />
      </div>
    </>
  );
}

export default App;
