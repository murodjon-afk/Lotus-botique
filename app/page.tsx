'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import Image from "next/image"
import { Variants } from 'framer-motion';
export default function Home() {
  const rollerText = " • SPRING COLLECTION 2026 • LIMITED EDITION • LOTUS BOUTIQUE • EXCLUSIVE QUALITY ";
  const [loaded, setLoaded] = useState(false);
  const [philosophyInView, setPhilosophyInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const philosophyRef = useRef(null);
const textVariant: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.33, 1, 0.68, 1] // Используем массив Bezier вместо строки для 100% совместимости
    } 
  }
};

// Настройки для блоков (появление снизу вверх)
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ // Явно указываем тип number для аргумента
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.33, 1, 0.68, 1], 
      delay: i * 0.1 
    }
  })
};
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    
 const handleMouseMove = (e: globalThis.MouseEvent) => {
  setMousePos({
    x: (e.clientX / window.innerWidth - 0.5) * 15,
    y: (e.clientY / window.innerHeight - 0.5) * 15,
  });
};
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPhilosophyInView(true); },
      { threshold: 0.2 }
    );

    window.addEventListener("mousemove", handleMouseMove);
    if (philosophyRef.current) observer.observe(philosophyRef.current);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      if (philosophyRef.current) observer.unobserve(philosophyRef.current);
    };
  }, []);

  return (
    <div className="relative w-full bg-black flex flex-col items-center overflow-x-hidden transition-colors duration-1000">
      
      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        
 

        {/* КОНТЕЙНЕР С ВИДЕО (ИНТЕРАКТИВНЫЙ ПАРАЛЛАКС) */}
        <div 
          className={`relative z-10 w-[300px] h-[450px] md:w-[500px] md:h-[700px] transition-all duration-[2000ms] ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >          
          <video
            src="/lotus.mp4"
            autoPlay muted playsInline loop
            className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer" 
          />
          <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/20 shadow-[0_0_100px_rgba(0,0,0,0.8)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 rounded-[3rem]"></div>
          <div className="absolute -inset-1 shadow-[inset_0_0_60px_40px_rgba(0,0,0,1)] rounded-[3rem]"></div>
        </div>

        {/* ТЕКСТ ПОВЕРХ ВИДЕО */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center">
          <h1
            className={`text-[18vw] md:text-[15vw] font-black text-white leading-none tracking-tighter transition-all duration-[1500ms] delay-500
            ${loaded ? "opacity-80 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"}`}
            style={{ mixBlendMode: 'difference' }}
          >
            LOTUS
          </h1>
          <p className={`text-[4vw] md:text-[2vw] text-white/90 font-light italic tracking-[1em] transition-all duration-[1500ms] delay-700
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ mixBlendMode: 'difference' }}>
            Boutique
          </p>
        </div>

        {/* БЕГУЩАЯ СТРОКА (ПАУЗА ПРИ НАВЕДЕНИИ) */}
        <div className="absolute bottom-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md py-6 border-t border-white/5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-8 hover:[animation-play-state:paused] cursor-default">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mx-4 hover:text-white/40 transition-colors duration-500">
                {rollerText}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- СЕКЦИЯ ФИЛОСОФИЯ --- */}
      <section 
        ref={philosophyRef}
        className="relative w-full min-h-screen bg-black px-10 py-32 flex flex-col items-center justify-center"
      >
        {/* Анимированная линия разделитель */}
        <div className={`w-[1px] bg-gradient-to-b from-white/80 via-white/20 to-transparent mb-20 transition-all duration-[2000ms] 
          ${philosophyInView ? 'h-40 opacity-100' : 'h-0 opacity-0'}`}></div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 transition-all duration-[1200ms] delay-300 
            ${philosophyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>            
            <h2 className="text-white/40 text-sm font-bold uppercase tracking-[0.5em] animate-pulse">Philosophy</h2>
            <p className="text-white text-4xl md:text-6xl font-light leading-tight tracking-tighter">
              Defining <span className="italic font-serif text-white/90 hover:text-zinc-400 transition-colors duration-500 cursor-default">Elegance</span> <br /> 
              Through Conscious Craftsmanship.
            </p>
            <p className="text-white/60 text-lg max-w-md leading-relaxed border-l border-white/10 pl-6">
              Lotus Boutique — это не просто одежда. Это манифест минимализма и качества в каждой детали.
            </p>
            <button className="group flex items-center space-x-4 text-white overflow-hidden">
              <span className="uppercase text-xs font-bold tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">Explore Story</span>
              <div className="w-12 h-[1px] bg-white group-hover:w-32 transition-all duration-700 bg-gradient-to-r from-white to-transparent"></div>
            </button>
          </div>

          {/* ИНТЕРАКТИВНОЕ ПРЕВЬЮ С ЭФФЕКТОМ ПРИ НАВЕДЕНИИ */}
          <div className={`relative group transition-all duration-[2000ms] delay-500 
            ${philosophyInView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-6"}`}>            
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1 shadow-2xl shadow-white/5">
              <Image 
                src="/image.jpg" 
                alt="Collection" 
                fill 
                className="object-cover transition-transform duration-[2.5s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/10 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
              
              {/* Плашка, которая появляется при наведении */}
              <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <p className="text-white text-[10px] tracking-[0.5em] uppercase bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                  New Season '26
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="relative w-full bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Заголовок: Анимация слева направо */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-8"
        >
          <h2 className="text-white text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-none">
            The <span className="italic font-serif font-light text-white/30">Lux</span>
          </h2>
          <div className="hidden md:block text-white/40 text-[10px] tracking-[0.6em] uppercase">
            Spring / Summer 2026
          </div>
        </motion.div>

        {/* GRID SYSTEM: Анимация снизу вверх */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          
          {/* 1. Вертикальный высокий */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariant}
            className="relative col-span-2 md:col-span-1 md:row-span-2 group overflow-hidden rounded-2xl bg-zinc-900"
          >
            <Image src="/i.jpg" alt="Model" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white text-xs tracking-widest uppercase">Structured Blazer</p>
              <p className="text-white/60 text-[10px] mt-2">$2,400</p>
            </div>
          </motion.div>

          {/* 2. Горизонтальный широкий */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariant}
            className="relative col-span-2 md:col-span-2 md:row-span-1 group overflow-hidden rounded-2xl bg-zinc-800"
          >
            <Image src="/i3.jpg" alt="Fabric" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-1" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="text-white text-[10px] tracking-[1em] uppercase bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                Craftsmanship
              </span>
            </div>
          </motion.div>

          {/* 3. Квадрат (Detail) */}
          <motion.div 
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariant}
            className="relative col-span-1 md:col-span-1 md:row-span-1 group overflow-hidden rounded-2xl bg-zinc-900"
          >
            <Image src="/item.png" alt="Detail" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </motion.div>

          {/* 4. Квадрат (Quote) */}
       <motion.div 
  custom={4} 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true }} 
  variants={itemVariant}
  className="relative col-span-1 md:col-span-1 md:row-span-1 group overflow-hidden rounded-2xl bg-zinc-900"
>
  {/* Изображение с анимацией Zoom */}

            <Image src="/i2.png" alt="Detail" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />

  {/* Постоянный Overlay для читаемости текста */}
  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/40 transition-opacity duration-500 group-hover:bg-black/20">
    <p className="relative z-10 text-white text-[10px] tracking-widest uppercase leading-loose">
      "Luxury is a <br/> state of mind."
    </p>
  </div>

  {/* Декоративная рамка */}
  <div className="absolute inset-0 border border-white/20 m-2 rounded-xl pointer-events-none z-20"></div>
</motion.div>
          {/* 5. Горизонтальный (Accessory) */}
          <motion.div 
            custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariant}
            className="relative col-span-2 md:col-span-2 md:row-span-1 group overflow-hidden rounded-2xl bg-zinc-800"
          >
            <Image src="/item2.jpg" alt="Accessory" fill className="object-cover transition-transform duration-[2s] group-hover:scale-125 group-hover:-translate-y-4" />
            <div className="absolute bottom-6 left-6">
               <button className="bg-black/80 backdrop-blur-md text-white border border-white/20 text-[9px] px-6 py-2 rounded-full tracking-tighter hover:bg-white hover:text-black transition-all">
                  VIEW COLLECTION →
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
        
  
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        body { background-color: black; scroll-behavior: smooth; }
        
        /* Плавный скроллбар для эстетики */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: black; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>    
      
    </div>
  );
}