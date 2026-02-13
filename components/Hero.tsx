import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 마우스 움직임 부드럽게 처리
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // 회전 각도 계산 (마우스 위치에 따라)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // 화면 중앙을 0,0으로 기준으로 -0.5 ~ 0.5 정규화
      const normalizedX = (clientX / innerWidth) - 0.5;
      const normalizedY = (clientY / innerHeight) - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden z-10 px-4 perspective-1000">
      <div 
        className="text-center z-10"
        style={{ perspective: "1000px" }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl font-bold tracking-[0.2em] mb-4 text-black uppercase font-['Noto_Sans_KR']"
        >
          남녀노소 모두가 좋아하는 모두의 MC
        </motion.h2>
        
        <motion.div
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter text-black font-['Manrope'] leading-none mb-2 select-none"
          >
            모두의MC
          </motion.h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-sm md:text-lg font-medium max-w-lg mx-auto text-gray-800 font-['Noto_Sans_KR'] whitespace-pre-line"
        >
          Directed by Kim Doyun
          <br/>
          <span className="text-xs md:text-sm opacity-70 mt-2 block">
            당신의 행사를 빛내줄 최고의 선택, 모두의MC입니다.
          </span>
        </motion.p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-widest text-black animate-bounce font-bold">
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;