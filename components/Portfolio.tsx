import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
    const handleProjectClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <section id="work" className="relative w-full py-24 bg-black z-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-800 pb-6"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white font-['Manrope']">HISTORY</h2>
                    <span className="text-gray-500 font-['Manrope'] text-sm md:text-base mt-4 md:mt-0">
                        SELECTED WORKS (2022-2024)
                    </span>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {PORTFOLIO_ITEMS.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="group cursor-pointer relative"
                            onClick={() => handleProjectClick(project.videoUrl)}
                        >
                            {/* Large Image Container */}
                            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-8 border border-zinc-800">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                
                                {/* Hover Play Button Overlay */}
                                {project.videoUrl && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full p-6 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <PlayCircle className="w-12 h-12 md:w-16 md:h-16 fill-white/20" />
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                     <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                        <ArrowUpRight className="w-6 h-6" />
                                     </div>
                                </div>
                            </div>

                            {/* Content Below Image */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 px-2">
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl md:text-5xl font-bold text-white font-['Manrope'] mb-4 leading-tight group-hover:text-[#00A651] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg md:text-xl font-['Noto_Sans_KR'] font-light">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="md:w-1/3 md:text-right flex md:flex-col items-center md:items-end gap-3 text-[#00A651] font-mono">
                                    <span className="text-sm md:text-lg border border-[#00A651] px-3 py-1 rounded-full">{project.year}</span>
                                    <span className="text-sm md:text-lg font-bold">{project.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;