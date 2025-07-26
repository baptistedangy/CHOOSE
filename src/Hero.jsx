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
      className="relative z-10 flex flex-col items-start justify-center h-full max-w-lg w-full 
        mx-auto text-center md:mx-0 md:text-left 
        px-4 sm:px-8 md:px-0 md:pl-[18vw] lg:pl-[22vw] xl:pl-[24vw] py-10 gap-4 md:gap-8"
      // Bloc toujours aligné à gauche, centré verticalement, padding gauche augmenté sur desktop
    >
      {/* Wrapper fond dégradé ajusté à la largeur du contenu */}
      <div className="relative bg-gradient-to-r from-black/80 to-transparent rounded-3xl backdrop-blur-sm p-8 md:p-10 w-fit max-w-full ml-4 sm:ml-8 md:ml-16">
        <h1 className="text-[#FFFFFF] text-5xl md:text-6xl font-bold font-sans drop-shadow-lg leading-relaxed">
          Bien manger, sans hésiter.
        </h1>
        <p className="text-[#FFFFFF] text-lg md:text-xl font-sans leading-relaxed drop-shadow-lg mt-4 md:mt-6">
          L'assistant qui t'aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
        </p>
        <button
          onClick={onCtaClick}
          className="bg-white text-[#4F46E5] font-semibold rounded-full py-4 text-lg md:py-6 md:text-2xl shadow-xl transition-all duration-200 mt-6 md:mt-8 hover:bg-[#4F46E5] hover:text-white px-0 md:px-0"
        >
          Je veux tester Choose !
        </button>
      </div>
    </div>
  </section>
);

export default Hero; 