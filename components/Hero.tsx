"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/fotos/IMG_6342.webp",
    label: "Clínica de confianza",
  },
  {
    image: "/fotos/IMG_6340 2.jpg",
    label: "Tecnología de vanguardia",
  },
  {
    image: "/fotos/IMG_6359.jpg",
    label: "Atención personalizada",
  },
  {
    image: "/fotos/IMG_6339 2.jpg",
    label: "Más de 15 años de experiencia",
  },
];

const highlights = [
  "Más de 15 años de experiencia",
  "Atención personalizada",
  "Tecnología de última generación",
];

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
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-zinc-900 pt-20">
      {/* Carousel */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.image}
              className="relative min-w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-zinc-900/55" />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="max-w-2xl pt-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-nude"
          >
            Clínica Dental de Confianza
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Clínica Dental en Valencia · Primero de Mayo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-base leading-relaxed text-zinc-300 max-w-md"
          >
            En Clínica Dental Primero de Mayo, en el barrio de Jesús, ofrecemos
            tratamientos dentales en Valencia con tecnología de vanguardia y un
            trato humano para que cada visita sea una experiencia positiva.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle size={16} className="shrink-0 text-nude" />
                <span className="text-sm text-zinc-300">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-nude px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            >
              Reservar mi cita
              <ArrowRight size={14} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-12 right-8 z-10 flex gap-2">
        <button
          onClick={scrollPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Siguiente"
          className="flex h-10 w-10 items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`h-0.5 transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-nude" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
