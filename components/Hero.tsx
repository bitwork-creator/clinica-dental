"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { image: "https://images.unsplash.com/photo-1588776814546-1ffbb172e16a?auto=format&fit=crop&w=1600&q=80" },
  { image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80" },
  { image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80" },
  { image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1600&q=80" },
];

const badges = [
  "+2.000 pacientes atendidos",
  "Primera consulta gratuita",
  "Financiación sin intereses",
];

function CheckSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.2)" />
      <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden bg-zinc-900">
      {/* Carousel */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative min-w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-white/60" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
              Clínica Dental · Valencia
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif font-light leading-[1.15] text-white text-[clamp(2.8rem,5vw,4.5rem)]"
          >
            Tu dentista de confianza en Valencia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/85"
          >
            Sin listas de espera. Sin sorpresas. Llevamos 15 años cuidando
            las sonrisas de las familias de Valencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckSVG />
                <span className="text-sm font-light text-white/90">{b}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white px-8 py-4 text-xs font-medium uppercase tracking-widest text-[#1C3A38] hover:bg-[#F8F6F1] transition"
            >
              Reservar cita
              <ArrowRight size={14} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-white/60 px-8 py-4 text-xs font-medium uppercase tracking-widest text-white hover:bg-white/10 transition"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Nav arrows */}
      <div className="absolute bottom-10 right-8 z-10 flex gap-2">
        <button
          onClick={scrollPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Siguiente"
          className="flex h-10 w-10 items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`h-0.5 transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
