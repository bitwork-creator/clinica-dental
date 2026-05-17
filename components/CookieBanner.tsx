"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  const savePrefs = () => {
    localStorage.setItem("cookieConsent", "custom");
    setShowModal(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E0D8] bg-white px-6 py-4 shadow-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-[#4a4a4a]">
            Usamos cookies para mejorar tu experiencia y analizar el tráfico de la web.{" "}
            <button
              onClick={() => setShowModal(true)}
              className="underline text-[#1C3A38] hover:text-[#2C7A74] transition-colors"
            >
              Más información
            </button>
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="rounded border border-gray-300 px-5 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Ajustes
            </button>
            <button
              onClick={reject}
              className="rounded border border-[#1C3A38] px-5 py-2 text-sm text-[#1C3A38] hover:bg-gray-50 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="rounded bg-[#1C3A38] px-5 py-2 text-sm text-white hover:bg-[#2C7A74] transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-[480px] bg-white p-8 shadow-2xl">
            <h2 className="font-serif text-2xl font-light text-[#1a1a1a] mb-6">
              Configuración de cookies
            </h2>

            <div className="flex flex-col">
              <div className="flex items-center justify-between border-b border-[#E5E0D8] py-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">Cookies necesarias</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">Imprescindibles para el funcionamiento del sitio</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
                  Siempre activadas
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E0D8] py-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">Cookies analíticas</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">Google Analytics, métricas de uso</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-5 w-5 cursor-pointer accent-[#1C3A38]"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E0D8] py-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">Cookies de marketing</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">Anuncios y contenido personalizados</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-5 w-5 cursor-pointer accent-[#1C3A38]"
                />
              </div>
            </div>

            <button
              onClick={savePrefs}
              className="mt-8 w-full bg-[#1C3A38] py-3 text-sm font-medium text-white hover:bg-[#2C7A74] transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      )}
    </>
  );
}
