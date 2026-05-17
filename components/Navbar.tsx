"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-9 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black/55 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo — single element */}
        <a href="#inicio">
          <span
            className={`font-serif text-xl font-light tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            SONRISA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                  scrolled
                    ? "text-zinc-500 hover:text-[#1a1a1a]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
              scrolled
                ? "bg-[#2C5F5D] text-white hover:bg-[#1C3A38]"
                : "border border-white text-white hover:bg-white hover:text-[#1C3A38]"
            }`}
          >
            Reservar cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-zinc-700" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium uppercase tracking-widest text-zinc-600 hover:text-[#1C3A38] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-[#2C5F5D] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#1C3A38] transition-colors"
          >
            Reservar cita
          </a>
        </div>
      )}
    </header>
  );
}
