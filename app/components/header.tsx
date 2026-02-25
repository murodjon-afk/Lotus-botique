'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // Добавили Variants
import Link from 'next/link';

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Collection", href: "/collection" },
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
    { name: "Showcase", href: "#" },
  ];

  // ИСПРАВЛЕННЫЙ БЛОК: Добавлена типизация Variants
  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      scale: 0.95, 
      y: -20 
    },
    opened: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.23, 1, 0.32, 1] // Теперь TS поймет, что это валидный ease
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -20, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100] 
          flex items-center justify-between px-6 md:px-8 py-4 mt-6
          bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full 
          transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        <Link 
          href="/" 
          className="text-white font-black text-xl tracking-tighter cursor-pointer 
                     hover:tracking-[0.3em] transition-all duration-700 select-none z-[101]"
        >
          LOTUS
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative text-white/40 text-[10px] uppercase tracking-[0.4em] 
                         hover:text-white transition-all group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white 
                               transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-white/50 text-[10px] uppercase tracking-widest hover:text-white transition-colors">
            Login
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 md:hidden z-[101]"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white transition-all duration-300" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -0.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white transition-all duration-300" 
            />
          </button>

          <button className="hidden md:block px-6 py-2 bg-white text-black text-[10px] uppercase font-bold rounded-full hover:bg-zinc-200 transition-all">
            Sign Up
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="exit"
            variants={menuVariants} // Ошибка здесь исчезнет
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl font-serif italic tracking-tighter hover:text-zinc-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;