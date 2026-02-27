'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Деликатная анимация для премиального вида
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-zinc-800">
      
      {/* --- ГЛАВНЫЙ КОНТЕЙНЕР (ОГРАНИЧЕНИЕ 75%) --- */}
      <div className="max-w-[90%] md:max-w-[75%] mx-auto relative z-10">
        
        {/* --- SECTION 1: MANIFESTO --- */}
        <section className="py-32 md:py-48 relative border-b border-zinc-900">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-zinc-600 text-[10px] tracking-[0.8em] uppercase mb-12 flex items-center">
              <span className="w-8 h-[1px] bg-zinc-800 mr-4"></span> The Essence
            </h2>

            <p className="text-white text-3xl md:text-6xl font-light leading-[1.1] tracking-tight mb-20">
              Косметика как <span className="italic font-serif text-zinc-400">искусство</span> <br /> 
              физиологического баланса. Мы не маскируем, мы <span className="text-zinc-500">восстанавливаем</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
              <div className="space-y-6">
                <p className="text-zinc-500 text-lg leading-relaxed font-light">
                  Lotus Cosmetics зародился в 2010 году в Самарканде как частная лаборатория. 
                  Нашей целью было соединить древние знания о маслах и травах с молекулярной биологией XXI века.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-zinc-500 text-lg leading-relaxed font-light">
                  Каждая формула создается вручную. Мы используем вакуумную экстракцию, 
                  чтобы сохранить 99.9% активных молекул растений. Это честный уход, 
                  который понимает язык вашей кожи.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: PRODUCTION (ABOUT US) --- */}
        <section className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-zinc-700 font-mono text-xs mb-6 block uppercase tracking-widest italic font-serif">Process 01</span>
              <h3 className="text-4xl font-light mb-8">Этичное <br/> производство</h3>
              <p className="text-zinc-500 leading-relaxed mb-8 font-light">
                Мы не верим в массовое производство. Lotus — это камерный бренд. 
                У нас нет стоков, которые пылятся на складах. Каждая партия крема 
                готовится под заказ, гарантируя максимальную активность компонентов.
              </p>
              <div className="w-16 h-[1px] bg-zinc-800"></div>
            </div>
            
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5">
              <Image 
                src="/i3.jpg" 
                alt="Laboratory Process" 
                fill 
                className="object-cover transition-all duration-1000" 
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 3: MEDIA ARCHIVE (TEXTURES & RITUALS) --- */}
        <section className="py-32 border-t border-zinc-900">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Media <br/> Archive</h2>
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase pb-2">Visual Experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <motion.div 
                key={id}
                whileHover={{ y: -10 }}
                className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 border border-white/5"
              >
                <video
                  src={`/it${id}.mp4`}
                  autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: DELIVERY INFO --- */}
        <section className="py-32 border-y border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Bespoke Delivery", desc: "Доставка в любую точку мира за 72 часа в термо-упаковке." },
              { title: "Eco-Packaging", desc: "Стеклянные флаконы и биоразлагаемый картон. Ноль пластика." },
              { title: "Freshness", desc: "Продукт доставляется напрямую из лаборатории к вашей двери." }
            ].map((item, i) => (
              <div key={i} className="group">
                <span className="text-zinc-800 font-mono text-sm group-hover:text-white transition-colors">0{i + 1}</span>
                <h3 className="text-lg font-bold mt-6 mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: FINAL CTA --- */}
        <section className="py-40 text-center">
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter mb-12">Начните свой <br/> <span className="italic font-serif">ритуал.</span></h2>
          <Link href={"/shop"} className="px-12 py-5 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.4em]">
            Перейти В SHOP
          </Link>
        </section>

      </div>

      {/* --- ФОНОВЫЙ ТЕКСТ (ЗА ПРЕДЕЛАМИ КОНТЕЙНЕРА) --- */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[30vw] font-black pointer-events-none select-none z-0 tracking-tighter">
        LOTUS
      </div>

    </div>
  );
}