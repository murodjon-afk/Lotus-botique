'use client'
import  { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");

  const navigationLinks = ["Collections", "Archive", "Lookbook", "Sustainability"];
  const socialLinks = ["Instagram", "Twitter", "Vogue Business", "LinkedIn"];

  return (
    <footer className="relative w-full bg-black pt-32 pb-10 px-10 border-t border-white/10 overflow-hidden group/footer">
      
      {/* Фоновое свечение (Ambient Light) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        
        {/* LOGO COLUMN */}
        <div className="space-y-6">
          <h2 className="text-white text-3xl font-black tracking-tighter hover:tracking-[0.3em] transition-all duration-700 cursor-pointer w-fit">
            LOTUS
          </h2>
          <p className="text-white/40 text-[10px] leading-relaxed max-w-[200px] uppercase tracking-[0.2em] border-l border-white/10 pl-4">
            The essence of luxury is not in the price, but in the silence of quality.
          </p>
        </div>

        {/* LINKS COLUMNS - Navigate */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white/20 text-[10px] uppercase tracking-[0.4em] mb-4">Navigate</h3>
          {navigationLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="relative text-white/60 text-sm font-light hover:text-white hover:translate-x-3 transition-all duration-500 w-fit group/link"
            >
              <span className="absolute -left-4 opacity-0 group-hover/link:opacity-100 transition-all">→</span>
              {link}
            </a>
          ))}
        </div>

        {/* LINKS COLUMNS - Connect */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white/20 text-[10px] uppercase tracking-[0.4em] mb-4">Connect</h3>
          {socialLinks.map((social) => (
            <a 
              key={social} 
              href="#" 
              className="group flex items-center gap-3 text-white/60 text-sm font-light hover:text-white transition-all duration-500 hover:pl-2"
            >
              <span className="w-1 h-1 bg-white/20 rounded-full group-hover:w-6 group-hover:bg-white transition-all duration-500"></span>
              {social}
            </a>
          ))}
        </div>

        {/* VIDEO BOX & NEWSLETTER */}
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h3 className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Newsletter</h3>
            <div className="relative group/input">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-[10px] tracking-[0.3em] outline-none focus:border-white transition-all duration-700 placeholder:text-white/10"
              />
              <button className="absolute right-0 bottom-2 text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-all hover:scale-110 active:scale-90">
                Join
              </button>
              {/* Эффект свечения под инпутом */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent group-focus-within:w-full transition-all duration-1000"></div>
            </div>
          </div>

          {/* МИНИ-ВИДЕО В УГЛУ */}
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10 group/vid cursor-pointer">
             <video
              src="/lotus.mp4" 
              autoPlay muted playsInline loop
              className="w-full h-full object-cover grayscale opacity-60 group-hover/vid:opacity-100 group-hover/vid:grayscale-0 transition-all duration-1000 scale-110 group-hover/vid:scale-100"
            />
            
            {/* Линия сканирования (Анимированная) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-[20%] w-full -translate-y-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>
            
            <div className="absolute inset-0 bg-black/40 group-hover/vid:bg-transparent transition-all duration-1000"></div>
            
            <div className="absolute inset-0 flex items-center justify-center m-4 rounded-xl border border-white/0 group-hover/vid:border-white/20 transition-all duration-700">
              <span className="opacity-0 group-hover/vid:opacity-100 text-white text-[8px] uppercase tracking-[0.8em] transition-all duration-700 translate-y-2 group-hover/vid:translate-y-0 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/10">
                View Film
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/10 text-[8px] tracking-[0.5em] uppercase hover:text-white/40 transition-all cursor-default">
          © 2026 LOTUS BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex gap-10">
          {["Privacy Policy", "Terms of Service"].map(t => (
             <button key={t} className="text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-white transition-all relative group/bot">
               {t}
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all group-hover/bot:w-full"></span>
             </button>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-full border border-white/5 shadow-inner">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <span className="text-white/40 text-[8px] tracking-[0.3em] uppercase">System Operational</span>
        </div>
      </div>

      {/* Декоративный текст на заднем фоне */}
      <div className="absolute -bottom-10 -left-10 text-[22vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter group-hover/footer:-translate-x-10 transition-transform duration-[3000ms] ease-out">
        LOTUS
      </div>

      {/* CSS анимация сканирования, если её нет в tailwind.config.js */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;