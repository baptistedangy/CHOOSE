import React from "react";

const Hero = ({ onCtaClick, imageUrl }) => (
  <section
    className="relative w-full min-h-[70vh] flex items-center"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
    <div className="relative z-10 max-w-2xl px-6 md:px-16 py-16 flex flex-col items-start gap-6">
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-xl md:text-2xl text-white/90">
        L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-[#5956E9] hover:bg-[#6C6AF5] text-white py-4 px-10 rounded-full font-semibold text-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-[#5956E9]/30 focus:ring-offset-2 transition-all duration-200"
      >
        Je veux tester Choose !
      </button>
    </div>
  </section>
);

export default Hero; 