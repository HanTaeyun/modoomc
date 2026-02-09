import React from 'react';
import { Menu } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center text-white">
      <div className="font-bold text-xl tracking-tighter uppercase font-['Manrope'] text-[#00A651]">
        <img src={LOGO_URL} alt="MODOOMC" className="h-16 md:h-24 w-auto object-contain" />
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white">
        <a href="#about" className="hover:text-[#00A651] transition-colors uppercase">Profile</a>
        <a href="#work" className="hover:text-[#00A651] transition-colors uppercase">History</a>
        <a href="#contact" className="hover:text-[#00A651] transition-colors uppercase">Contact</a>
      </nav>
      <button className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;