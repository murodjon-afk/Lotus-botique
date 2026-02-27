'use client'
import Image from "next/image";

import { useState, useEffect  } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
// Импортируем методы NextAuth
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession(); // Получаем данные о сессии
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Collection", href: "/collection" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
        { name: "cart", href: "/cart" },

  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, y: "-100%" },
    opened: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
    exit: { 
      opacity: 0, 
      y: "-100%", 
      transition: { duration: 0.4 } 
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100] 
          flex items-center justify-between px-4 md:px-8 py-3 md:py-4 mt-4 md:mt-6
          bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full 
          transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        {/* LOGO */}
      <Link
  href="/"
  className="relative flex items-center gap-3 text-white font-black text-lg md:text-xl 
             tracking-tighter hover:tracking-[0.2em] transition-all duration-700 
             select-none z-[101] group"
>
  <div className="relative w-10 h-10">
    <Image
      src="/favicon.ico"
      alt="Lotus logo"
      fill
      className="object-contain transition-transform duration-[2.5s] group-hover:scale-110 rounded-full"
    />
  </div>

  LOTUS
</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* AUTH BUTTONS / USER INFO */}
        <div className="flex items-center gap-2 md:gap-4 z-[101]">
          
          {session ? (
            /* Если юзер вошел: Показываем аватарку и кнопку выхода */
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-white text-[9px] uppercase font-bold tracking-widest leading-none">
                  {session.user?.name}
                </span>
                <button 
                  onClick={() => signOut()} 
                  className="text-white/40 text-[8px] uppercase hover:text-white transition-colors"
                >
                  Log out
                </button>
              </div>
              <img 
                src={session.user?.image || ""} 
                alt="Profile" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 object-cover"
              />
            </div>
          ) : (
            /* Если юзер не вошел: Показываем кнопку входа */
            <button 
              onClick={() => signIn("google")}
              className="px-4 md:px-6 py-2 bg-white text-black text-[9px] md:text-[10px] uppercase font-bold rounded-full hover:bg-zinc-200 transition-all active:scale-95"
            >
              Sign Up
            </button>
          )}

          {/* Burger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 md:hidden ml-2 gap-1.5"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1px] bg-white" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -0.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1px] bg-white" 
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="exit"
            variants={menuVariants}
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
                    className="text-white text-3xl font-light tracking-tighter hover:text-zinc-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Доп. кнопка выхода в мобильном меню, если юзер вошел */}
              {session && (
                <button 
                  onClick={() => signOut()}
                  className="mt-4 text-white/50 uppercase text-xs tracking-widest"
                >
                  Log out
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;