import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import MouseImageTrail from './components/MouseImageTrail';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { HERO_IMAGES, IMAGES, PROFILE_DATA, PORTFOLIO_ITEMS, LOGO_URL } from './constants';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 로딩 중에는 스크롤 방지
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  useEffect(() => {
    const imageUrls = [
      ...HERO_IMAGES,
      ...IMAGES,
      PROFILE_DATA.profileImage,
      LOGO_URL,
      ...PORTFOLIO_ITEMS.map(item => item.image)
    ];

    // 중복 제거
    const uniqueUrls = Array.from(new Set(imageUrls));
    
    let loadedCount = 0;
    const total = uniqueUrls.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.min((loadedCount / total) * 100, 100);
      setProgress(newProgress);
      
      if (loadedCount === total) {
        // 100%를 보여주기 위해 잠시 대기
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    if (total === 0) {
        setIsLoading(false);
        return;
    }

    uniqueUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = updateProgress;
      img.onerror = updateProgress; // 에러가 나도 진행
    });
    
    // 타임아웃 설정 (이미지 로딩이 너무 오래 걸리거나 실패할 경우 강제 실행)
    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-[#F1B821] min-h-screen text-black selection:bg-black selection:text-[#F1B821]">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen progress={progress} key="loader" />}
      </AnimatePresence>

      <div className={isLoading ? 'fixed inset-0 overflow-hidden pointer-events-none opacity-0' : ''}>
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
    </div>
  );
}

export default App;