'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number | string;
  image: string;
  type: string;
};

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const savedCart = localStorage.getItem('lotus_cart');
        if (!savedCart) {
          setLoading(false);
          return;
        }
        const cartIds: number[] = JSON.parse(savedCart);

        const res = await fetch("https://lotus-api-rpoz.vercel.app/api/products");
        const allProducts: Product[] = await res.json();

        const filtered = allProducts.filter(p => cartIds.includes(p.id));
        setCartProducts(filtered);
      } catch (err) {
        console.error("Ошибка загрузки корзины:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCartData();
  }, []);

  const removeFromCart = (id: number) => {
    const updatedProducts = cartProducts.filter(p => p.id !== id);
    setCartProducts(updatedProducts);
    const newIds = updatedProducts.map(p => p.id);
    localStorage.setItem('lotus_cart', JSON.stringify(newIds));
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-light tracking-[0.5em] uppercase text-[10px]">Loading Bag...</div>;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Контейнер ограничен 75% как в Shop и Header */}
      <main className="max-w-[75%] mx-auto pt-40 pb-20">
        
        {/* HEADER СТРАНИЦЫ */}
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-2"
          >
            <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.6em]">Your Selection</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Shopping <span className="italic font-serif font-light text-zinc-400">Bag</span>
            </h1>
            <div className="w-12 h-[1px] bg-zinc-800 mt-4"></div>
          </motion.div>
        </header>

        {cartProducts.length === 0 ? (
          <div className="flex flex-col items-center py-20 space-y-6">
            <p className="text-zinc-600 tracking-[0.3em] uppercase text-[10px]">Your bag is currently empty</p>
            <Link href="/shop" className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">
              Return to shop
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* СЕТКА ТОВАРОВ (Колонки стали меньше) */}
            <div className="flex-[2] columns-2 md:columns-3 gap-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {cartProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative group break-inside-avoid mb-4"
                  >
                    <div className={`relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5
                      ${
                        product.type === "horizontal" ? "aspect-[4/5]" : 
                        product.type === "vertical" ? "aspect-[3/2]" : 
                        "aspect-square"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Удаление */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => removeFromCart(product.id)}
                          className="bg-white text-black px-4 py-2 text-[9px] font-black uppercase tracking-tighter rounded-full active:scale-90 transition-transform"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col space-y-1 px-1">
                      <h3 className="text-white text-[11px] font-medium tracking-tight uppercase">{product.name}</h3>
                      <p className="text-zinc-500 text-[10px] font-light">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* CHECKOUT PANEL (Минималистичная и компактная) */}
            <aside className="lg:w-72 w-full flex flex-col space-y-8 p-8 bg-zinc-900/30 border border-white/5 rounded-2xl backdrop-blur-sm sticky top-40">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Subtotal</span>
                  <span className="text-sm font-light italic">Calculated at checkout</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Items</span>
                  <span className="text-sm">{cartProducts.length}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors">
                Checkout
              </button>
              
              <p className="text-[8px] text-zinc-600 uppercase tracking-widest text-center leading-relaxed">
                Taxes and shipping calculated <br /> at the next stage.
              </p>
            </aside>

          </div>
        )}
      </main>

      <style jsx global>{`
        body { background-color: black; }
      `}</style>
    </div>
  );
}