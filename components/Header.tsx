import React from 'react';
import { Menu, Instagram, Youtube, FileText } from 'lucide-react'; // FileText used for Blog icon
import { LOGO_URL, BLOG_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-black">
      <div className="font-bold text-xl tracking-tighter uppercase font-['Manrope']">
        <img src={LOGO_URL} alt="MODOOMC" className="h-16 md:h-24 w-auto object-contain" />
      </div>
      
      {/* Social Icons Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <a 
            href={BLOG_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-[#FFD600] transition-colors"
            title="Naver Blog"
        >
            <FileText className="w-5 h-5" />
        </a>
        <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-[#FFD600] transition-colors"
            title="Instagram"
        >
            <Instagram className="w-5 h-5" />
        </a>
        <a 
            href={YOUTUBE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-[#FFD600] transition-colors"
            title="Youtube"
        >
            <Youtube className="w-5 h-5" />
        </a>
      </nav>

      {/* Mobile Menu Button (Optional: functionality could be expanded for mobile nav) */}
      <button className="md:hidden text-black border border-black p-2 rounded-full">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;