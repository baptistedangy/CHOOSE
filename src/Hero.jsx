import React from "react";

const Hero = ({ onCtaClick, imageUrl }) => (
  <section
    className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay dégradé sur la partie gauche */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
    </div>
    {/* Bloc texte */}
    <div
      className="relative z-10 flex flex-col items-center md:items-start justify-center max-w-xl px-8 md:px-16 py-12 gap-6 md:gap-10 h-full text-center md:text-left"
    >
      <h1 className="text-white text-5xl md:text-6xl font-bold font-sans drop-shadow-lg leading-relaxed">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-white/90 text-lg md:text-xl font-sans leading-relaxed">
        L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-semibold rounded-full py-4 px-10 shadow-lg hover:opacity-90 transition-all duration-200 mt-2"
      >
        Je veux tester Choose !
      </button>
    </div>
  </section>
);

export default Hero; 