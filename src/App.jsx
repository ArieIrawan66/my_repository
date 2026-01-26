import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentBg, setCurrentBg] = useState(home1Bg);

  const sections = [
    { id: 'home', Component: Home, bg: home1Bg },
    { id: 'skills', Component: Skills, bg: home2Bg },
    { id: 'portfolio', Component: Portfolio, bg: home3Bg },
    { id: 'about', Component: About, bg: home4Bg },
    { id: 'contact', Component: Contact, bg: home5Bg },
  ];

  return (

    <div className="flex flex-col min-h-screen relative text-white bg-black">
      {/* Background Layer with Cross-Fade */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${currentBg})` }}
          />
        </AnimatePresence>
        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content wrapper with z-index to sit above overlay */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {sections.map(({ id, Component, bg }) => (
            <motion.div
              key={id}
              id={id}
              onViewportEnter={() => setCurrentBg(bg)}
              viewport={{ amount: 0.3, margin: "-100px" }} // Trigger when 30% visible
              className="w-full"
            >
              <Component />
            </motion.div>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
