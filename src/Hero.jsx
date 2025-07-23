import React from "react";

const Hero = ({ onCtaClick, imageUrl }) => (
  <section
    className="relative w-full min-h-screen h-[100vh] flex flex-row items-center justify-start overflow-hidden"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay plus couvrant pour la lisibilité */}
    <div className="absolute inset-0 bg-black/70 z-0" />
    {/* Bloc texte */}
    <div
      className="relative z-10 flex flex-col items-start justify-center gap-8 px-6 md:pl-20 w-full max-w-xl h-full min-h-0"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold font-sans text-white drop-shadow-lg text-left">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-xl md:text-2xl text-white/90 font-sans max-w-xl text-left">
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