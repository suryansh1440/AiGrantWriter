import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGavel } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <FaGavel 
              className="text-3xl text-[#FF6B00] transition-transform duration-300 group-hover:rotate-12"
            />
            <span 
              className="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FFA366] text-transparent bg-clip-text"
            >
              GrantWriter
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-base font-medium transition-all duration-200 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-[#FF6B00] font-semibold'
                    : 'text-gray-600 hover:text-[#FF6B00]'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00]"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-base font-medium text-gray-600 hover:text-[#FF6B00] transition-all duration-200 hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#FF6B00] text-white hover:bg-[#FF8533] px-6 py-2.5 rounded-lg text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
