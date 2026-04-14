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

const INSTAGRAM_URL = "https://www.instagram.com/clinicadental_primerodemayo/";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f7]/95 backdrop-blur-sm border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-widest uppercase text-zinc-900">
            Dental
          </span>
          <span className="text-xl font-light tracking-widest uppercase text-nude">
            Primero de Mayo
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-400 hover:text-nude transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="#contacto"
            className="border border-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            Reservar cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-700 hover:text-nude transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#faf9f7] border-t border-zinc-200 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex-1 inline-flex justify-center border border-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Reservar cita
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-nude transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
