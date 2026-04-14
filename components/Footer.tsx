import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 py-10 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-white">
              Clínica Dental Primero de Mayo
            </p>
            <p className="mt-1 text-sm">Tu sonrisa, nuestra pasión.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm sm:justify-end">
            {["Inicio", "Servicios", "Testimonios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-8 flex flex-col items-center gap-2 text-center text-xs sm:flex-row sm:justify-between">
          <p>© {year} Clínica Dental Primero de Mayo. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="fill-malva text-malva" /> en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
