import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import UnicornLogo from '../images/unicorn.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
    >
      <div className="container nav-container flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="nav-logo flex items-center" aria-label="Home">
            <motion.img 
              src={UnicornLogo}
              alt="Magic Unicorn Logo" 
              className="logo-image w-10 h-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </Link>
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} aria-label="Navigation links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} aria-label="Home">
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} aria-label="About">
            About
          </Link>
          <Link to="/features" className={location.pathname === '/features' ? 'active' : ''} aria-label="Features">
            Features
          </Link>
          <Link to="/specs" className={location.pathname === '/specs' ? 'active' : ''} aria-label="Specs">
            Specs
          </Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} aria-label="Services">
            Services
          </Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} aria-label="Portfolio">
            Portfolio
          </Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} aria-label="Blog">
            Blog
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} aria-label="Contact">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
