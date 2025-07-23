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
    {/* Overlay global pour la lisibilité */}
    <div className="absolute inset-0 bg-black/70 z-0" />
    {/* Overlay dégradé derrière le texte uniquement */}
    <div className="absolute left-0 top-0 bottom-0 w-full max-w-xl h-full z-10 pointer-events-none">
      <div className="h-full w-full bg-gradient-to-r from-black/60 to-transparent" />
    </div>
    {/* Bloc texte */}
    <div
      className="relative z-20 flex flex-col items-center md:items-start justify-center gap-6 md:gap-10 px-4 md:pl-20 w-full max-w-xl h-full min-h-0 text-center md:text-left"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <h1 className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-bold font-sans text-white drop-shadow-lg leading-tight md:leading-tight">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-sm xs:text-base md:text-xl text-white/90 font-sans max-w-xl leading-relaxed md:leading-relaxed">
        L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-[#5956E9] hover:bg-[#6C6AF5] text-white text-base xs:text-lg md:text-2xl py-3 xs:py-3.5 md:py-5 px-6 xs:px-8 md:px-14 rounded-full font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#5956E9]/30 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-100 mt-2"
      >
        Je veux tester Choose !
      </button>
    </div>
  </section>
);

export default Hero; 