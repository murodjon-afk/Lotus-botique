'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Image from "next/image";
import { Variants } from 'framer-motion';
const products = [
  { id: 1, name: "Noir Coat", price: "$3,200", image: "/i.jpg", type: "vertical" },
  { id: 2, name: "Silk Scarf", price: "$450", image: "/i.jpg", type: "square" },
  { id: 3, name: "Minimalist Tote", price: "$1,800", image: "/i.jpg", type: "square" },
  { id: 4, name: "Luna Dress", price: "$2,900", image: "/i.jpg", type: "vertical" },
  { id: 5, name: "Wool Trousers", price: "$1,200", image: "/i.jpg", type: "vertical" },
  { id: 6, name: "Essence Perfume", price: "$350", image: "/i.jpg", type: "square" },
    { id: 7, name: "Noir Coat", price: "$3,200", image: "/i.jpg", type: "vertical" },
  { id: 8, name: "Silk Scarf", price: "$450", image: "/i.jpg", type: "square" },
  { id: 9, name: "Minimalist Tote", price: "$1,800", image: "/i.jpg", type: "square" },
  { id: 10, name: "Luna Dress", price: "$2,900", image: "/i.jpg", type: "vertical" },
  { id: 11, name: "Wool Trousers", price: "$1,200", image: "/i.jpg", type: "vertical" },
  { id: 12, name: "Essence Perfume", price: "$350", image: "/i.jpg", type: "square" },
];
export default function Shop() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Анимация появления заголовка
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  // Анимация для карточек магазинов
  const shopCardVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1, 
        delay: 0.2 + (i * 0.2), 
        ease: [0.33, 1, 0.68, 1] 
      }
    })
  };

  const shopLocations = [
    {
      id: 1,
      name: "Lotus Digital Atelier",
      desc: "Online exclusive collections & virtual fitting.",
      image: "/shop1.png", // Замените на реальное фото
      label: "E-BOUTIQUE"
    },
    {
      id: 2,
      name: "Flagship Samarkand",
      desc: "Physical experience & bespoke tailoring.",
      image: "/shop2.png", // Замените на реальное фото
      label: "CONCEPT STORE"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* --- ШАПКА / ПРИВЕТСТВИЕ --- */}
      <section className="pt-32 pb-20 px-10 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={titleVariant}
          className="text-center space-y-4"
        >
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.8em]">Select Experience</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Our <span className="italic font-serif font-light text-zinc-400">Stores</span>
          </h1>
          <div className="w-20 h-[1px] bg-zinc-700 mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* --- БЛОКИ МАГАЗИНОВ (FLEX ROW) --- */}
      <section className="max-w-[75%] mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row gap-8 h-full md:h-[70vh]">
          
          {shopLocations.map((shop, i) => (
            <motion.div
              key={shop.id}
              custom={i}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              variants={shopCardVariant}
              className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 border border-white/5"
            >
              {/* Изображение с эффектом Zoom и Grayscale */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover   group-hover:scale-110 transition-all duration-[2s] ease-out opacity-60 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Контент поверх карточки */}
              <div className="relative h-full flex flex-col justify-end p-10 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
                <span className="text-[10px] tracking-[0.4em] text-white/50 mb-2">{shop.label}</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{shop.name}</h3>
                <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-8 transform group-hover:text-white transition-colors duration-500">
                  {shop.desc}
                </p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-bold uppercase tracking-widest">Enter Store</span>
                  <div className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>

              {/* Декоративный эффект "Свечения" при наведении */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      <section className="max-w-[75%] mx-auto px-6 py-20">
  <div className="flex items-end justify-between mb-12">
    <h2 className="text-white text-4xl font-light tracking-tighter uppercase">
      New <span className="italic opacity-40">Arrivals</span>
    </h2>
    <span className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase pb-2">Scroll to explore</span>
  </div>

  {/* Сетка товаров с разной формой блоков */}
  <div className="columns-2 md:columns-3 gap-6 space-y-6">
    {products.map((product) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group break-inside-avoid mb-6 cursor-pointer"
      >
        <div className={`relative overflow-hidden rounded-xl bg-zinc-900 
          ${product.type === 'vertical' ? 'aspect-[2/3]' : 'aspect-square'}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay при наведении */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
             <button className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               Quick Add +
             </button>
          </div>
        </div>

        {/* Инфо о продукте под фото */}
        <div className="mt-4 flex justify-between items-start px-1">
          <div>
            <h3 className="text-white text-sm font-medium tracking-tight">{product.name}</h3>
            <p className="text-zinc-500 text-xs mt-1 uppercase tracking-tighter">Collection '26</p>
          </div>
          <p className="text-white/80 text-sm font-light">{product.price}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  
      <style jsx global>{`
        body { background-color: black; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: black; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
      `}</style>
    </div>
  );
}