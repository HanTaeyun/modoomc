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
        <section id="work" className="relative w-full py-24 bg-[#F1B821] z-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 border-b-2 border-black pb-6"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-black font-['Manrope']">HISTORY</h2>
                    <span className="text-gray-800 font-bold font-['Manrope'] text-sm md:text-base mt-4 md:mt-0">
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
                            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    style={{ objectPosition: project.objectPosition || 'center' }}
                                />
                                
                                {/* Hover Play Button Overlay */}
                                {project.videoUrl && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full p-6 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <PlayCircle className="w-12 h-12 md:w-16 md:h-16 fill-white/20" />
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                     <div className="w-12 h-12 bg-black text-[#F1B821] rounded-full flex items-center justify-center shadow-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                        <ArrowUpRight className="w-6 h-6" />
                                     </div>
                                </div>
                            </div>

                            {/* Content Below Image */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 px-2">
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl md:text-5xl font-black text-black font-['Manrope'] mb-4 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-900 text-lg md:text-xl font-['Noto_Sans_KR'] font-medium">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="md:w-1/3 md:text-right flex md:flex-col items-center md:items-end gap-3 text-black font-mono">
                                    <span className="text-sm md:text-lg border-2 border-black px-3 py-1 rounded-full font-bold">{project.year}</span>
                                    <span className="text-sm md:text-lg font-black">{project.category}</span>
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