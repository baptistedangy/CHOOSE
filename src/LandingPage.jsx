import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-xl flex flex-col items-center text-center gap-8">
        {/* Illustration expressive */}
        <div className="text-7xl mb-2">🍽️</div>
        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-900">
          Always regretting your order?
        </h1>
        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-md">
          Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
        </p>
        {/* Ligne problème */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xl text-gray-600 font-medium">
          <span>🧍 You hesitate.</span>
          <span className="hidden sm:inline">·</span>
          <span>🎯 You guess.</span>
          <span className="hidden sm:inline">·</span>
          <span>😩 You regret.</span>
        </div>
        {/* Bouton CTA */}
        <a
          href="#cta"
          className="mt-4 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
};

export default LandingPage; 