import React from 'react';
import { Menu, Instagram, Youtube, FileText } from 'lucide-react'; // FileText used for Blog icon
import { LOGO_URL, BLOG_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

const Header: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-black">
      <div className="font-bold text-xl tracking-tighter uppercase font-['Manrope']">
        <img src={LOGO_URL} alt="MODOOMC" className="h-20 md:h-32 w-auto object-contain" />
      </div>
      
      {/* Social Icons Navigation & Contact Button */}
      <nav className="hidden md:flex items-center gap-3">
        {/* Blog Link */}
        <a 
            href={BLOG_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center h-10 rounded-full border border-black hover:bg-black hover:text-[#F1B821] transition-all duration-300 overflow-hidden w-10 hover:w-auto"
        >
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
            </div>
            <span className="whitespace-nowrap font-bold text-sm pr-0 group-hover:pr-4 max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                블로그 바로가기
            </span>
        </a>

        {/* Instagram Link */}
        <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center h-10 rounded-full border border-black hover:bg-black hover:text-[#F1B821] transition-all duration-300 overflow-hidden w-10 hover:w-auto"
        >
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" />
            </div>
            <span className="whitespace-nowrap font-bold text-sm pr-0 group-hover:pr-4 max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                인스타그램 바로가기
            </span>
        </a>

        {/* Youtube Link */}
        <a 
            href={YOUTUBE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center h-10 rounded-full border border-black hover:bg-black hover:text-[#F1B821] transition-all duration-300 overflow-hidden w-10 hover:w-auto"
        >
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Youtube className="w-5 h-5" />
            </div>
            <span className="whitespace-nowrap font-bold text-sm pr-0 group-hover:pr-4 max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                유튜브 바로가기
            </span>
        </a>

        <div className="w-[1px] h-6 bg-black/20 mx-2"></div>

        {/* Contact Button */}
        <button 
            onClick={scrollToContact}
            className="px-6 py-2 bg-black text-[#F1B821] rounded-full font-bold text-sm hover:bg-[#F1B821] hover:text-black border border-black transition-colors duration-300"
        >
            문의하기
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-black border border-black p-2 rounded-full">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;