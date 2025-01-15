import React from 'react';
import logo from '../../../public/befree-logo.avif';

const Header: React.FC = () => {
  return (
    <header className="bg-[--color-maroon] text-white p-4">
      <div className="container mx-auto flex items-center">
        <img src={logo} alt="#BeFree Logo" className="h-12 mr-4" />
        <h1 className="text-xl font-bold">#BeFree Youth Campus</h1>
      </div>
    </header>
  );
};

export default Header;
