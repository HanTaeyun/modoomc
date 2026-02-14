import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 마우스 움직임 부드럽게 처리
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // 3D 효과를 위한 회전 (각도 증가하여 효과 복원)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-20deg", "20deg"]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const normalizedX = (clientX / innerWidth) - 0.5;
      const normalizedY = (clientY / innerHeight) - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden z-10 px-4">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#FFD600]"></div> {/* Base color */}
        <AnimatePresence mode="wait">
            <motion.div
                key={currentImageIndex}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.5, ease: "easeIn" } }}
                transition={{ duration: 3.5, ease: "easeOut", delay: 1.2 }}
            >
                <img 
                    src={HERO_IMAGES[currentImageIndex]} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover"
                />
                {/* Image Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Typography Content */}
      <div 
        className="relative z-10 w-full max-w-[90vw] md:max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        style={{ perspective: "1000px" }}
      >
        
        {/* Top Subheading */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl font-bold tracking-[0.2em] mb-6 text-white uppercase font-['Noto_Sans_KR']"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        >
          남녀노소 모두가 좋아하는 모두의 MC
        </motion.h2>

        {/* Main Heading */}
        <motion.div
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="flex flex-col items-center leading-none"
        >
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13vw] md:text-[10rem] lg:text-[12rem] font-black tracking-tighter text-white font-['Manrope'] leading-none mb-4 select-none"
                style={{ 
                  textShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transform: "translateZ(50px)" 
                }}
            >
                모두의MC
            </motion.h1>
        </motion.div>

        {/* Bottom Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
            <p className="text-base md:text-xl font-medium text-white/90 font-['Noto_Sans_KR'] whitespace-pre-line leading-relaxed" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            Directed by Kim Doyun
            <br/>
            <span className="text-sm md:text-base opacity-80 mt-2 block font-light">
                당신의 행사를 빛내줄 최고의 선택, 모두의MC입니다.
            </span>
            </p>
            <div className="w-12 h-1 bg-[#FFD600] mx-auto mt-8 shadow-lg"></div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-widest text-white/80 animate-bounce font-bold z-10">
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;