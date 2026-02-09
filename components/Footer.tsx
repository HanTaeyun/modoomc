import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-black text-center text-gray-600 text-sm border-t border-gray-900 z-20 relative">
        <p>&copy; {new Date().getFullYear()} MODU MC. All Rights Reserved.</p>
        <p className="mt-2 text-xs">Designed with Inspiration from Haus & Whales.</p>
    </footer>
  );
};

export default Footer;