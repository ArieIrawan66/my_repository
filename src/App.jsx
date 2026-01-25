import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

// Import all background images
import home1Bg from './assets/home1-bg.jpg';
import home2Bg from './assets/home2-bg.jpg';
import home3Bg from './assets/home3-bg.jpg';
import home4Bg from './assets/home4-bg.jpg';
import home5Bg from './assets/home5-bg.jpg';

function App() {
  const location = useLocation();
  const [currentBg, setCurrentBg] = useState(home1Bg);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setCurrentBg(home1Bg);
        break;
      case '/skills':
        setCurrentBg(home2Bg);
        break;
      case '/portfolio':
        setCurrentBg(home3Bg);
        break;
      case '/about':
        setCurrentBg(home4Bg);
        break;
      case '/contact':
        setCurrentBg(home5Bg);
        break;
      default:
        setCurrentBg(home1Bg);
    }
  }, [location.pathname]);

  return (
    <div
      className={`flex flex-col min-h-screen relative text-white transition-all duration-700 ease-in-out ${location.pathname === '/' ? 'md:bg-center' : 'bg-center'
        }`}
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition:
          location.pathname === '/'
            ? '85% center'   // smartphone
            : 'center'
      }}
    >
      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content wrapper with z-index to sit above overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
