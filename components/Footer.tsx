import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-[#FFD600] text-center text-black text-sm border-t border-black/10 z-20 relative">
        <p className="font-bold">&copy; {new Date().getFullYear()} 모두의MC. All Rights Reserved.</p>
        <p className="mt-2 text-xs opacity-70">Designed by 모두의MC.</p>
    </footer>
  );
};

export default Footer;