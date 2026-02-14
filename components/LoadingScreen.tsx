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
            <div className="flex flex-col items-center relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-black font-['Manrope'] mb-8 tabular-nums"
                >
                    {Math.round(progress)}%
                </motion.div>
                
                <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-[#F1B821]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase font-['Noto_Sans_KR']"
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;