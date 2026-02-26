'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateSlight = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      
      {/* --- ДЕКОРАТИВНЫЕ ПЯТНА (BACKDROP BLURS) --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
 {/* --- BIG TEXT SECTION (MANIFESTO) --- */}
<section className="py-40 px-6 relative">
  <div className="max-w-[1200px] mx-auto">
    {/* Декоративная фоновая надпись */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[25vw] font-black pointer-events-none select-none">
      LOTUS
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10"
    >
      <h2 className="text-zinc-500 text-[10px] tracking-[0.8em] uppercase mb-12 flex items-center">
        <span className="w-8 h-[1px] bg-zinc-800 mr-4"></span> Manifesto
      </h2>

      <p className="text-white text-3xl md:text-6xl font-light leading-[1.15] tracking-tight">
        Мы существуем в эпоху <span className="text-zinc-500">избыточности</span>. 
        Когда мир выбирает громкость, мы выбираем <span className="italic font-serif">шёпот</span>. 
        Lotus Boutique был рожден из идеи, что истинная роскошь не кричит о себе логотипами — 
        она чувствуется в <span className="text-zinc-400">тяжести шелка</span>, в безупречности 
        линии плеча и в тишине нашей мастерской в Самарканде.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
        <p className="text-zinc-500 text-lg leading-relaxed">
          Наш путь начался в 2010 году с одного рулона итальянского кашемира и мечты создать 
          гардероб, который прослужит десятилетия, а не сезоны. Мы объединили восточное 
          гостеприимство и внимание к деталям с западным минимализмом. 
        </p>
        <p className="text-zinc-500 text-lg leading-relaxed">
          Сегодня Lotus — это сообщество людей, которые ценят своё время и комфорт. 
          Мы используем только сертифицированные экологичные ткани, поддерживая 
          традиции осознанного потребления. Каждый наш предмет — это инвестиция 
          в ваш личный стиль и уверенность.
        </p>
      </div>
    </motion.div>
  </div>
</section>
      {/* --- CREATIVE PHILOSOPHY --- */}
      <section className="relative py-32 px-6 md:px-20 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Левая часть: Текст */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="h-[1px] w-12 bg-zinc-700"></span>
                <h2 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.5em]">01. Creative Mindset</h2>
              </div>
              <p className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tighter">
                Мода — это <br />
                <span className="italic font-serif text-zinc-400">архитектура</span> <br />
                в движении.
              </p>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              Мы не просто шьем одежду. Мы создаем защитный слой между личностью и хаосом мегаполиса, используя лучшие ткани мира.
            </p>
          </motion.div>

          {/* Правая часть: Изображение с декоративным элементом */}
          <div className="lg:col-span-7 relative flex justify-end">
            <motion.div 
              style={{ rotate: rotateSlight }}
              className="relative w-full md:w-[80%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image src="/i3.jpg" alt="Craft" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
            </motion.div>
            
            {/* Абстрактная плашка, закрывающая пустоту */}
            <div className="absolute -bottom-10 -left-10 hidden md:block p-8 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl max-w-[200px]">
              <p className="text-[10px] tracking-widest leading-loose uppercase text-zinc-300">
                "Каждая деталь имеет значение."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- AMENITIES --- */}
      <section className="relative bg-zinc-900/30 py-40 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Comfort & <br/> Service</h2>
            <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">Premium Experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "Bespoke Fitting", desc: "Индивидуальная подгонка изделий под ваши параметры." },
              { title: "Global Delivery", desc: "Приоритетная доставка в любую точку мира за 72 часа." },
              { title: "Private Lounge", desc: "Доступ в закрытые шоурумы для примерки в тишине." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 border border-white/5 hover:bg-white/[0.02] transition-all duration-500"
              >
                <span className="text-zinc-700 font-mono text-sm group-hover:text-white transition-colors">0{i + 1}</span>
                <h3 className="text-xl font-bold mt-10 mb-6 tracking-tight uppercase">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEDIA ARCHIVE --- */}
      <section className="py-40 max-w-[75%] mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 mb-20">
             <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">Media <br/> <span className="text-zinc-800 italic font-serif">Archive</span></h2>
             <div className="w-20 h-[2px] bg-zinc-800 mt-8"></div>
          </div>
          
          <div className="col-span-6 md:col-span-4 relative aspect-[3/4] overflow-hidden rounded-xl translate-y-10">
            <Image src="/i.jpg" alt="Media" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="col-span-6 md:col-span-4 relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image src="/i.jpg" alt="Media" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="col-span-6 md:col-span-3 relative aspect-square md:aspect-[3/4] overflow-hidden rounded-xl md:-translate-y-20">
            <Image src="/i.jpg" alt="Media" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="col-span-6 md:col-span-5 relative aspect-square md:aspect-[3/4] overflow-hidden rounded-xl">
            <Image src="/i.jpg" alt="Media" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
     

    </div>
  );
}