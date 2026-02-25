'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image"

export default function Home() {
  const rollerText = " • SPRING COLLECTION 2026 • LIMITED EDITION • LOTUS BOUTIQUE • EXCLUSIVE QUALITY ";
  const [loaded, setLoaded] = useState(false);
  const [philosophyInView, setPhilosophyInView] = useState(false);
  const philosophyRef = useRef(null);

  useEffect(() => {
    // Загрузка первой секции
    const timer = setTimeout(() => setLoaded(true), 100);

    // Отслеживание скролла для новой секции
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhilosophyInView(true);
        }
      },
      { threshold: 0.2 } // Сработает, когда 20% секции будет в поле видимости
    );

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (philosophyRef.current) observer.unobserve(philosophyRef.current);
    };
  }, []);

  return (
    <div className="relative w-full bg-black flex flex-col items-center overflow-x-hidden">
      
      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* ================= HEADER ================= */}
  <header
    className={`fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 
    flex items-center justify-between px-4 md:px-8 py-4 md:py-5
    bg-black/30 backdrop-blur-xl backdrop-saturate-150
    rounded-full mt-4
    transition-all duration-1000
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
  >
    {/* LOGO */}
    <div className="text-white font-semibold text-lg md:text-xl tracking-tight cursor-pointer hover:opacity-70 transition-opacity">
      LOTUS
    </div>

    {/* NAV (скрыт на mobile) */}
    <nav className="hidden md:flex items-center gap-8 border border-white/20 rounded-full px-8 py-3">
      {["Collection", "Shop", "About"].map((item) => (
        <a
          key={item}
          href="#"
          className="text-white/70 text-xs uppercase tracking-[0.3em] hover:text-white hover:scale-105 transition-all duration-300"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* BUTTONS */}
    <div className="flex items-center gap-4 md:gap-6">
      <button className="text-white/60 text-sm hover:text-white transition-colors">
        Login
      </button>
      <button className="px-4 md:px-6 py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-white/90 active:scale-95 transition-all">
        Sign Up
      </button>
    </div>
  </header>

  {/* ================= VIDEO ================= */}
  <video
    src="/lotus.mp4"
    autoPlay
    muted
    playsInline
    loop
    className={`w-[320px] h-[320px] 
    sm:w-[450px] sm:h-[450px]
    md:w-[600px] md:h-[600px]
    lg:w-[750px] lg:h-[750px]
    object-cover rounded-2xl
    transition-all duration-1500
    ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
  />

  {/* ================= TITLES ================= */}
  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">

    <h1
      className={`text-[50px] sm:text-[70px] md:text-[120px] lg:text-[180px]
      font-extrabold text-white leading-none
      transition-all duration-1500
      ${loaded ? "opacity-80 translate-y-0" : "opacity-0 -translate-y-10"}`}
      style={{
        WebkitTextStroke: "2px rgba(0,0,0,0.7)",
        mixBlendMode: "difference",
      }}
    >
      Lotus
    </h1>

    <h1
      className={`text-[50px] sm:text-[70px] md:text-[120px] lg:text-[180px]
      font-extrabold text-white leading-none
      transition-all duration-1500 delay-200
      ${loaded ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        WebkitTextStroke: "2px rgba(0,0,0,0.7)",
        mixBlendMode: "difference",
      }}
    >
      Boutique
    </h1>

  </div>

  {/* ================= ROLLER ================= */}
 {/* ROLLER — ТОЛЬКО ГЛАВНАЯ */}
<div className="absolute bottom-0 left-0 w-full z-40 backdrop-blur-md bg-black/40 py-4 md:py-6 overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap">
    <span className="text-white text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight opacity-40 mx-4">
      {rollerText}
    </span>
    <span className="text-white text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight opacity-40 mx-4">
      {rollerText}
    </span>
  </div>
</div>
</div>

      {/* --- НОВАЯ СЕКЦИЯ: ФИЛОСОФИЯ (С АНИМАЦИЕЙ ПОЯВЛЕНИЯ) --- */}
      <section 
        ref={philosophyRef}
        className="relative w-full min-h-screen bg-black px-10 py-32 flex flex-col items-center justify-center"
      >
        {/* Декоративная линия — вытягивается сверху вниз */}
        <div className={`w-[1px] bg-gradient-to-b from-white/80 to-transparent mb-20 transition-all duration-[1500ms] 
          ${philosophyInView ? 'h-32 opacity-100' : 'h-0 opacity-0'}`}></div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Левая часть: Текст */}
          <div className={`space-y-8 transition-all duration-[1200ms] delay-300 
            ${philosophyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-white/40 text-sm font-bold uppercase tracking-[0.5em]">Philosophy</h2>
            <p className="text-white text-4xl md:text-6xl font-light leading-tight tracking-tighter">
              Defining <span className="italic font-serif text-white/90">Elegance</span> <br /> 
              Through Conscious <br /> 
              Craftsmanship.
            </p>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Lotus Boutique — это не просто одежда. Это манифест минимализма и качества. 
              Каждое изделие создается с учетом вечности, а не мимолетных трендов.
            </p>
            <button className="group flex items-center space-x-4 text-white hover:text-white/70 transition-all active:scale-95">
              <span className="uppercase text-xs font-bold tracking-[0.2em]">Explore Story</span>
              <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></div>
            </button>
          </div>

         {/* Правая часть: Карточка */}
<div
  className={`relative group transition-all duration-[1500ms] delay-500 
  ${philosophyInView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"}`}
>
  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">

  <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/image.jpg"  // заменяешь на своё фото
        alt="Collection"
        fill
        className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
      />
    </div>

    {/* 🌑 ГРАДИЕНТ ПОВЕРХ ФОТО */}
    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 to-transparent opacity-70"></div>


 
    {/* 🪟 HOVER CARD */}
    <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
      <p className="text-white text-xs uppercase tracking-widest font-bold">
        Limited Edition
      </p>
      <p className="text-white/50 text-[10px] mt-2 leading-relaxed tracking-wide">
        AVAILABLE ONLY IN SELECTED STORES
      </p>
    </div>

  </div>
</div>
        </div>

        {/* Фоновое свечение — плавно разгорается */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-[2000ms]
          ${philosophyInView ? 'opacity-100' : 'opacity-0'}`}></div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 375px) {
          .animate-marquee span { font-size: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}