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
      className="relative z-10 flex flex-col items-start justify-center h-full max-w-xl w-full 
        mx-auto text-center md:mx-0 md:text-left 
        px-6 sm:px-10 md:px-0 md:pl-[12vw] lg:pl-[15vw] xl:pl-[15vw] 2xl:pl-[15vw] py-12 gap-6 md:gap-10"
      // Bloc toujours aligné à gauche, centré verticalement, padding gauche uniquement sur desktop
    >
      {/* Fond dégradé sous le bloc texte pour lisibilité */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/70 to-transparent pointer-events-none -z-10" />
      <h1 className="text-[#FFFFFF] text-5xl md:text-6xl font-bold font-sans drop-shadow-lg leading-relaxed">
        Bien manger, sans hésiter.
      </h1>
      <p className="text-[#FFFFFF] text-lg md:text-xl font-sans leading-relaxed drop-shadow-lg">
        L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-white text-[#4F46E5] font-semibold rounded-full px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl shadow-lg transition-all duration-200 mt-2 hover:bg-[#4F46E5] hover:text-white"
      >
        Je veux tester Choose !
      </button>
    </div>
  </section>
);

export default Hero; 