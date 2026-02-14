import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const Profile: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-40 bg-[#F1B821] z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative group order-2 md:order-1">
           <div className="absolute -inset-2 bg-black rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
           <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg border-2 border-black">
             <img 
               src={PROFILE_DATA.profileImage}
               alt="MC Kim Doyun" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
           </div>
        </div>

        {/* Text Section */}
        <div className="text-black order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 font-['Manrope'] tracking-tight">WHO I AM</h2>
            <div className="h-2 w-20 bg-black mb-8"></div>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 text-gray-900 font-['Noto_Sans_KR'] whitespace-pre-line">
              {PROFILE_DATA.description}
            </p>

            <div className="flex flex-col gap-6 mb-12 font-['Manrope'] border-l-4 border-black pl-6">
               <div>
                  <h3 className="text-gray-700 text-sm font-bold tracking-widest mb-1">NAME</h3>
                  <p className="text-3xl font-black">{PROFILE_DATA.name}</p>
               </div>
               <div>
                  <h3 className="text-gray-700 text-sm font-bold tracking-widest mb-1">ROLE</h3>
                  <p className="text-xl font-bold text-gray-800">{PROFILE_DATA.role}</p>
               </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-black tracking-widest text-black border-b-2 border-black pb-2 mb-4">STRENGTHS</h3>
                <ul className="grid grid-cols-1 gap-3">
                    {PROFILE_DATA.strength.map((s, i) => (
                        <li key={i} className="flex items-center text-gray-900 font-['Noto_Sans_KR'] text-lg font-medium">
                            <span className="w-2 h-2 bg-black rounded-full mr-4"></span>
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