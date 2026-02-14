import React, { useState, useEffect, useRef } from 'react';
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
  const targetProgress = useRef(0);

  useEffect(() => {
    // 로딩 중에는 스크롤 방지
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  // 1. 실제 이미지 로딩 체크 로직
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

    if (total === 0) {
        targetProgress.current = 100;
        return;
    }

    const updateLoadedCount = () => {
      loadedCount++;
      // 실제 로딩률을 targetProgress에 업데이트
      targetProgress.current = (loadedCount / total) * 100;
    };

    uniqueUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = updateLoadedCount;
      img.onerror = updateLoadedCount; // 에러가 나도 진행
    });
    
    // 타임아웃 설정 (이미지 로딩이 너무 오래 걸리거나 실패할 경우 강제 실행)
    const timeout = setTimeout(() => {
        targetProgress.current = 100;
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // 2. 부드러운 진행률 애니메이션 로직
  useEffect(() => {
    let animationFrameId: number;

    const animateProgress = () => {
      setProgress((prev) => {
        const target = targetProgress.current;
        
        // 이미 100%라면 유지
        if (prev >= 100) return 100;

        // 목표치까지의 거리
        const diff = target - prev;
        
        // 목표치에 도달했거나 더 클 경우
        if (diff <= 0) return prev;

        // 거리에 따라 속도 조절 (최소 속도 0.5 보장하여 멈추지 않게 함)
        // 43% -> 100%로 갑자기 튈 때 부드럽게 따라잡도록 함
        const step = Math.max(diff * 0.05, 0.5); 
        
        const next = prev + step;
        return next > 100 ? 100 : next;
      });

      if (progress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // 3. 완료 처리
  useEffect(() => {
    if (progress >= 100) {
      // 100%를 보여주기 위해 0.8초 대기 후 로딩 해제
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

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