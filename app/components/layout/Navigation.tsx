import React, { useState } from 'react';
import { Link } from '@remix-run/react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[--color-red] p-4 text-[--color-white]">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Main Menu</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.293 19.707a1 1 0 01-1.414 1.414L12 13.414l-4.879 7.707a1 1 0 01-1.414-1.414L10.586 12 2.879 4.293a1 1 0 011.414-1.414L12 10.586l7.707-7.707a1 1 0 011.414 1.414L13.414 12l4.879 7.707z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5zM3 11a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 17a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/dashboard" className="hover:underline">Sample Dashboard</Link></li>
          <li><Link to="/report" className="hover:underline">Sample Report</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
