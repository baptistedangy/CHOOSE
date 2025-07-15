import React from "react";

const Hero = ({ onCtaClick, imageUrl }) => (
  <section
    className="relative w-full min-h-[80vh] md:min-h-screen flex items-center"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay plus couvrant pour la lisibilité */}
    <div className="absolute inset-x-0 top-0 bottom-0 bg-black/70" />
    {/* Bloc texte */}
    <div
      className="relative z-10 flex flex-col items-start md:items-start justify-center md:justify-start gap-8 px-6 md:pl-20 py-12 md:py-0 w-full max-w-xl"
      style={{ minHeight: '0', marginTop: 'auto', marginBottom: 'auto' }}
    >
      <h1 className="text-5xl md:text-6xl font-bold font-sans text-white drop-shadow-lg text-left md:text-left">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-xl md:text-2xl text-white/90 font-sans max-w-xl text-left md:text-left">
        L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-[#5956E9] hover:bg-[#6C6AF5] text-white text-lg md:text-2xl py-3 md:py-4 px-8 md:px-10 rounded-full font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-[#5956E9]/30 focus:ring-offset-2 transition-all duration-200"
      >
        Je veux tester Choose !
      </button>
    </div>
  </section>
);

export default Hero; 