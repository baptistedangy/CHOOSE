import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div
        className="w-full max-w-xl flex flex-col items-center text-center gap-8 bg-white rounded-2xl shadow-xl px-8 py-12 animate-fade-in"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
      >
        {/* Illustration expressive */}
        <div className="text-6xl mb-2">🍽️</div>
        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-900">
          Always regretting your order?
        </h1>
        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-md font-sans">
          Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
        </p>
        {/* Ligne problème */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xl text-gray-600 font-medium font-sans">
          <span>🧍 You hesitate.</span>
          <span className="hidden sm:inline">·</span>
          <span>🎯 You guess.</span>
          <span className="hidden sm:inline">·</span>
          <span>😩 You regret.</span>
        </div>
        {/* Bouton CTA */}
        <a
          href="#cta"
          className="mt-4 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ transition: "transform 0.2s, background 0.2s" }}
        >
          Join the waitlist
        </a>
      </div>
      {/* Animation fade-in (si non supportée par Tailwind, à ajouter dans index.css) */}
    </div>
  );
};

export default LandingPage; 