import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xl ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            H
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            HirePilot
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? 'text-secondary' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'primary'} className={!isScrolled ? "bg-accent text-primary" : ""}>
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-secondary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-secondary' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl text-white font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started Free
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;