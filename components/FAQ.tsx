"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿La primera consulta tiene coste?",
    a: "No. La primera revisión es completamente gratuita y sin compromiso.",
  },
  {
    q: "¿Hacéis ortodoncia para adultos?",
    a: "Sí, trabajamos con brackets metálicos, cerámicos y alineadores invisibles (Invisalign) para todas las edades.",
  },
  {
    q: "¿Los tratamientos duelen?",
    a: "Usamos anestesia local en todos los procedimientos que lo requieren. La mayoría de nuestros pacientes describen la experiencia como mucho mejor de lo esperado.",
  },
  {
    q: "¿Ofrecéis financiación?",
    a: "Sí, disponemos de financiación sin intereses hasta 12 meses para tratamientos mayores.",
  },
  {
    q: "¿Cuánto tarda un implante?",
    a: "El proceso completo dura entre 3 y 6 meses. La intervención inicial dura entre 45 y 60 minutos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F6F1] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#2C7A74]">FAQ</p>
          <h2 className="mt-3 font-serif font-light text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.8rem)]">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-[#2C7A74]" />
        </motion.div>

        <div className="mt-10 divide-y divide-[#E5E0D8]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="py-5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-medium text-[#1a1a1a] pr-4">{faq.q}</span>
                <span className="shrink-0 text-xl font-light text-[#2C7A74] leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="pb-1 pt-3 text-sm font-light leading-relaxed text-[#6B7280]">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
