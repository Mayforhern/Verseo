import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const MobileMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className={cn("block sm:hidden", className)}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-white focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-full h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-full h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-full h-0.5 bg-white"
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-64 h-full bg-[#0D0D10] border-l border-gray-800 z-40 p-6"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block text-lg text-gray-300 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-6 border-t border-gray-800">
                  <a
                    href="/login"
                    className="block w-full py-3 text-center text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu; 