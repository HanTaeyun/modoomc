import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden z-10 px-4">
      <div className="text-center z-10 mix-blend-difference">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl font-light tracking-[0.5em] mb-4 text-gray-300 uppercase font-['Noto_Sans_KR']"
        >
          Creative Event Group
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter text-white font-['Manrope'] leading-none mb-2"
        >
          MODOOMC
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-sm md:text-lg font-light max-w-lg mx-auto text-gray-400 font-['Noto_Sans_KR'] whitespace-pre-line"
        >
          Directed by Kim Doyun
          <br/>
          <span className="text-xs md:text-sm opacity-70 mt-2 block">
            당신의 행사를 빛내줄 최고의 선택, 모두의MC입니다.
          </span>
        </motion.p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-widest text-gray-500 animate-bounce">
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;