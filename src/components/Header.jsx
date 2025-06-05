import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="bg-blue-900 text-neutral-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="font-viga text-2xl md:text-3xl font-bold hover:text-blue-200 transition-colors">
            Atlas University
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors duration-200 font-medium">
              Courses
            </Link>
            <Link to="/news" className="hover:text-blue-200 transition-colors duration-200 font-medium">
              News
            </Link>
            <Link 
              to="/enroll" 
              className="bg-neutral-50 text-blue-900 px-4 py-2 font-semibold rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="inline md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral-50 hover:text-blue-200 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // X icon for close
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                </svg>
              ) : (
                // Hamburger icon for open
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-neutral-50 hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-neutral-50 hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="block px-3 py-2 text-base font-medium text-neutral-50 hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
              <Link 
                to="/news" 
                className="block px-3 py-2 text-base font-medium text-neutral-50 hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                News
              </Link>
              <Link 
                to="/enroll" 
                className="block mx-3 mt-2 bg-neutral-50 text-blue-900 px-4 py-2 font-semibold rounded-lg hover:bg-blue-100 transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

