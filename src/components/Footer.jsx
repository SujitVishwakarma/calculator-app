import React from 'react';
import logo from './profile logo.png'
const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-18 bg-gray-800 text-white fixed bottom-0">
      <img src={logo} alt="Logo" className="h-10 mb-2 mr-3" />
      <p className="text-center">© 2024 Sujit Vishwakarma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
