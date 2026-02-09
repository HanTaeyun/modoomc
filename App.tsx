import React from 'react';
import Header from './components/Header';
import MouseImageTrail from './components/MouseImageTrail';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';``
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <Header />
      
      <MouseImageTrail renderImageBuffer={50} rotationRange={20}>
        <main className="relative z-10">
            <Hero />
            <Profile />
            <Portfolio />
            <Contact />
        </main>
      </MouseImageTrail>
      
      <Footer />
    </div>
  );
}

export default App;