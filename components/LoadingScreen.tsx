import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
    return (
        <motion.div 
            className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center text-[#F1B821]"
            initial={{ y: 0 }}
            exit={{ 
                y: "-100%", 
                transition: { 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                } 
            }}
        >
            <div className="flex flex-col items-center justify-center w-full px-4">
                {/* 1. Slogan */}
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/60 font-bold font-['Noto_Sans_KR'] text-sm md:text-lg tracking-wider mb-2 md:mb-4 text-center"
                >
                    남녀노소 모두가 좋아하는 모두의 MC
                </motion.p>
                
                {/* 2. Main Title with Fill Effect */}
                <div className="relative mb-6 md:mb-8">
                    {/* Background Text (Empty/Dimmed) */}
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-['Manrope'] text-zinc-800 tracking-tighter whitespace-nowrap">
                        모두의 MC
                    </h1>

                    {/* Foreground Text (Filled) - Masked by Height */}
                    <motion.div 
                        className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end justify-center"
                        style={{ height: `${progress}%` }}
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-['Manrope'] text-[#F1B821] tracking-tighter whitespace-nowrap">
                            모두의 MC
                        </h1>
                    </motion.div>
                </div>
                
                {/* 3. Percentage */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl md:text-2xl font-bold font-['Manrope'] tabular-nums text-white"
                >
                    {Math.round(progress)}%
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;