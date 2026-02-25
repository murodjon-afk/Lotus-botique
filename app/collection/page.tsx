'use client';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  { id: 'all', label: 'All Artifacts' },
  { id: 'scent', label: 'Fragrance' },
  { id: 'skin', label: 'Skin Ritual' },
  { id: 'color', label: 'Color' }
];

const PRODUCTS = [
  { id: 'p1', category: 'scent', title: 'Noir Lotus', price: '$280', tag: 'Limited', image: '/item2.jpg', size: 'large' },
  { id: 'v1', category: 'skin', title: 'Molecular Silk', description: 'Lotus extract technology.', type: 'video', src: '/special2.mp4', size: 'wide' },
  { id: 'p2', category: 'color', title: 'Velvet Matte', price: '$45', tag: 'New', image: '/image.jpg', size: 'standard' },
  { id: 'v2', category: 'scent', title: 'Essence Flow', description: 'Cold extraction.', type: 'video', src: '/special.mp4', size: 'standard' },
  { id: 'p3', category: 'skin', title: 'Hydra Serum', price: '$120', tag: 'Essential', image: '/i.jpg', size: 'standard' },
];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { scrollY } = useScroll();
  
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const titleBlur = useTransform(scrollY, [0, 300], [0, 10]);

  // Фильтрация данных
  const filteredProducts = PRODUCTS.filter(p => 
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="h-[70vh] flex flex-col items-center justify-center sticky top-0 z-0">
        <motion.div 
          style={{ opacity: titleOpacity, scale: titleScale, filter: `blur(${titleBlur}px)` }}
          className="text-center"
        >
          <span className="text-[10px] tracking-[1.2em] text-zinc-600 uppercase block mb-6">Edition №01</span>
          <h1 className="text-7xl md:text-[13vw] font-serif italic leading-none tracking-tighter text-white">
            The <span className="not-italic font-sans font-black uppercase">Alchemy</span>
          </h1>
        </motion.div>
      </header>

      {/* --- КАТЕГОРИИ (Sticky Navigation) --- */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/5 py-6">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* --- СЕТКА --- */}
      <main className="relative z-10 bg-black px-4 md:px-10 pb-40 min-h-screen">
        <div className="max-w-[70%] mx-auto pt-20">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((item, i) => (
                <ProductCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest"
      >
        Ritual Consult
      </motion.button>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@0,400;1,400&family=Inter:wght@300;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        body { background: black; margin: 0; }
      `}</style>
    </div>
  );
}

function ProductCard({ item, index }: { item: any; index: number }) {
  const isWide = item.size === 'wide' || item.size === 'large';

  return (
    <motion.div
      layout // Магия Framer Motion для плавного перемещения карточек
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`relative group rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 
        ${isWide ? 'md:col-span-2 aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/5]'}
      `}
    >
      {item.type === 'video' ? (
        <div className="relative w-full h-full">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover ">
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-3xl font-serif italic text-white/80">{item.title}</h2>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2">{item.description}</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full cursor-pointer">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover  group-hover:scale-105 transition-all duration-1000 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-8 w-full flex justify-between items-end">
            <div>
              <span className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2">{item.tag}</span>
              <h3 className="text-2xl font-serif italic">{item.title}</h3>
              <p className="text-zinc-400 text-[10px] mt-1 font-mono">{item.price}</p>
            </div>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              +
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}