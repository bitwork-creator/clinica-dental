"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Paciente de ortodoncia",
    initials: "LM",
    rating: 5,
    text: "Increíble experiencia desde el primer momento. El equipo es muy profesional y amable. Terminé mi tratamiento de ortodoncia en el tiempo previsto y el resultado superó mis expectativas.",
  },
  {
    name: "Carlos Sánchez",
    role: "Implante dental",
    initials: "CS",
    rating: 5,
    text: "Me realizaron dos implantes y quedé maravillado. El procedimiento fue indoloro y el seguimiento post-operatorio fue impecable. Ya no recuerdo cómo era vivir sin esos dientes.",
  },
  {
    name: "María González",
    role: "Mamá de paciente",
    initials: "MG",
    rating: 5,
    text: "Llevé a mi hijo de 6 años por primera vez al dentista y salió feliz. La odontopediatra es genial con los niños. Ahora él mismo pide ir a sus controles.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-nude text-nude" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#faf9f7] py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-nude">
            Testimonios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
            La confianza de nuestros pacientes es nuestro mayor logro.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col border border-zinc-200 bg-white p-8"
            >
              <Stars count={t.rating} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-zinc-500">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-zinc-100 pt-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-nude-xlight text-xs font-bold text-nude-dark">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
