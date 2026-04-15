"use client";

import { motion } from "framer-motion";
import { Stethoscope, Smile, Shield, Sparkles, Baby, Zap } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Odontología General",
    description:
      "Diagnóstico, prevención y tratamiento de caries, enfermedad periodontal y revisiones completas para mantener tu boca sana.",
  },
  {
    icon: Smile,
    title: "Ortodoncia",
    description:
      "Brackets metálicos, cerámicos y alineadores transparentes (Invisalign) para corregir la posición de tus dientes con discreción.",
  },
  {
    icon: Shield,
    title: "Implantología",
    description:
      "Implantes de titanio de alta calidad que reemplazan dientes perdidos con una solución fija, natural y duradera.",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description:
      "Blanqueamiento profesional, carillas de porcelana y composite para una sonrisa brillante que te dé confianza.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description:
      "Atención especializada y amigable para los más chicos, creando hábitos saludables desde la primera infancia.",
  },
  {
    icon: Zap,
    title: "Endodoncia",
    description:
      "Tratamientos de conducto con la última tecnología para eliminar el dolor y conservar tu diente natural.",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    update();
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section id="servicios" className="bg-white py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-nude">
              Nuestros servicios
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal uppercase tracking-widest text-zinc-900 sm:text-4xl">
              Servicios dentales en Valencia
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
              Contamos con especialistas en cada área para ofrecer tratamientos
              dentales en Valencia que sean integrales, personalizados y de alta calidad.
            </p>
          </div>

          {/* Arrow controls — desktop */}
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel — bleeds to full width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-16"
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex ml-6 lg:ml-[calc((100vw-72rem)/2+1.5rem)] gap-px">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative flex-shrink-0 w-72 lg:w-80 bg-[#faf9f7] p-10 cursor-grab active:cursor-grabbing select-none border border-zinc-100 hover:border-nude/40 transition-colors duration-300"
                >
                  {/* Accent line */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-nude scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center border border-nude/40 text-nude group-hover:bg-nude group-hover:text-white group-hover:border-nude transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-base font-bold uppercase tracking-widest text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Arrow controls — mobile */}
      <div className="mt-8 flex justify-center gap-2 md:hidden">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Siguiente"
          className="flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
