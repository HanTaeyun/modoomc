import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const Profile: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-40 bg-zinc-950 z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative group order-2 md:order-1">
           <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
           <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
             <img 
               src={PROFILE_DATA.profileImage}
               alt="MC Kim Doyun" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
           </div>
        </div>

        {/* Text Section */}
        <div className="text-white order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-['Manrope']">WHO I AM</h2>
            <div className="h-px w-20 bg-[#00A651] mb-8"></div>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-gray-300 font-['Noto_Sans_KR'] whitespace-pre-line">
              {PROFILE_DATA.description}
            </p>

            <div className="flex flex-col gap-6 mb-12 font-['Manrope'] border-l-2 border-zinc-800 pl-6">
               <div>
                  <h3 className="text-gray-500 text-sm tracking-widest mb-1">NAME</h3>
                  <p className="text-3xl font-bold">{PROFILE_DATA.name}</p>
               </div>
               <div>
                  <h3 className="text-gray-500 text-sm tracking-widest mb-1">ROLE</h3>
                  <p className="text-xl font-medium text-[#00A651]">{PROFILE_DATA.role}</p>
               </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest text-[#00A651] border-b border-gray-800 pb-2 mb-4">STRENGTHS</h3>
                <ul className="grid grid-cols-1 gap-3">
                    {PROFILE_DATA.strength.map((s, i) => (
                        <li key={i} className="flex items-center text-gray-400 font-['Noto_Sans_KR'] text-lg">
                            <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-4"></span>
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Profile;