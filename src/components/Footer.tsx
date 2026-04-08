import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Akhil Chiluvari. Built with Curiosity</span>
            <span>and lots of coffee.</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed for impact, coded with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;